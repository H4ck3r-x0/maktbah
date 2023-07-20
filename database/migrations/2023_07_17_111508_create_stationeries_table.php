<?php

use App\Models\User;
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
        Schema::create('stationeries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('district')->nullable();
            $table->string('city')->nullable();
            $table->string('google_maps')->nullable();

            $table->foreignIdFor(User::class, 'user_id')
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
        Schema::dropIfExists('stationeries');
    }
};
