<?php

namespace App\Http\Controllers\Book;

use App\Models\City;
use Inertia\Inertia;
use App\Models\District;
use App\Models\BookLibrary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UserCart;
use Illuminate\Support\Facades\Redis;

class SearchBooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = BookLibrary::query()
            ->with(['library:id,name,city,district,user_id', 'book:id,book_name,author_name,edition_number,volume_number'])
            ->where('qty', '>', 0)
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
            ->when(request()->price ?? false, function ($query, $price) {
                return $price === 'min'
                    ? $query->orderBy('price', 'ASC')
                    : $query->orderBy('price', 'DESC');
            })
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Book/Search', [
            'books' => $books,
            'currentPage' => request()->page,
            'cities' => City::all(),
            'districts' => District::all(),
            'filters' => request()->only(['search', 'price', 'city', 'district', 'page']),
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
        $request->user()->carts()->create([
            'total_price' => $request->price,
            'book_library_id' => $request->id,
        ]);


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
    public function destroy(Request $request)
    {
        UserCart::where('book_library_id', $request->id)->delete();
    }
}
