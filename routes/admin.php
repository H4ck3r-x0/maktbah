<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\Library\LibraryController;

Route::middleware('auth')->group(function () {
    // Admin Setting and Profile routes
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Admin Setting and Profile routes


    //  Library Routes
    Route::get('libraries', [LibraryController::class, 'index'])->name('library.index');
    Route::get('libraries/create', [LibraryController::class, 'create'])->name('library.create');
    Route::post('libraries/store', [LibraryController::class, 'store'])->name('library.store');
});
