<?php

namespace App\Http\Controllers\Stationery;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\Stationery;
use Illuminate\Http\Request;
use App\Models\StationeryOrder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class StationeryOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = request()->user()->load('stationery');
        $orders = StationeryOrder::query()
            ->where('stationery_id', $user->stationery->id)
            ->with([
                'stationery',
                'user',
                'note',
            ])
            ->latest()
            ->get();

        return Inertia::render('Stationery/Order/Index', [
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
    public function store(Request $request, Note $note, Stationery $stationery)
    {
        try {
            DB::transaction(function () use ($request, $stationery, $note) {
                $order = new StationeryOrder();
                $order->note_id = $note->id;
                $order->stationery_id = $stationery->id;
                $order->selected_pages = $note->number_of_pages;
                $order->options = json_encode($request->selectedOptions);
                $order->user_id = $request->user()->id;

                // Calculate and update the service fee
                $order->total = $request->totalPrice;
                $serviceFee = $order->total * StationeryOrder::SERVICE_FEE;
                // Calculate the total payment by subtracting the service fee from the total price
                $order->total_payment = $order->total - $serviceFee;
                // Save the service fee in the 'service_fee' column
                $order->service_fee = $serviceFee;
                $order->save();
                $order->setStatus(StationeryOrder::STATUS['sent_to_stationery']['key']);
            });

            return redirect()->route('order.stationery.index');
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = StationeryOrder::query()
            ->with([
                'stationery',
                'user',
                'note',
            ])
            ->findOrFail($id);


        return Inertia::render('Stationery/Order/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Cancel order for user.
     */
    public function cancel(string $id)
    {
        $order = StationeryOrder::query()->findOrFail($id);

        if ($order->status == 'sent_to_stationery' || $order->status == 'confirmed') {
            $order->setStatus('canceled_by_stationery');
            return redirect()->back();
        }
    }

    /**
     * Confirm order for user.
     */
    public function confirm(string $id)
    {
        $order = StationeryOrder::query()->findOrFail($id);

        if ($order->status == 'sent_to_stationery') {
            $order->setStatus('confirmed');
            return redirect()->back();
        }
    }

    /**
     * Restore order for user.
     */
    public function restore(string $id)
    {
        $order = StationeryOrder::query()->findOrFail($id);

        if ($order->status == 'canceled_by_stationery') {
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
