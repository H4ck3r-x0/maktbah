<?php

use App\Models\Book;
use App\Models\Library;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_library', function (Blueprint $table) {
            $table->id();
            $table->string('qty')->nullable();
            $table->integer('price')->nullable();

            $table->foreignIdFor(Book::class, 'book_id')
                ->constrained('books', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(Library::class, 'library_id')
                ->constrained('libraries', 'id')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_library');
    }
};
