<?php

use App\Http\Controllers\Stationery\StationeryBranchController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Stationery\StationeryController;
use App\Http\Controllers\Stationery\StationeryOrderController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [StationeryController::class, 'index'])->name('dashboard');

    // Stationery Info
    Route::post('info/store', [StationeryController::class, 'store'])->name('info.store');

    // Stationery Options
    Route::get('options/create', [StationeryController::class, 'create'])->name('options.create');
    Route::post('options/store', [StationeryController::class, 'storeOptions'])->name('options.store');

    // Stationery Orders
    Route::get('main/orders', [StationeryOrderController::class, 'index'])->name('main.orders');

    Route::get('main/orders/{id}', [StationeryOrderController::class, 'show'])
        ->name('main.order.show');

    Route::post('main/orders/{id}/cancel', [StationeryOrderController::class, 'cancel'])
        ->name('main.orders.cancel');

    Route::post('main/orders/{id}/restore', [StationeryOrderController::class, 'restore'])
        ->name('main.orders.restore');

    Route::post('main/orders/{id}/confirm', [StationeryOrderController::class, 'confirm'])
        ->name('main.orders.confirm');


    // Branches
    Route::get('main/branch/create', [StationeryBranchController::class, 'create'])->name('main.branch.create');
    Route::post('main/branch/store', [StationeryBranchController::class, 'store'])->name('main.branch.store');
});
