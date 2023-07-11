<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\District;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Library>
 */
class LibraryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'مكتبة' . ' ' . fake()->unique()->lastName(),
            'phone' => fake()->phoneNumber(),
            'CR' => fake()->randomNumber(5, true),
            'city' => City::inRandomOrder()->first()->name,
            'district' => District::inRandomOrder()->first()->name,
            'user_id' => User::factory()->create()->assignRole('library'),
            'google_maps' => 'https://goo.gl/maps/dhSLZAshJuZKuYEQ7',
        ];
    }
}
