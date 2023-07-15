<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\Common\BookController;
use App\Http\Controllers\Admin\Common\CityController;
use App\Http\Controllers\Admin\Common\DistrictController;
use App\Http\Controllers\Admin\Common\MajorController;
use App\Http\Controllers\Admin\Library\LibraryController;
use App\Http\Controllers\Admin\Order\OrderController;
use App\Http\Controllers\Admin\User\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    // Admin Setting and Profile routes
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Admin Setting and Profile routes

    //  Library Routes
    Route::get('libraries', [LibraryController::class, 'index'])->name('library.index');
    Route::get('libraries/create', [LibraryController::class, 'create'])->name('library.create');
    Route::post('libraries/store', [LibraryController::class, 'store'])->name('library.store');
    Route::delete('libraries/destroy/{id}', [LibraryController::class, 'destroy'])->name('library.destroy');
    Route::get('/libraries/edit/{id}', [LibraryController::class, 'edit'])->name('library.edit');
    Route::patch('/libraries/update/{id}', [LibraryController::class, 'update'])->name('library.update');

    //  User Routes
    Route::get('users', [UserController::class, 'index'])->name('user.index');
    Route::get('users/create', [UserController::class, 'create'])->name('user.create');
    Route::post('users/store', [UserController::class, 'store'])->name('user.store');
    Route::delete('users/destroy/{id}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('/users/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
    Route::patch('/users/update/{id}', [UserController::class, 'update'])->name('user.update');

    // Settings - City
    Route::get('cities/create', [CityController::class, 'create'])->name('city.create');
    Route::post('cities/store', [CityController::class, 'store'])->name('city.store');
    Route::get('cities/edit/{id}', [CityController::class, 'edit'])->name('city.edit');
    Route::patch('cities/update/{id}', [CityController::class, 'update'])->name('city.update');

    // Settings - District
    Route::get('district/create', [DistrictController::class, 'create'])->name('district.create');
    Route::post('district/store', [DistrictController::class, 'store'])->name('district.store');
    Route::post('district/store', [DistrictController::class, 'store'])->name('district.store');
    Route::get('district/edit/{id}', [DistrictController::class, 'edit'])->name('district.edit');
    Route::patch('district/update/{id}', [DistrictController::class, 'update'])->name('district.update');

    // Settings - Majors
    Route::get('majors/create', [MajorController::class, 'create'])->name('major.create');
    Route::post('majors/store', [MajorController::class, 'store'])->name('major.store');
    Route::get('majors/edit/{id}', [MajorController::class, 'edit'])->name('major.edit');
    Route::patch('majors/update/{id}', [MajorController::class, 'update'])->name('major.update');
    Route::delete('majors/destroy/{id}', [MajorController::class, 'destroy'])->name('major.destroy');

    // Books
    Route::get('books', [BookController::class, 'index'])->name('book.index');
    Route::get('books/create', [BookController::class, 'create'])->name('book.create');
    Route::post('books/store', [BookController::class, 'store'])->name('book.store');
    Route::get('books/edit/{id}', [BookController::class, 'edit'])->name('book.edit');
    Route::patch('books/update/{id}', [BookController::class, 'update'])->name('book.update');

    // Orders
    Route::get('orders', [OrderController::class, 'index'])->name('order.index');
    Route::get('/orders/{id}', [OrderController::class, 'show'])
        ->name('order.show');
});
