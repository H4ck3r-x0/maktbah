<?php

namespace App\Http\Controllers\Admin\Stationery;

use App\Models\City;
use Inertia\Inertia;
use App\Models\District;
use App\Models\Stationery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StationeryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Stationery::query()
            ->with(['user', 'stationeryOrders'])
            ->withSum('stationeryOrders', 'total_payment')
            ->when(request()->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($query) use ($search) {
                        $query->where('username', 'like', "%{$search}%");
                    });
            })
            ->when(request()->city, function ($query, $city) {
                $query->where('city', $city);
            })
            ->when(request()->district, function ($query, $district) {
                $query->where('district', $district);
            })
            ->when(request()->orders, function ($query, $orders) {
                $query->whereHas('stationeryOrders', function () use ($orders, $query) {
                    $orders === 'highest' ?
                        $query->orderBy('stationery_orders_sum_total_payment', 'DESC')
                        : $query->orderBy('stationery_orders_sum_total_payment', 'ASC');
                });
            })
            ->orderBy('id', 'DESC')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Stationery/Index', [
            'stationeries' => $query,
            'cities' => City::all(),
            'districts' => District::all(),
            'filters' => request()->only(['search', 'city', 'district', 'orders']),
            'currentPage' => request()->page,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
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
        //
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
