<?php

namespace App\Http\Controllers\Admin\Library;

use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\District;
use Illuminate\Http\Request;
use App\Models\LibraryBranch;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = LibraryBranch::query()
            ->with(['user',  'library:id,name', 'orders'])
            ->withCount(['orders as total_payment' => function ($query) {
                $query->select(DB::raw('sum(total_payment)'))
                    ->whereHas('statuses', function ($query) {
                        $query->where('name', 'confirmed');
                    });
            }])
            ->when(request()->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($query) use ($search) {
                        $query->where('username', 'like', "%{$search}%");
                    });
            })
            ->when(request()->city, function ($query, $city) {
                $query->where('city', $city);
            })
            ->when(request()->district, function ($query, $district) {
                $query->where('district', $district);
            })
            ->when(request()->orders, function ($query, $orders) {
                $query->join('orders', 'library_branches.id', '=', 'orders.branch_id')
                    ->groupBy('library_branches.id')
                    ->orderByRaw($orders === 'highest' ? 'SUM(orders.total_payment) DESC' : 'SUM(orders.total_payment) ASC');
            })
            ->orderBy('id', 'DESC')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Branch/Index', [
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
            'libraryOwnerName' => 'required|string|max:255|unique:users,name,' . User::class,
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'phone' => 'required|string|max:255|unique:' . Library::class,
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
