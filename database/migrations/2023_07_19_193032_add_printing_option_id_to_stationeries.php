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
        Schema::table('stationeries', function (Blueprint $table) {
            $table->unsignedBigInteger('printing_option_id')->nullable();
            $table->foreign('printing_option_id')
                ->references('id')
                ->on('printing_options')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stationeries', function (Blueprint $table) {
            Schema::table('stationeries', function (Blueprint $table) {
                $table->dropColumn('printing_option_id');
            });
        });
    }
};
