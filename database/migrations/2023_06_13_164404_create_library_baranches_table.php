<?php

use App\Models\User;
use App\Models\Library;
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
        Schema::create('library_baranches', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('CR')->nullable();
            $table->string('district')->nullable();
            $table->string('city')->nullable();
            $table->string('google_maps')->nullable();

            $table->foreignIdFor(User::class, 'user_id')
                ->constrained('users', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(Library::class, 'library_id')
                ->constrained('libraries', 'id')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_baranches');
    }
};
