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
            $table->decimal('price', 10, 2)->nullable();
            $table->text('offer')->nullable();
            $table->unsignedBigInteger('library_branch_id')->nullable();

            $table->foreignIdFor(Book::class, 'book_id')
                ->constrained('books', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(Library::class, 'library_id')
                ->nullable()
                ->constrained('libraries', 'id')
                ->cascadeOnDelete();

            $table->foreign('library_branch_id')
                ->references('id')
                ->on('library_branches')
                ->onDelete('cascade');
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
