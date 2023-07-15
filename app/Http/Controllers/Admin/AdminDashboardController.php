<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Library;
use App\Http\Controllers\Controller;

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
                'ordersCount' => Order::count(),
                'orderTotalPyments' => Order::sum('total_payment'),
            ]
        );
    }
}
