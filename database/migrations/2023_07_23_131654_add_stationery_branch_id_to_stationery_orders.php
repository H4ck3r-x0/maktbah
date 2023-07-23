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
        Schema::table('stationery_orders', function (Blueprint $table) {
            $table->unsignedBigInteger('stationery_branch_id')->nullable()->after('stationery_id');
            $table->foreign('stationery_branch_id')->references('id')->on('stationery_branches')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stationery_orders', function (Blueprint $table) {
            $table->dropColumn('stationery_branch_id');
        });
    }
};
