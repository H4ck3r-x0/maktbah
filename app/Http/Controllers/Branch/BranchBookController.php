<?php

namespace App\Http\Controllers\Branch;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\UserCart;
use App\Models\BookLibrary;
use Illuminate\Http\Request;
use App\Models\LibraryBranch;
use App\Http\Controllers\Controller;

class BranchBookController extends Controller
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
            ->paginate(15)
            ->withQueryString();


        $library = LibraryBranch::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

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
                        $book->pivot->getFirstMediaUrl('bookAdImage')
                        : null,
                    'deleted_at' => $book->pivot->deleted_at,
                ]
            );
        }

        return Inertia::render('Branch/BranchBook/Create', [
            'books' => $books,
            'addedBooks' => $addedBooks,
            'filters' => request()->only(['search']),
            'currentPage' => request()->page,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user()->load('branch');

        foreach ($request->libBooks as $book) {
            $user->branch->books()->syncWithoutDetaching([
                $book['book_id'] => [
                    'qty' => $book['qty'],
                    'price' => $book['price'],
                    'offer' => $book['offer'],
                ]
            ]);

            if (isset($book['ad_image']) && gettype($book['ad_image']) === 'object') {
                $attachedBook = $user->branch->books()
                    ->wherePivot('book_id', $book['book_id'])
                    ->first()
                    ->pivot;

                $attachedBook->addMedia($book['ad_image'])
                    ->toMediaCollection('bookAdImage');
            }
        }

        return redirect()->back();
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $branch = LibraryBranch::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

        $branch->books()->updateExistingPivot($id, [
            'book_id' => $request->book_id,
            'qty' => $request->qty,
            'price' => $request->price,
        ]);

        // Get all the books from the pivot table.
        $BranchesBooks = BookLibrary::where('book_id', $request->book_id)->get();

        if ($request->hasFile('ad_image')) {
            $bookMedia = $branch->books()
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
        foreach ($BranchesBooks as $book) {
            foreach ($cart as $c) {
                if ($c->book_library_id === $book->id && $c->total_price !== $book->price) {
                    UserCart::where('book_library_id', $c->book_library_id)->update([
                        'total_price' => $book->price
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
        $user = request()->user()->load('branch');
        // Check if it has media 
        $bookMedia = $user->branch->books()
            ->wherePivot('book_id', $id)
            ->first();

        if ($bookMedia !== null && isset($bookMedia[0])) {
            $image =  $bookMedia->pivot->getMedia('bookAdImage');
            $image[0]->delete();
        }

        $user->branch->books()->updateExistingPivot($id, ['deleted_at' => now()]);
    }

    public function restore(string $id)
    {
        $user = request()->user()->load('branch');
        $user->branch->books()->updateExistingPivot($id, ['deleted_at' => null]);
    }
}
