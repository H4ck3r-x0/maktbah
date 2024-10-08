<?php

use App\Http\Controllers\Branch\BranchBookController;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Branch\BranchNotificationController;
use App\Http\Controllers\Branch\BranchOrderController;
use Illuminate\Support\Facades\Route;

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

    Route::delete('books/ad_image/delete/{id}', [BranchBookController::class, 'deleteBookAdImage'])
    ->name('book.deleteBookAdImage');

    Route::post('books/restore/{id}', [BranchBookController::class, 'restore'])
        ->name('book.restore');

    // Orders
    Route::get('orders', [BranchOrderController::class, 'index'])
        ->name('order.index');

    Route::get('/orders/{id}', [BranchOrderController::class, 'show'])
        ->name('order.show');


    Route::post('/orders/{id}/cancel', [BranchOrderController::class, 'cancel'])
        ->name('order.cancel');

    Route::post('/orders/{id}/restore', [BranchOrderController::class, 'restore'])
        ->name('order.restore');

    Route::post('/orders/{id}/confirm', [BranchOrderController::class, 'confirm'])
        ->name('order.confirm');
});
