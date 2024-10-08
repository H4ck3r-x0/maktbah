<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\City;
use App\Models\District;
use App\Models\Major;
use App\Models\University;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(): Response
    {
        $majors = Auth::user()->hasRole('user') ? Major::all() : null;
        $universities = Auth::user()->hasRole('user') ? University::all() : null;

        if (Auth::user()->hasRole('user')) {
            Auth::user()->load('user_profile');
        }

        return Inertia::render('Profile/Edit', [
            'status' => session('status'),
            'majors' => $majors,
            'cities' => City::all(),
            'districts' => District::all(),
            'universities' => University::all()
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        $request->user()->save();

        if ($request->user()->hasRole('admin')) {
            return Redirect::route('admin.profile.edit');
        }

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
