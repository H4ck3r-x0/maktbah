<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'book_name' => fake()->words(5, true),
            'book_name' => fake()->realText(fake()->numberBetween(20, 40)),
            'author_name' => fake()->lastName(),
            'edition_number' => fake()->numberBetween(0, 30),
            'volume_number' => fake()->numberBetween(0, 10),
        ];
    }
}
