<?php

namespace App\Http\Controllers\Admin\Common;

use App\Http\Controllers\Controller;
use App\Models\Major;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MajorController extends Controller
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
        return Inertia::render('Admin/Settings/Major/Create', [
            'majors' => Major::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:'.Major::class,
            'levels' => 'required|numeric',
        ]);

        $requestedLevels = (int) $request->levels;
        $levels = [];

        for ($i = 1; $i <= $requestedLevels; $i++) {
            array_push($levels, $i);
        }

        Major::create([
            'name' => $request->name,
            'levels' => $levels,
        ]);

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
        return Inertia::render('Admin/Settings/Major/Edit', [
            'major' => Major::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => ['required', 'string', Rule::unique(Major::class)->ignore($id)],
            'levels' => 'required|numeric',
        ]);

        $requestedLevels = (int) $request->levels;
        $levels = [];

        for ($i = 1; $i <= $requestedLevels; $i++) {
            array_push($levels, $i);
        }

        $major = Major::findOrFail($id);
        $major->name = $request->name;
        $major->levels = $levels;
        $major->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Major::destroy($id);

        return redirect()->back();
    }
}
