<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Note\NoteController;
use App\Http\Controllers\Teacher\TeacherController;
use App\Http\Controllers\Stationery\StationeryController;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [StationeryController::class, 'index'])->name('dashboard');

    // Teacher Info
    Route::post('info/store', [StationeryController::class, 'store'])->name('info.store');

    // Teacher Notes
    Route::get('note/create', [NoteController::class, 'create'])->name('note.create');
    Route::post('note/store', [NoteController::class, 'store'])->name('note.store');
    Route::get('note/edit/{id}', [NoteController::class, 'edit'])->name('note.edit');
    Route::patch('note/edit/{id}', [NoteController::class, 'update'])->name('note.update');
    Route::delete('note/delete/{id}', [NoteController::class, 'destroy'])->name('note.delete');
});
