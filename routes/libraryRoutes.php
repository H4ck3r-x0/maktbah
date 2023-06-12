<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Library/Dashboard');
    })->name('library.dashboard');
});
