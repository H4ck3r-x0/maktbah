<?php

namespace App\Http\Controllers\Branch;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BranchOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::query()
            ->where('branch_id', request()->user()->branch->id)
            ->with(['details.book.branch', 'user:id,name,phone'])
            ->when(request()->search, function ($query, $search) {
                $query->whereHas('user', function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%");
                })->orWhere('id', $search);
            })
            ->latest()
            ->get();


        return Inertia::render('Branch/Order/Index', [
            'orders' => $orders,
            'currentPage' => request()->page,
            'filters' => request()->only(['search', 'page']),
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
        $order = Order::query()
            ->with(
                [
                    'details.book.branch',
                    'details.book.book',
                    'user:id,name,phone,city,district'
                ]
            )
            ->findOrFail($id);


        return Inertia::render('Branch/Order/Show', [
            'order' => $order
        ]);
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
