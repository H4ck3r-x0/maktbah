<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Major>
 */
class MajorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $levels = [];

        for ($i = 1; $i <= 5; $i++) {
            array_push($levels, $i);
        }

        return [
            'name' => fake()->sentence(),
            'levels' => $levels
        ];
    }
}
