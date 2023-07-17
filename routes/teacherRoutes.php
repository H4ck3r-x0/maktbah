<?php

use App\Http\Controllers\Note\NoteController;
use App\Http\Controllers\Teacher\TeacherController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [TeacherController::class, 'index'])->name('dashboard');

    // Teacher Info
    Route::post('info/store', [TeacherController::class, 'store'])->name('info.store');

    // Teacher Notes
    Route::get('note/create', [NoteController::class, 'create'])->name('note.create');
    Route::post('note/store', [NoteController::class, 'store'])->name('note.store');
    Route::get('note/edit/{id}', [NoteController::class, 'edit'])->name('note.edit');
    Route::patch('note/edit/{id}', [NoteController::class, 'update'])->name('note.update');
    Route::delete('note/delete/{id}', [NoteController::class, 'destroy'])->name('note.delete');
});
