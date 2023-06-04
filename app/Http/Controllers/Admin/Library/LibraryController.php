<?php

namespace App\Http\Controllers\Admin\Library;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Country;
use App\Models\Library;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Support\Facades\Hash;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Library/Index', [
            'libraries' => Library::with('user')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Library/Create', [
            'countries' => Country::all(),
            'cities' => City::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        request()->validate([
            'libraryOwnerName' => 'required|string|max:255|unique:users,name,' . User::class,
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => request()->libraryOwnerName,
            'username' => request()->username,
            'password' => Hash::make(request()->password),
        ]);

        $user->library()->create([
            'name' => request()->name,
            'country' => request()->country,
            'city' => request()->city,
            'google_maps' => request()->google_maps,
        ]);

        $user->assignRole('library');

        return redirect()->route('admin.library.index');
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
        $library = Library::with('user')->findOrFail($id);

        return Inertia::render('Admin/Library/Edit', [
            'library' => $library,
            'countries' => Country::all(),
            'cities' => City::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $library = Library::with('user')->findOrFail($id);
        $library->name = $request->name;
        $library->country = $request->country;
        $library->city = $request->city;
        $library->google_maps = $request->google_maps;

        $library->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Library::destroy($id);

        return redirect()->back();
    }
}
