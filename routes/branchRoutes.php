<?php

use App\Http\Controllers\Branch\BranchController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [BranchController::class, 'index'])->name('branch.dashboard');

    Route::get('edit/{id}', [BranchController::class, 'edit'])
        ->name('edit');

    Route::patch('update/{id}', [BranchController::class, 'update'])
        ->name('update');
});
