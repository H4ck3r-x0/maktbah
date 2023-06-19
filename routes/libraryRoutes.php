<?php

use App\Http\Controllers\LibraryBook\LibraryBookController;
use App\Http\Controllers\LibraryBranch\LibraryBranchController;
use App\Http\Controllers\UserLibrary\LibraryController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [LibraryController::class, 'index'])->name('library.dashboard');

    // Main Library
    Route::get('edit/{id}', [LibraryController::class, 'edit'])
        ->name('library.edit');

    Route::patch('update/{id}', [LibraryController::class, 'update'])
        ->name('library.update');

    Route::get('create', [LibraryController::class, 'create'])
        ->name('library.create');

    Route::post('store', [LibraryController::class, 'store'])
        ->name('library.store');
    // Main Library

    // Library Branch
    Route::get('branch/edit/{id}', [LibraryBranchController::class, 'edit'])
        ->name('branch.edit');

    Route::patch('branch/update/{id}', [LibraryBranchController::class, 'update'])
        ->name('branch.update');

    Route::get('branch/create', [LibraryBranchController::class, 'create'])
        ->name('branch.create');

    Route::post('branch/store', [LibraryBranchController::class, 'store'])
        ->name('branch.store');
    // Library Branch

    // Library Books
    Route::get('books/create', [LibraryBookController::class, 'create'])
        ->name('book.create');

    Route::post('books/store', [LibraryBookController::class, 'store'])
        ->name('book.store');

    Route::patch('books/update/{id}', [LibraryBookController::class, 'update'])
        ->name('book.update');

    Route::delete('books/destroy/{id}', [LibraryBookController::class, 'destroy'])
        ->name('book.destroy');
});
