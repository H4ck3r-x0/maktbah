<?php

namespace Database\Seeders;

use App\Models\BookLibrary;
use Illuminate\Database\Seeder;

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
