<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notes>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->create();
        $user->assignRole('teacher');

        $teacher = Teacher::factory()->forUser($user)->create();
        return [
            'name' => fake()->sentence(),
            'url' => fake()->url(),
            'description' => fake()->paragraph(),
            'number_of_pages' => fake()->numberBetween(10, 100),
            'teacher_id' =>  $teacher->id,
            'user_id' => $user->id
        ];
    }
}
