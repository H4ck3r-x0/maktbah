<?php

namespace App\Http\Controllers\Admin\Common;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::query()
            ->withCount(['countOrders'])
            ->when(request()->search, function ($query, $search) {
                $query->where('book_name', 'like', "%{$search}%")
                    ->orWhere('author_name', 'like', "%{$search}%");
            })
            ->when(request()->orderd, function ($query, $orderd) {
                $query->whereHas('countOrders', function () use ($orderd, $query) {
                    $orderd === 'highest' ?
                        $query->orderBy('count_orders_count', 'DESC')
                        : $query->orderBy('count_orders_count', 'ASC');
                });
            })
            ->orderBy('id', 'DESC')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Book/Index', [
            'books' => $books,
            'filters' => request()->only(['search', 'orderd']),
            'currentPage' => request()->page,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Book/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'book_name' => 'required|string|max:255|unique:' . Book::class,
            'author_name' => 'required|string|max:255',
            'edition_number' => 'required|string|max:255',
            'volume_number' => 'required|string|max:255',
        ]);

        Book::create($request->all());

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
        return Inertia::render('Admin/Book/Edit', [
            'book' => Book::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'book_name' => 'required|string|max:255',
            'author_name' => 'required|string|max:255',
            'edition_number' => 'required|string|max:255',
            'volume_number' => 'required|string|max:255',
        ]);

        $book = Book::findOrFail($id);

        $book->book_name = $request->book_name;
        $book->author_name = $request->author_name;
        $book->edition_number = $request->edition_number;
        $book->volume_number = $request->volume_number;

        $book->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
