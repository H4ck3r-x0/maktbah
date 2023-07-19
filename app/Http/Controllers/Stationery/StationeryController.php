<?php

namespace App\Http\Controllers\Stationery;

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
        return Inertia::render('Stationery/Dashboard', [
            'stationery' => Stationery::where('user_id', request()->user()->id)->first(),
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stationery = Stationery::where('user_id', request()->user()->id)->first();
        $printingOptions = $stationery->printingOptions;

        return Inertia::render('Stationery/Options/Create', [
            'stationery' => Stationery::where('user_id', request()->user()->id)->first(),
            'printingOptions' => $printingOptions,
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'phone' => 'required|string|max:255|unique:' . Stationery::class,
            'name' => 'required|string|max:255|unique:' . Stationery::class,
            'print_price' => 'required|max:255',
            'city' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'google_maps' => 'required|string|max:255',
        ]);


        $request->user()->stationery()->create(
            [
                'name' => request()->name,
                'phone' => request()->phone,
                'print_price' => request()->print_price,
                'city' => request()->city,
                'district' => request()->district,
                'google_maps' => request()->google_maps,
            ]
        );
        return redirect()->back();
    }

    public function storeOptions(Request $request)
    {
        $validatedData = $request->validate([
            'print_price' => 'required|string',
            'single_face_printing' => 'required|string',
            'double_sided_printing' => 'required|string',
            'colored_printing' => 'required|string',
            'ribbon_print' => 'required|string',
        ]);

        $stationery = $request->user()->stationery;

        $existingOptions = $stationery->printingOptions->keyBy('option');

        foreach ($validatedData as $key => $option) {
            if ($existingOptions->has($key)) {
                $existingOptions->get($key)->update(['price' => $option]);
            } else {
                $stationery->printingOptions()->create(['option' => $key, 'price' => $option]);
            }
        }

        return redirect()->back();
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
