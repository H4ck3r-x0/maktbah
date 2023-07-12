<?php

use App\Models\Book;
use App\Models\LibraryBranch;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_library_branch', function (Blueprint $table) {
            $table->id();
            $table->string('qty')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->text('offer')->nullable();

            $table->foreignIdFor(Book::class, 'book_id')
                ->constrained('books', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(LibraryBranch::class, 'library_branch_id')
                ->constrained('library_branches', 'id')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_library_branch');
    }
};
