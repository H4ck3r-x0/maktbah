<?php

namespace App\Http\Controllers\Book;

use App\Models\City;
use Inertia\Inertia;
use App\Models\District;
use App\Models\BookLibrary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchBooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = BookLibrary::query()
            ->with(['library:id,name,city,district,user_id', 'book:id,book_name,author_name,edition_number,volume_number'])
            ->when(request()->search ?? false, function ($query, $search) {
                $query->whereHas('book', function ($query) use ($search) {
                    $query->where('book_name', 'like', "%{$search}%")
                        ->orWhere('author_name', 'like', "%{$search}%");
                });
            })
            ->when(request()->city ?? false, function ($query, $city) {
                $query->whereHas('library', function ($query) use ($city) {
                    $query->where('city', 'like', "%{$city}%");
                });
            })
            ->when(request()->district ?? false, function ($query, $district) {
                $query->whereHas('library', function ($query) use ($district) {
                    $query->where('district', 'like', "%{$district}%");
                });
            })
            ->orderBy('id', 'DESC')
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Book/Search', [
            'books' => $books,
            'filters' => request()->only(['search']),
            'currentPage' => request()->page,
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
