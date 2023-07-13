<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserLibrary\LibraryController;
use App\Http\Controllers\LibraryBook\LibraryBookController;
use App\Http\Controllers\UserLibrary\NotificationController;
use App\Http\Controllers\UserLibrary\LibraryBranchController;
use App\Http\Controllers\UserLibrary\OrderController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [LibraryController::class, 'index'])
        ->name('library.dashboard');

    Route::get('notifications', [NotificationController::class, 'index'])
        ->name('library.notification');

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
        ->name('library.edit.branch');

    Route::patch('branch/update/{id}', [LibraryBranchController::class, 'update'])
        ->name('library.update.branch');

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

    Route::post('books/update/{id}', [LibraryBookController::class, 'update'])
        ->name('book.update');

    Route::delete('books/destroy/{id}', [LibraryBookController::class, 'destroy'])
        ->name('book.destroy');

    // Orders
    Route::get('orders', [OrderController::class, 'index'])
        ->name('library.order.index');

    Route::get('/orders/{id}', [OrderController::class, 'show'])
        ->name('library.order.show');
});
