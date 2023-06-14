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
            ->with('books:id')
            ->first('id');

        $addedBooksIds = $library->books->pluck('id');

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

        $user = $request->user()->load('library');
        $books = Book::find($request->booksIds);
        $user->library->books()->sync($books);

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
