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
        $books = Book::all();
        $library = Library::where('user_id', request()->user()->id)
            ->with('books')
            ->first();

        $addedBooksIds = [];
        foreach ($library->books as $book) {
            array_push($addedBooksIds, ['book_id' => $book->pivot->book_id, 'qty' => $book->pivot->qty, 'price' => $book->pivot->price]);
        }

        return Inertia::render('LibraryBook/Create', [
            'books' => $books,
            'addedBooksIds' => $addedBooksIds,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->books);
        $user = $request->user()->load('library');
        $data = $request->books;
        $syncData = [];
        // dd($data);
        foreach ($data as $key => $book) {
            $syncData[$key] = ['book_id' => $book['book_id'], 'qty' => $book['qty'], 'price' => $book['price']];
        }
        $user->library->books()->syncWithoutDetaching($syncData);

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
        // dd($request->book['book_id']);
        $library = Library::where('user_id', request()->user()->id)
            ->with('books')
            ->first();
        $library->books()->updateExistingPivot($request->book['book_id'], [
            'book_id' => $request->book['book_id'],
            'qty' => $request->book['qty'],
            'price' => $request->book['price'],
        ]);
        // $library->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
