<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StationeryBranch\StationeryBranchController;
use App\Http\Controllers\StationeryBranch\StationeryBranchOrderController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [StationeryBranchController::class, 'index'])->name('dashboard');

    // Orders
    Route::get('/orders', [StationeryBranchOrderController::class, 'index'])->name('branch.stationery.orders');
    Route::get('/orders/{id}', [StationeryBranchOrderController::class, 'show'])
        ->name('branch.stationery.orders.show');



    Route::post('/orders/{id}/cancel', [StationeryBranchOrderController::class, 'cancel'])
        ->name('branch.stationery.orders.cancel');

    Route::post('/orders/{id}/restore', [StationeryBranchOrderController::class, 'restore'])
        ->name('branch.stationery.orders.restore');

    Route::post('/orders/{id}/confirm', [StationeryBranchOrderController::class, 'confirm'])
        ->name('branch.stationery.orders.confirm');
});
