<?php

namespace App\Http\Controllers\LibraryBook;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Library;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibraryBookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $books = Book::query()
            ->when(request()->search ?? false, function ($query, $search) {
                $query->where('book_name', 'like', "%{$search}%")
                    ->orWhere('author_name', 'like', "%{$search}%");
            })->orderBy('id', 'DESC')
            ->paginate(15)
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
            array_push($addedBooks, ['book_id' => $book->pivot->book_id, 'qty' => $book->pivot->qty, 'price' => $book->pivot->price]);
        }

        return Inertia::render('LibraryBook/Create', [
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
        $user = $request->user()->load('library');

        foreach ($request->libBooks as $book) {
            $user->library->books()->sync([
                $book['book_id'] => [
                    'qty' => $book['qty'], 'price' => $book['price']
                ]
            ], false);
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
        $library = Library::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

        $library->books()->updateExistingPivot($id, [
            'book_id' => $request->book[0]['book_id'],
            'qty' => $request->book[0]['qty'],
            'price' => $request->book[0]['price'],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = request()->user()->load('library');
        $user->library->books()->wherePivot('book_id', $id)->detach();
    }
}
