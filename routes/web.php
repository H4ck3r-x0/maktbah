<?php

use App\Http\Controllers\Book\SearchBooksController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // User
    Route::patch('/profile/major', [UserProfileController::class, 'update'])->name('profile.major.update');
    // User


    Route::get('/books', [SearchBooksController::class, 'index'])->name('search.books.index');
    Route::post('/books/store', [SearchBooksController::class, 'store'])->name('search.books.store');
});

require __DIR__ . '/auth.php';
