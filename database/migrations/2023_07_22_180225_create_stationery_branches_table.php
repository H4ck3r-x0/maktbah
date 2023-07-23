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
        Schema::create('stationery_branches', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('district')->nullable();
            $table->string('city')->nullable();
            $table->string('google_maps')->nullable();
            $table->string('university')->nullable();

            $table->unsignedBigInteger('stationery_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('stationery_id')
                ->references('id')
                ->on('stationeries')
                ->onDelete('cascade');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stationery_branches');
    }
};
