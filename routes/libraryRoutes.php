<?php

use App\Http\Controllers\UserLibrary\LibraryController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [LibraryController::class, 'index'])->name('library.dashboard');

    Route::get('edit/{id}', [LibraryController::class, 'edit'])
        ->name('library.edit');

    Route::patch('update/{id}', [LibraryController::class, 'update'])
        ->name('library.update');

    Route::get('create', [LibraryController::class, 'create'])
        ->name('library.create');

    Route::post('store', [LibraryController::class, 'store'])
        ->name('library.store');
});
