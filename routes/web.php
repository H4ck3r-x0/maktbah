<?php

use Inertia\Inertia;
use App\Models\Order;
use App\Http\Middleware\IsUser;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserCartController;
use App\Http\Controllers\User\UserNoteController;
use App\Http\Controllers\User\UserOrderController;
use App\Http\Controllers\Book\SearchBooksController;
use App\Http\Controllers\User\UserProfileController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\User\UserStationeryController;
use App\Http\Controllers\User\UserStationeryOrderController;
use App\Http\Controllers\Stationery\StationeryOrderController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})
    ->middleware('guest')
    ->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/download/{order}', function (Order $order) {
        return view('in');
    })->name('download');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // User
    Route::patch('/profile/major', [UserProfileController::class, 'update'])->name('profile.major.update');
    // User

    // Books - Search for books, adding books to user cart and remove.
    Route::middleware([IsUser::class])->group(function () {
        // User
        Route::get('/books', [SearchBooksController::class, 'index'])
            ->name('search.books.index');
        Route::post('/books/store', [SearchBooksController::class, 'store'])
            ->name('search.books.store');
        Route::post('/books/destroy', [SearchBooksController::class, 'destroy'])
            ->name('search.books.destroy');

        // User Order
        Route::get('/orders', [UserOrderController::class, 'index'])
            ->name('user.order.index');

        Route::get('/orders/{id}', [UserOrderController::class, 'show'])
            ->name('user.order.show');

        Route::post('/orders/{id}/cancel', [UserOrderController::class, 'cancel'])
            ->name('user.order.cancel');

        Route::post('/orders/{id}/restore', [UserOrderController::class, 'restore'])
            ->name('user.order.restore');


        // Notes
        Route::get('/notes', [UserNoteController::class, 'index'])
            ->name('search.notes.index');

        // Stationeries
        Route::get('/stationeries/{note}', [UserStationeryController::class, 'index'])
            ->name('search.stationeries.index');

        // Stationery orders
        Route::get('stationery/orders', [UserStationeryOrderController::class, 'index'])
            ->name('order.stationery.index');

        Route::get('stationery/orders/{id}', [UserStationeryOrderController::class, 'show'])
            ->name('order.stationery.show');

        Route::post('/stationery/orders/{id}/cancel', [UserStationeryOrderController::class, 'cancel'])
            ->name('order.stationery.cancel');

        Route::post('/stationery/orders/{id}/restore', [UserStationeryOrderController::class, 'restore'])
            ->name('order.stationery.restore');

        Route::post('order/create/note/{note}/stationery/{stationery}', [StationeryOrderController::class, 'store'])
            ->name('stationery.order.store');
    });

    // Books - Search for books, adding books to user cart and remove.

    // User Cart
    Route::get('/cart', [UserCartController::class, 'index'])
        ->name('user.cart.index');

    Route::post('/cart', [UserCartController::class, 'store'])
        ->name('user.cart.store');

    // User Cart
});

require __DIR__ . '/auth.php';
