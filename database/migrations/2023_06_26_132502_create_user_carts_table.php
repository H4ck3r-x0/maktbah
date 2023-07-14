<?php

use App\Models\User;
use App\Models\Library;
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
        Schema::create('user_carts', function (Blueprint $table) {
            $table->id();
            $table->integer('total_price')->nullable();
            $table->unsignedBigInteger('book_library_id');

            $table->foreign('book_library_id')
                ->references('id')
                ->on('book_library')
                ->onDelete('cascade');

            $table->foreignIdFor(User::class, 'user_id')
                ->constrained('users', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(Library::class, 'library_id')
                ->nullable()
                ->constrained('libraries', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(LibraryBranch::class, 'branch_id')
                ->nullable()
                ->constrained('library_branches', 'id')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_carts');
    }
};
