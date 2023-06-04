<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\Library\LibraryController;
use App\Http\Controllers\Admin\User\UserController;

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
    Route::delete('libraries/destroy/{id}', [LibraryController::class, 'destroy'])->name('library.destroy');
    Route::get('/libraries/edit/{id}', [LibraryController::class, 'edit'])->name('library.edit');
    Route::patch('/libraries/update/{id}', [LibraryController::class, 'update'])->name('library.update');

    //  User Routes
    Route::get('users', [UserController::class, 'index'])->name('user.index');
    Route::get('users/create', [UserController::class, 'create'])->name('user.create');
    Route::post('users/store', [UserController::class, 'store'])->name('user.store');
    Route::delete('users/destroy/{id}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('/users/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
    Route::patch('/users/update/{id}', [UserController::class, 'update'])->name('user.update');
});
