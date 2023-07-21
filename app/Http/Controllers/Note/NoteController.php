<?php

namespace App\Http\Controllers\Note;

use App\Models\Note;
use Inertia\Inertia;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', Note::class);
        return Inertia::render('Teacher/Notes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required|min:10',
            'url' => 'required|url',
            'number_of_pages' => 'required|min:1',
        ]);

        $teacher = Teacher::where('user_id', $request->user()->id)->first();

        $teacher->notes()->create($request->all());

        return redirect()->route('teacher.dashboard');
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
        return Inertia::render('Teacher/Notes/Edit', [
            'note' => Note::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required|min:10',
            'url' => 'required|url',
            'number_of_pages' => 'required|min:1',
        ]);

        $note = Note::findOrFail($id);

        $this->authorize('update', $note);

        $note->update($request->all());

        return redirect()->route('teacher.dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $note = Note::findOrFail($id);

        $this->authorize('delete', $note);

        $note->destroy($id);

        return redirect()->route('teacher.dashboard');
    }
}
