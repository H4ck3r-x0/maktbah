<?php

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
});
