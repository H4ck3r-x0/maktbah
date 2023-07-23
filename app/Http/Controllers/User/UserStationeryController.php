<?php

namespace App\Http\Controllers\User;

use App\Models\City;
use Inertia\Inertia;
use App\Models\District;
use App\Models\Stationery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Note;

class UserStationeryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Note $note)
    {
        $query = Stationery::query()->with(['printingOptions', 'branches']);

        if (request()->has('search')) {
            $search = request()->input('search');
            $query->where('name', 'like', "%{$search}%");
        }

        if (request()->has('city')) {
            $city = request()->input('city');
            $query->where('city', 'like', "%{$city}%");
        }

        if (request()->has('district')) {
            $district = request()->input('district');
            $query->where('district', 'like', "%{$district}%");
        }

        $stationeries = $query->paginate(5)->withQueryString();

        return Inertia::render('Stationery/Search', [
            'note' => $note->load('user'),
            'stationeries' => $stationeries,
            'currentPage' => request()->page,
            'cities' => City::all(),
            'districts' => District::all(),
            'filters' => request()->only(['search', 'city', 'district', 'page']),
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
