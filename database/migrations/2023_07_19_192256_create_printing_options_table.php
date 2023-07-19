<?php

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
        Schema::create('printing_options', function (Blueprint $table) {
            $table->id();
            $table->string('option');
            $table->decimal('price', 18, 2);
            $table->foreignId('stationery_id')
                ->constrained('stationeries')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('printing_options');
    }
};
