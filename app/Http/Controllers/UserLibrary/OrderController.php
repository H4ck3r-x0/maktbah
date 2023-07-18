<?php

namespace App\Http\Controllers\UserLibrary;

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
            ->where('library_id', request()->user()->library->id)
            ->with([
                'details.book.library',
                'user:id,username,phone'
            ])
            ->when(request()->search, function ($query, $search) {
                $query->whereHas('user', function ($query) use ($search) {
                    $query->where('username', 'like', "%{$search}%");
                })->orWhere('id', $search);
            })
            ->latest()
            ->get();

        return Inertia::render('Library/Order/Index', [
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
                    'details.book.library',
                    'details.book.book',
                    'user:id,username,phone,city,district',
                ]
            )
            ->findOrFail($id);

        return Inertia::render('Library/Order/Show', [
            'order' => $order,
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
     * Cancel order for user.
     */
    public function cancel(string $id)
    {
        $order = Order::query()->findOrFail($id);

        if ($order->status == 'sent_to_library' || $order->status == 'confirmed') {
            $order->setStatus('canceled_by_library');
            return redirect()->back();
        }
    }

    /**
     * Confirm order for user.
     */
    public function confirm(string $id)
    {
        $order = Order::query()->findOrFail($id);

        if ($order->status == 'sent_to_library') {
            $order->setStatus('confirmed');
            return redirect()->back();
        }
    }

    /**
     * Restore order for user.
     */
    public function restore(string $id)
    {
        $order = Order::query()->findOrFail($id);

        if ($order->status == 'canceled_by_library') {
            $order->setStatus('sent_to_library');

            return redirect()->back();
        }
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
