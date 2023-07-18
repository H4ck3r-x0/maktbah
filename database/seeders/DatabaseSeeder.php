<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            AdminSeeder::class,
            CitySeeder::class,
            DistrictSeeder::class,
            LibrarySeeder::class,
            BookSeeder::class,
            MajorSeeder::class,
            // BookLibrarySeeder::class,
        ]);
    }
}
