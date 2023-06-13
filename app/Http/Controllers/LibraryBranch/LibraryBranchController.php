<?php

namespace App\Http\Controllers\LibraryBranch;

use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\District;
use Illuminate\Http\Request;
use App\Models\LibraryBaranch;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class LibraryBranchController extends Controller
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
        $user = User::with('library')->findOrFail(request()->user()->id);

        if ($user->library === null) {
            return redirect()
                ->route('library.create')
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية');
        }

        return  Inertia::render('LibraryBranch/Create', [
            'cities' => City::all(),
            'districts' => District::all()
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
            'phone' => 'required|string|max:255|unique:' . LibraryBaranch::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => request()->libraryOwnerName,
            'username' => request()->username,
            'password' => Hash::make(request()->password),
        ]);

        $mainLibrary = request()->user()->load('library');

        $user->libraryBaranch()->create([
            'name' => request()->name,
            'phone' => request()->phone,
            'CR' => request()->CR,
            'city' => request()->city,
            'district' => request()->district,
            'google_maps' => request()->google_maps,
            'library_id' => $mainLibrary->library->id
        ]);

        $user->assignRole(['library', 'branch']);

        return redirect()->route('library.dashboard');
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
        $branch = LibraryBaranch::with('user')->findOrFail($id);
        // $this->authorize('view', $branch);

        return  Inertia::render('LibraryBranch/Edit', [
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
            'name' => ['required', 'string', 'max:255', Rule::unique(LibraryBaranch::class)->ignore($id)],
            'phone' => ['required', 'string', 'max:255', Rule::unique(LibraryBaranch::class)->ignore($id)],
        ]);

        $branch = LibraryBaranch::with('user')->findOrFail($id);
        $branch->name = $request->name;
        $branch->phone = $request->phone;
        $branch->CR = $request->CR;
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
