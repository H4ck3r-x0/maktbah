<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Library;
use App\Models\Order;
use App\Models\User;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
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
            ]
        );
    }
}
