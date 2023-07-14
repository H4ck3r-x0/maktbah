<?php

namespace App\Http\Controllers\Branch;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BranchNotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        foreach (request()->user()->unreadNotifications as $notification) {
            $notification->markAsRead();
        }
        return Inertia::render('Branch/Notification', [
            'notifications' => request()->user()->notifications
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
