<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Library;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookLibrary>
 */
class BookLibraryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'qty' => fake()->randomDigitNotZero(),
            'price' => fake()->randomDigitNotNull(),
            'offer' => 'عرض اضافي',
            'book_id' => Book::factory()->create(),
            'library_id' => Library::factory()->create(),
        ];
    }
}
