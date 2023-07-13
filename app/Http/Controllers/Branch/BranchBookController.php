<?php

namespace App\Http\Controllers\Branch;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\LibraryBranch;

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
            // ->with('books')
            ->first();

        dd($library);
        $addedBooks = [];
        foreach ($library->books as $book) {
            array_push(
                $addedBooks,
                [
                    'book_id' => $book->pivot->book_id,
                    'qty' => $book->pivot->qty,
                    'price' => $book->pivot->price,
                    'offer' => $book->pivot->offer,
                    // 'ad_image' => $book->pivot->getFirstMediaUrl('bookAdImage') ? $book->pivot->getFirstMediaUrl('bookAdImage') : null
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
