<?php

use App\Models\User;
use App\Models\Teacher;
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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->text('url')->nullable();
            $table->text('description')->nullable();
            $table->integer('number_of_pages');

            $table->foreignIdFor(Teacher::class, 'teacher_id')
                ->nullable()
                ->constrained('teachers', 'id')
                ->cascadeOnDelete();

            $table->foreignIdFor(User::class, 'user_id')
                ->nullable()
                ->constrained('users', 'id')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
