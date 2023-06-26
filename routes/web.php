<?php

use App\Http\Controllers\Book\SearchBooksController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserCartController;
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

    // Books - Search for books, adding books to user cart and remove.
    Route::get('/books', [SearchBooksController::class, 'index'])->name('search.books.index');
    Route::post('/books/store', [SearchBooksController::class, 'store'])->name('search.books.store');
    Route::post('/books/destroy', [SearchBooksController::class, 'destroy'])->name('search.books.destroy');
    // Books - Search for books, adding books to user cart and remove.

    // User Cart
    Route::get('/cart', [UserCartController::class, 'index'])
        ->name('user.cart.index');
});

require __DIR__ . '/auth.php';
