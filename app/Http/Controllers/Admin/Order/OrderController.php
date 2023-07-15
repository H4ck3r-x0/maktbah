<?php

namespace App\Http\Controllers\Admin\Order;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::query()
            ->with([
                'details.book.library',
                'details.book.branch',
                'user:id,name,phone', 'library:id,name',
            ])
            ->when(request()->search, function ($query, $search) {
                $query->whereHas('user', function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                    ->orWhere('id', $search)
                    ->orWhereHas('library', function ($query) use ($search) {
                        $query->where('name', 'like', "%{$search}%");
                    })
                    ->orWhereHas('branch', function ($query) use ($search) {
                        $query->where('name', 'like', "%{$search}%");
                    });
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
                    'details.book.branch',
                    'details.book.book',
                    'user:id,name,phone,city,district',
                ]
            )

            ->findOrFail($id);

        $this->authorize('view', $order);

        return Inertia::render('User/Order/Show', [
            'order' => $order,
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
