<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
});
