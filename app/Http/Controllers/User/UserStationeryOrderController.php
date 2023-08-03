<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\StationeryOrder;
use App\Http\Controllers\Controller;

class UserStationeryOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = request()->user()->id;

        $query = StationeryOrder::query()
            ->where('user_id', $userId)
            ->with([
                'stationery',
                'stationeryBranch',
                'user',
                'note',
            ]);


        if (request()->has('search')) {
            $search = request()->input('search');
            $query->when($search, function ($query, $search) {
                $query->where('id', 'like', "%{$search}%")
                    ->orWhereHas('stationery', fn ($subQuery) =>
                    $subQuery->where('name', 'like', "%{$search}%"))
                    ->orWhereHas('stationeryBranch', fn ($subQuery) =>
                    $subQuery->where('name', 'like', "%{$search}%"));
            });
        }

        if (request()->has('status')) {
            $status = request()->input('status');
            $query->when($status, fn ($query, $status) => $query->currentStatus($status));
        }

        $orders = $query
            ->latest()
            ->get();

        return Inertia::render('User/StationeryOrder/Index', [
            'orders' => $orders,
            'STATUS' => StationeryOrder::STATUS,
            'filters' => request()->only(['search', 'status']),
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
        $order = StationeryOrder::query()
            ->with([
                'stationery',
                'stationeryBranch',
                'user',
                'note',
            ])
            ->findOrFail($id);


        return Inertia::render('User/StationeryOrder/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Cancel order for user.
     */
    public function cancel(string $id)
    {
        $order = StationeryOrder::query()->findOrFail($id);

        if ($order->status == 'sent_to_stationery') {
            $order->setStatus('canceled_by_user');
            return redirect()->back();
        }
    }


    /**
     * Restore order for user.
     */
    public function restore(string $id)
    {
        $order = StationeryOrder::query()
            ->with(['user', 'stationery'])
            ->findOrFail($id);


        if ($order->status == 'canceled_by_user') {
            $order->setStatus('sent_to_stationery');

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
