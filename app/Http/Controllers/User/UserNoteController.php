<?php

namespace App\Http\Controllers\User;

use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Note::query()
            ->with(['user:id,username'])
            ->when(request()->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($query) use ($search) {
                        $query->where('username', 'like', "%{$search}%");
                    });
            });

        $notes = $query->paginate(15)->withQueryString();

        return Inertia::render('Note/Search', [
            'notes' => $notes,
            'currentPage' => request()->page,
            'filters' => request()->only(['search', 'page']),
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
        //
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
