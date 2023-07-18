<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query()
            ->with('user_profile:university,major,level,user_id')
            ->when(request()->search, function ($query, $search) {
                $query->where('username', 'like', "%{$search}%");
            })
            ->when(request()->account_type, function ($query, $account_type) {
                $query->whereHas('roles', function ($query) use ($account_type) {
                    return $query->where('name', $account_type);
                });
            })
            ->when(request()->gender, function ($query, $gender) {
                $query->where('gender', 'like', "%{$gender}%");
            })
            ->orderBy('id', 'DESC')
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Admin/User/Index', [
            'users' => $query,
            'filters' => request()->only(['search', 'account_type', 'gender']),
            'currentPage' => request()->page,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'account_type' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'phone' => 'required|string|unique:' . User::class,
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'phone' => $request->phone,
            'username' => $request->username,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
        ]);

        if (!$request->has('account_type') && $request->account_type !== 'admin') {
            $user->assignRole('user');
        }

        $user->assignRole($request->account_type);

        return redirect()->route('admin.user.index');
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
        return Inertia::render('Admin/User/Edit', [
            'user' => User::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            // 'name' => 'required|string|max:255',
            'phone' => ['required', 'string', 'max:255', Rule::unique(User::class)->ignore($id)],
            'username' => ['required', 'string', 'alpha_dash', 'max:255', Rule::unique(User::class)->ignore($id)],
        ]);

        $user = User::findOrFail($id);
        // $user->name = $request->name;
        $user->phone = $request->phone;
        $user->username = $request->username;

        $user->save();

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
