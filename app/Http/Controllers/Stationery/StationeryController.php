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
            'city' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'google_maps' => 'required|string|max:255',
        ]);


        $request->user()->stationery()->create(
            [
                'name' => request()->name,
                'phone' => request()->phone,
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
            'single_face_printing' => 'required|string',
            'single_face_printing_per_page' => 'required|integer',
            'double_sided_printing' => 'required|string',
            'double_sided_printing_per_page' => 'required|integer',
            'colored_printing' => 'required|string',
            'colored_printing_per_page' => 'required|integer',
            'ribbon_print' => 'required|string',
            'ribbon_print_per_page' => 'required|integer',
        ]);

        $stationery = $request->user()->stationery;

        // Store the options along with their per_page values
        $options = [
            'single_face_printing' => $validatedData['single_face_printing'],
            'double_sided_printing' => $validatedData['double_sided_printing'],
            'colored_printing' => $validatedData['colored_printing'],
            'ribbon_print' => $validatedData['ribbon_print'],
        ];

        $perPageOptions = [
            'single_face_printing' => $validatedData['single_face_printing_per_page'],
            'double_sided_printing' => $validatedData['double_sided_printing_per_page'],
            'colored_printing' => $validatedData['colored_printing_per_page'],
            'ribbon_print' => $validatedData['ribbon_print_per_page'],
        ];

        foreach ($options as $key => $price) {
            $existingOption = $stationery->printingOptions()->updateOrCreate(
                ['option' => $key],
                ['price' => $price, 'per_page' => $perPageOptions[$key]]
            );
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
