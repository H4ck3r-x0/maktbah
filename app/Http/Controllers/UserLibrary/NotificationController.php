<?php

namespace App\Http\Controllers\UserLibrary;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        foreach (request()->user()->unreadNotifications as $notification) {
            $notification->markAsRead();
        }
        return Inertia::render('Library/Notification', [
            'notifications' => request()->user()->notifications
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
