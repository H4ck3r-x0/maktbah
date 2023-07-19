<?php

namespace App\Http\Controllers\LibraryBook;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\BookLibrary;
use App\Models\Library;
use App\Models\UserCart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibraryBookController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $books = Book::query()
            ->when(request()->search ?? false, function ($query, $search) {
                $query->where('book_name', 'like', "%{$search}%")
                    ->orWhere('author_name', 'like', "%{$search}%");
            })
            ->orderBy('id', 'DESC')
            ->paginate(10)
            ->withQueryString();

        $library = Library::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

        if ($library === null) {
            return redirect()
                ->route('library.create')
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية قبل إضافة كتب!');
        }

        $addedBooks = [];

        foreach ($library->books as $book) {
            array_push(
                $addedBooks,
                [
                    'book_id' => $book->pivot->book_id,
                    'qty' => $book->pivot->qty,
                    'price' => $book->pivot->price,
                    'offer' => $book->pivot->offer,
                    'ad_image' => $book->pivot->getFirstMediaUrl('bookAdImage') ?
                        $book->pivot->getFirstMediaUrl('bookAdImage') : null,
                    'deleted_at' => $book->pivot->deleted_at,
                ]
            );
        }

        return Inertia::render('LibraryBook/Create', [
            'books' => $books,
            'addedBooks' => $addedBooks,
            'filters' => request()->only(['search']),
            'currentPage' => request()->page,
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'qty' => 'required',
            'price' => 'required',
            'ad_image' => 'nullable|mimes:jpg,png,jpeg|max:1024',
        ]);

        $user = $request->user()->load('library');

        $user->library->books()->sync([
            $request->book_id => [
                'qty' => $request->qty,
                'price' => $request->price,
                'offer' => $request->offer,
            ],
        ], false);


        if (gettype($request->ad_image) === 'object') {
            $attachedBook = $user->library->books()
                ->wherePivot('book_id', $request->book_id)
                ->first()
                ->pivot;

            $attachedBook->addMedia($request->ad_image)
                ->toMediaCollection('bookAdImage');
        }

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'qty' => 'required',
            'price' => 'required',
        ]);

        $library = Library::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

        $library->books()->updateExistingPivot($id, [
            'book_id' => $request->book_id,
            'qty' => $request->qty,
            'price' => $request->price,
            'offer' => $request->offer,
        ]);

        // Get all the books from the pivot table.
        $librariesBooks = BookLibrary::where('book_id', $request->book_id)->get();

        if ($request->hasFile('ad_image')) {
            $bookMedia = $library->books()
                ->wherePivot('book_id', $id)
                ->first()
                ->pivot;

            $media = $bookMedia->getMedia('bookAdImage');
            if (isset($media[0])) {

                $media[0]->delete();
            }

            $bookMedia->addMedia($request->ad_image)
                ->toMediaCollection('bookAdImage');
        }
        // Get all users carts
        $cart = UserCart::get();

        // Compare user cart with the updated price, and update all users cart.
        foreach ($librariesBooks as $book) {
            foreach ($cart as $c) {
                if ($c->book_library_id === $book->id && $c->total_price !== $book->price) {
                    UserCart::where('book_library_id', $c->book_library_id)->update([
                        'total_price' => $book->price,
                    ]);
                }
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = request()->user()->load('library');
        // Check if it has media
        $bookMedia = $user->library->books()
            ->wherePivot('book_id', $id)
            ->first();

        if ($bookMedia !== null && isset($bookMedia[0])) {
            $image = $bookMedia->pivot->getMedia('bookAdImage');
            $image[0]->delete();
        }

        $user->library->books()->updateExistingPivot($id, ['deleted_at' => now()]);
    }

    public function restore(string $id)
    {
        $user = request()->user()->load('library');

        $user->library->books()->updateExistingPivot($id, ['deleted_at' => null]);
    }
}
