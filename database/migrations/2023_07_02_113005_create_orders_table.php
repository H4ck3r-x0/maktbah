<?php

use App\Models\Book;
use App\Models\User;
use App\Models\Order;
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
            $table->decimal('total_payment', 18, 2);

            $table->foreignIdFor(User::class, 'user_id')
                ->constrained('users', 'id')
                ->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->decimal('price', 10, 2)->unsigned();
            $table->decimal('total_price', 18, 2);
            $table->unsignedBigInteger('book_library_id');
            $table->unsignedBigInteger('book_id');

            $table->foreignIdFor(Order::class, 'order_id')
                ->constrained('orders', 'id')
                ->cascadeOnDelete();

            $table->foreign('book_library_id')
                ->references('id')
                ->on('book_library')
                ->onDelete('cascade');

            $table->foreign('book_id')
                ->references('book_id')
                ->on('book_library')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('orders');
    }
};
