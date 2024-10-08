<?php

namespace App\Http\Controllers\UserLibrary;

use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\District;
use App\Models\University;
use Illuminate\Http\Request;
use App\Models\LibraryBranch;
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

        return Inertia::render('LibraryBranch/Create', [
            'cities' => City::all(),
            'districts' => District::all(),
            'univisities' => University::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        request()->validate([
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'phone' => 'required|string|max:255|unique:' . LibraryBranch::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'username' => request()->username,
            'password' => Hash::make(request()->password),
        ]);

        $mainLibrary = request()->user()->load('library');

        $user->LibraryBranch()->create([
            'name' => $mainLibrary->library->name,
            'phone' => request()->phone,
            'city' => request()->city,
            'district' => request()->district,
            'google_maps' => request()->google_maps,
            'library_id' => $mainLibrary->library->id,
            'university' => request()->university,
        ]);

        $user->assignRole('branch');

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
        $branch = LibraryBranch::with('user')->findOrFail($id);

        return Inertia::render('LibraryBranch/Edit', [
            'branch' => $branch,
            'cities' => City::all(),
            'districts' => District::all(),
            'univisities' => University::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            'phone' => ['required', 'string', 'max:255', Rule::unique(LibraryBranch::class)->ignore($id)],
            'username' => ['required', 'string', 'alpha_dash', 'max:255', Rule::unique(User::class)->ignore($request->user_id)],
            'password' => ['nullable', Rules\Password::defaults()],
        ]);

        $branch = LibraryBranch::with('user')->findOrFail($id);
        $branch->phone = $request->phone;
        $branch->city = $request->city;
        $branch->district = $request->district;
        $branch->university = $request->university;
        $branch->google_maps = $request->google_maps;
        $branch->user->username = $request->username;

        if ($request->password) {
            $branch->user->password = Hash::make(request()->password);
        }

        $branch->user->save();
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
