<?php

namespace App\Http\Controllers\Admin\Library;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\District;
use App\Models\Library;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Library::query()
            ->with(['user', 'orders'])
            ->withSum('orders', 'total_payment')
            ->when(request()->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($query) use ($search) {
                        $query->where('name', 'like', "%{$search}%");
                    });
            })
            ->when(request()->city, function ($query, $city) {
                $query->where('city', $city);
            })
            ->when(request()->district, function ($query, $district) {
                $query->where('district', $district);
            })
            ->when(request()->orders, function ($query, $orders) {
                $query->whereHas('orders', function () use ($orders, $query) {
                    $orders === 'highest' ?
                        $query->orderBy('orders_sum_total_payment', 'DESC')
                        : $query->orderBy('orders_sum_total_payment', 'ASC');
                });
            })
            ->orderBy('id', 'DESC')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Library/Index', [
            'libraries' => $query,
            'cities' => City::all(),
            'districts' => District::all(),
            'filters' => request()->only(['search', 'city', 'district', 'orders']),
            'currentPage' => request()->page,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Library/Create', [
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        request()->validate([
            'libraryOwnerName' => 'required|string|max:255|unique:users,name,'.User::class,
            'username' => 'required|string|alpha_dash|max:255|unique:'.User::class,
            'phone' => 'required|string|max:255|unique:'.Library::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => request()->libraryOwnerName,
            'username' => request()->username,
            'password' => Hash::make(request()->password),
        ]);

        $user->library()->create([
            'name' => request()->name,
            'phone' => request()->phone,
            'CR' => request()->CR,
            'city' => request()->city,
            'district' => request()->district,
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
        Library::destroy($id);

        return redirect()->back();
    }
}
