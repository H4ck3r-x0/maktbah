<?php

namespace App\Http\Controllers\Admin\Order;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::query()
            ->with(['details.book.library', 'user:id,name,phone'])
            ->when(request()->search, function ($query, $search) {
                $query->whereHas('user', function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%");
                })->orWhere('id', $search);
            })
            ->latest()
            ->get();

        return Inertia::render('Admin/Order/Index', [
            'orders' => $orders,
            'currentPage' => request()->page,
            'filters' => request()->only(['search', 'page']),
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::query()
            ->with(
                [
                    'details.book.library',
                    'details.book.book',
                    'user:id,name,phone,city,district'
                ]
            )

            ->findOrFail($id);

        $this->authorize('view', $order);

        return Inertia::render('User/Order/Show', [
            'order' => $order
        ]);
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
