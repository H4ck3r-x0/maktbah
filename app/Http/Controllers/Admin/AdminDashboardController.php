<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Library;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $topSellingBooks = DB::table('order_details')
            ->join('orders', 'order_details.order_id', '=', 'orders.id')
            ->join('books', 'order_details.book_id', '=', 'books.id')
            ->join('statuses', 'orders.id', '=', 'statuses.model_id')
            ->join('book_library', 'books.id', '=', 'book_library.book_id')
            ->select('order_details.book_id', DB::raw('count(*) as total'), DB::raw('SUM(order_details.total_price) as benefits'))
            ->where('statuses.name', 'confirmed')
            ->where('statuses.model_type', 'App\Models\Order')
            ->groupBy('order_details.book_id')
            ->orderBy('total', 'desc')
            ->take(3)
            ->get();

        $bookIds = $topSellingBooks->pluck('book_id')->toArray();
        $totals = $topSellingBooks->pluck('total', 'book_id')->toArray();
        $benefits = $topSellingBooks->pluck('benefits', 'book_id')->toArray();

        $books = Book::whereIn('id', $bookIds)->get();

        foreach ($books as $book) {
            $book->total_sold = $totals[$book->id];
            $book->benefits = $benefits[$book->id];
        }

        $books = $books->sortByDesc(function ($book) use ($totals) {
            return $totals[$book->id]; // Sort by total_sold count in descending order
        });



        return Inertia::render(
            'Admin/Dashboard',
            [
                'booksCount' => Book::count(),
                'libraryCount' => Library::count(),
                'studentCount' => User::role('user')->count(),
                'maleGenderCount' => User::where('gender', 'male')->count(),
                'femaleGenderCount' => User::where('gender', 'female')->count(),
                'orderTotalPyments' => Order::sum('total_payment'),
                'totalEarnings' => Order::currentStatus('confirmed')->sum('service_fee'),
                'ordersCount' => Order::count(),
                'ordersCanceledByLibrary' => Order::currentStatus('canceled_by_library')->count(),
                'ordersCanceledByUser' => Order::currentStatus('canceled_by_user')->count(),
                'confiremdOrders' => Order::currentStatus('confirmed')->count(),
                'topSellingBooks' => $books->values(),
            ]
        );
    }
}
