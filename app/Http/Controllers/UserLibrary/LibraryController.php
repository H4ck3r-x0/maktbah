<?php

namespace App\Http\Controllers\UserLibrary;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\District;
use App\Models\Library;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with('library.branches')
            ->findOrFail(request()->user()->id);

        if ($user->library === null) {
            return redirect()
                ->route('library.create')
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية');
        }

        return Inertia::render('Library/Dashboard', [
            'library' => $user->library,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::with('library')
            ->findOrFail(request()->user()->id);

        if ($user->cannot('create', Library::class)) {
            return redirect()
                ->route('library.edit', $user->library->id)
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية');
        }

        return Inertia::render('Library/Create', [
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
            'phone' => 'required|string|max:255|unique:' . Library::class,
        ]);

        $request->user()->library()->create([
            'name' => request()->name,
            'phone' => request()->phone,
            'CR' => request()->CR,
            'city' => request()->city,
            'district' => request()->district,
            'google_maps' => request()->google_maps,
        ]);

        return redirect()
            ->route('library.dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $library = Library::with('user')->findOrFail($id);
        $this->authorize('view', $library);

        return Inertia::render('Library/Edit', [
            'library' => $library,
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
            'name' => ['required', 'string', 'max:255', Rule::unique(Library::class)->ignore($id)],
            'phone' => ['required', 'string', 'max:255', Rule::unique(Library::class)->ignore($id)],
        ]);

        $library = Library::with('user')->findOrFail($id);
        $library->name = $request->name;
        $library->phone = $request->phone;
        $library->CR = $request->CR;
        $library->city = $request->city;
        $library->district = $request->district;
        $library->google_maps = $request->google_maps;

        $library->save();

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
