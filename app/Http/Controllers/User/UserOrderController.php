<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Library;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\LibraryBranch;
use Illuminate\Support\Facades\Notification;
use App\Notifications\Order\OrderCreatedNotification;

class UserOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::query()
            ->where('user_id', request()->user()->id)
            ->with([
                'details.book.library',
                'details.book.branch',
            ])
            ->latest()
            ->get();

        return Inertia::render('User/Order/Index', [
            'orders' => $orders,
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
                    'details.book.branch',
                    'details.book.book',
                    'user:id,username,phone,city,district',
                ]
            )
            ->findOrFail($id);

        $this->authorize('view', $order);

        return Inertia::render('User/Order/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Cancel order for user.
     */
    public function cancel(string $id)
    {
        $order = Order::query()->findOrFail($id);
        $this->authorize('update', $order);

        if ($order->status == 'sent_to_library') {
            $order->setStatus('canceled_by_user');
            return redirect()->back();
        }
    }

    /**
     * Restore order for user.
     */
    public function restore(string $id)
    {
        $order = Order::query()
            ->with(['library', 'branch'])
            ->findOrFail($id);

        $this->authorize('update', $order);

        if ($order->status == 'canceled_by_user') {
            $order->setStatus('sent_to_library');

            if ($order->library !== null) {
                $library = Library::find($order->library_id);
                $user = User::find($library->user_id);
                Notification::send(
                    $user,
                    (new OrderCreatedNotification($order))
                );
            }

            if ($order->branch !== null) {
                $library = LibraryBranch::find($order->branch_id);
                $user = User::find($library->user_id);
                Notification::send(
                    $user,
                    (new OrderCreatedNotification($order))
                );
            }

            return redirect()->back();
        }
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
