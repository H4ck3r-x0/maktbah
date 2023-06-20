<?php

namespace App\Http\Controllers\Branch;

use App\Models\City;
use Inertia\Inertia;
use App\Models\District;
use Illuminate\Http\Request;
use App\Models\LibraryBranch;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branch = LibraryBranch::with('user')
            ->where('user_id', request()->user()->id)
            ->first();

        return  Inertia::render('Branch/Dashboard', [
            'branch' => $branch
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
        $branch = LibraryBranch::with('user')->findOrFail($id);

        $this->authorize('view', $branch);

        return  Inertia::render('Branch/Edit', [
            'branch' => $branch,
            'cities' => City::all(),
            'districts' => District::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique(LibraryBranch::class)->ignore($id)],
            'phone' => ['required', 'string', 'max:255', Rule::unique(LibraryBranch::class)->ignore($id)],
        ]);

        $branch = LibraryBranch::with('user')->findOrFail($id);
        $branch->name = $request->name;
        $branch->phone = $request->phone;
        $branch->city = $request->city;
        $branch->district = $request->district;
        $branch->google_maps = $request->google_maps;

        $branch->save();

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
