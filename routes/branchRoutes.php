<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Branch\BranchBookController;
use App\Http\Controllers\Branch\BranchOrderController;
use App\Http\Controllers\Branch\BranchNotificationController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [BranchController::class, 'index'])->name('dashboard');

    Route::get('notifications', [BranchNotificationController::class, 'index'])
        ->name('notification');

    Route::get('edit/{id}', [BranchController::class, 'edit'])
        ->name('edit');

    Route::patch('update/{id}', [BranchController::class, 'update'])
        ->name('update');

    // Branch Books
    Route::get('books/create', [BranchBookController::class, 'create'])
        ->name('book.create');

    Route::post('books/store', [BranchBookController::class, 'store'])
        ->name('book.store');

    Route::post('books/update/{id}', [BranchBookController::class, 'update'])
        ->name('book.update');

    Route::delete('books/destroy/{id}', [BranchBookController::class, 'destroy'])
        ->name('book.destroy');

    // Orders
    Route::get('orders', [BranchOrderController::class, 'index'])
        ->name('order.index');

    Route::get('/orders/{id}', [BranchOrderController::class, 'show'])
        ->name('order.show');
});
