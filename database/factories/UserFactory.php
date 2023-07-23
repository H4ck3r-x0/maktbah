<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use App\Models\District;
use App\Models\University;
use Illuminate\Support\Str;
use Database\Factories\User\UserProfileFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = fake()->randomElement(['male', 'female']);
        $city = City::inRandomOrder()->first();
        $district = District::inRandomOrder()->first();

        return [
            'name' => fake()->name($gender),
            'username' => fake()->unique()->userName(),
            'phone' => fake()->phoneNumber(),
            'gender' => $gender,
            'city' => $city->name,
            'district' => $district->name,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Configure the UserFactory model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (User $user) {
            UserProfileFactory::new()->create(
                [
                    'University' => optional(University::inRandomOrder()->first())->name,
                    'user_id' => $user->id
                ]
            );
        });
    }
}
