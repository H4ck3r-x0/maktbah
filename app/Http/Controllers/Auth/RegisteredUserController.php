<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\District;
use App\Models\Major;
use App\Models\University;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $universies = University::all();
        $majors = Major::all();

        return Inertia::render('Auth/Register', [
            'universies' => $universies,
            'majors' => $majors,
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'account_type' => 'required|string|max:255',
            'username' => 'required|string|alpha_dash|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $userData = [
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ];

        if ($request->account_type === 'user') {
            $userData['gender'] = $request->gender;
            $userData['city'] = $request->city;
            $userData['district'] = $request->district;

            $userProfileData = [
                'university' => $request->university,
                'major' => $request->major,
                'level' => $request->level,
            ];

            $user = User::create($userData);
            $user->user_profile()->create($userProfileData);
        } else {
            $user = User::create($userData);
        }

        if (!$request->has('account_type') && $request->account_type !== 'admin') {
            $user->assignRole('user');
        }

        $user->assignRole($request->account_type);

        event(new Registered($user));

        Auth::login($user);

        return redirect(auth()->user()->getRedirectRoute());
    }
}
