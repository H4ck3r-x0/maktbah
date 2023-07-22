<?php

namespace App\Http\Controllers\Teacher;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\Teacher;
use App\Models\University;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Teacher/Dashboard', [
            'teacher' => Teacher::where('user_id', request()->user()->id)->first(),
            'notes' => Note::where('user_id', request()->user()->id)->get(),
            'universities' => University::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'specialty' => 'required',
            'university_name' => 'required',
        ]);

        $request->user()->teacher()->create(
            [
                'specialty' => $request->specialty,
                'university_name' => $request->university_name
            ]
        );
        // return redirect()->back();
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
