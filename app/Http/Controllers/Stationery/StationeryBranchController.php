<?php

namespace App\Http\Controllers\Stationery;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\District;
use Illuminate\Http\Request;
use App\Models\StationeryBranche;
use App\Http\Controllers\Controller;

class StationeryBranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::with('stationery')->findOrFail(request()->user()->id);

        if ($user->stationery === null) {
            return redirect()
                ->route('stationery.dashboard');
        }
        return Inertia::render('StationeryBranch/Create', [
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
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'phone' => 'required|string|max:255|unique:' . StationeryBranche::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'username' => request()->username,
            'password' => Hash::make(request()->password),
        ]);

        $mainStationery = request()->user()->load('stationery');

        $user->stationeryBranche()->create([
            'name' => $mainStationery->stationery->name,
            'phone' => request()->phone,
            'city' => request()->city,
            'district' => request()->district,
            'google_maps' => request()->google_maps,
            'stationery_id' => $mainStationery->stationery->id,
        ]);

        $user->assignRole('stationery_branch');

        return redirect()->route('stationery.dashboard');
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
        $stationery = StationeryBranche::with('user')->findOrFail($id);
        // $this->authorize('view', $library);

        return Inertia::render('StationeryBranch/Edit', [
            'stationery' => $stationery,
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            'username' => ['required', 'string', 'alpha_dash', 'max:255', Rule::unique(User::class)->ignore($id)],
            'phone' => ['required', 'string', 'max:255', Rule::unique(StationeryBranche::class)->ignore($id)],
            'password' => ['nullable', Rules\Password::defaults()],
        ]);

        $stationery = StationeryBranche::with('user')->findOrFail($id);
        $stationery->phone = $request->phone;
        $stationery->city = $request->city;
        $stationery->district = $request->district;
        $stationery->google_maps = $request->google_maps;
        $stationery->user->username = $request->username;

        if ($request->password) {
            $stationery->user->password = Hash::make(request()->password);
        }

        $stationery->user->save();
        $stationery->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
