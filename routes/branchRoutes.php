<?php

use App\Http\Controllers\Branch\BranchBookController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Branch\BranchController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [BranchController::class, 'index'])->name('dashboard');

    Route::get('edit/{id}', [BranchController::class, 'edit'])
        ->name('edit');

    Route::patch('update/{id}', [BranchController::class, 'update'])
        ->name('update');

    // Branch Books
    Route::get('books/create', [BranchBookController::class, 'create'])
        ->name('book.create');

    Route::post('books/store', [BranchBookController::class, 'store'])
        ->name('book.store');
});
