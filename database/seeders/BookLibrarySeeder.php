<?php

namespace Database\Seeders;

use App\Models\BookLibrary;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BookLibrarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BookLibrary::factory(2)->create();
    }
}
