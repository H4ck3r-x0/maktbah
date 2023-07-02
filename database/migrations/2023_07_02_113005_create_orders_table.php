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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('total');
            $table->json('item_ids');

            $table->foreignIdFor(Library::class, 'library_id')
                ->constrained('libraries', 'id')
                ->cascadeOnDelete();

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
        Schema::dropIfExists('orders');
    }
};
