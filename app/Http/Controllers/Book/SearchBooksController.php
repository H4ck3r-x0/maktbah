<?php

namespace App\Http\Controllers\Book;

use App\Models\Book;
use App\Models\City;
use Inertia\Inertia;
use App\Models\AdminAds;
use App\Models\District;
use App\Models\UserCart;
use App\Models\BookLibrary;
use App\Models\FailedSearch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

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

            $bookExists = Book::where('book_name', 'like', "%{$search}%")->exists();
            if (!$bookExists) {
                FailedSearch::create([
                    'query' => $search,
                    'user_id' => request()->user() ? request()->user()->id : null,
                ]);
            }
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

        $adminAd = AdminAds::first();
        $adminAdImage = $adminAd ? $adminAd->getAdminAdImageAttribute() : null;

        return Inertia::render('Book/Search', [
            'books' => $books,
            'topSilingBooks' => $this->topSilingBooks(),
            'currentPage' => request()->page,
            'cities' => City::all(),
            'districts' => District::all(),
            'adminAdImage' => $adminAdImage,
            'filters' => request()->only(['search', 'city', 'district', 'page']),
        ]);
    }

    public function topSilingBooks()
    {
        $topSellingBooks = DB::table('order_details')
            ->join('orders', 'order_details.order_id', '=', 'orders.id')
            ->join('statuses', 'orders.id', '=', 'statuses.model_id')
            ->select('order_details.book_id', DB::raw('count(distinct orders.id) as total_orders'), DB::raw('SUM(order_details.total_price) as benefits'))
            ->where('statuses.name', 'confirmed')
            ->where('statuses.model_type', 'App\Models\Order')
            ->groupBy('order_details.book_id')
            ->orderBy('total_orders', 'desc')
            ->take(3)
            ->get();

        $bookIds = $topSellingBooks->pluck('book_id')->toArray();

        $books = Book::whereIn('id', $bookIds)->get();

        $orderCounts = $topSellingBooks->pluck('total_orders', 'book_id'); // Get order counts with book_id as keys

        $books = $books->sortByDesc(function ($book) use ($orderCounts) {
            return $orderCounts[$book->id];
        });

        return $books->values();
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
            'branch_id' => $request->library_branch_id,
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
