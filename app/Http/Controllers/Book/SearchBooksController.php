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
        $query = BookLibrary::query()
            ->with([
                'library:id,name,city,district,user_id',
                'branch:id,name,city,district,user_id',
                'book:id,book_name,author_name,edition_number,volume_number',
            ])
            ->where('qty', '>', 0);

        if (request()->has('search')) {
            $search = request()->input('search');
            $query->whereHas('book', function ($query) use ($search) {
                $query->where('book_name', 'like', "%{$search}%")
                    ->orWhere('author_name', 'like', "%{$search}%");
            });
        }

        if (request()->has('city')) {
            $city = request()->input('city');
            $query->whereHas('library', function ($query) use ($city) {
                $query->where('city', 'like', "%{$city}%");
            })
                ->orWhereHas('branch', function ($query) use ($city) {
                    $query->where('city', 'like', "%{$city}%");
                });
        }

        if (request()->has('district')) {
            $district = request()->input('district');
            $query->whereHas('library', function ($query) use ($district) {
                $query->where('district', 'like', "%{$district}%");
            })
                ->orWhereHas('branch', function ($query) use ($district) {
                    $query->where('district', 'like', "%{$district}%");
                });
        }

        $books = $query->paginate(5)->withQueryString();

        return Inertia::render('Book/Search', [
            'books' => $books,
            'currentPage' => request()->page,
            'cities' => City::all(),
            'districts' => District::all(),
            'filters' => request()->only(['search', 'city', 'district', 'page']),
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->user()->carts()->create([
            'total_price' => $request->price,
            'book_library_id' => $request->id,
            'library_id' => $request->library_id,
            'branch_id' => $request->library_branch_id
        ]);

        return redirect()->back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        UserCart::where('book_library_id', $request->id)->delete();
    }
}
