<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        City::create([
            'name' => 'مكة المكرمة',
        ]);
        City::create([
            'name' => 'المدينة المنورة',
        ]);
        City::create([
            'name' => 'جدة',
        ]);
        City::create([
            'name' => 'الرياض',
        ]);
        City::create([
            'name' => 'الدمام',
        ]);
        City::create([
            'name' => 'الطائف',
        ]);
        City::create([
            'name' => 'تبوك',
        ]);
        City::create([
            'name' => 'بريدة',
        ]);
        City::create([
            'name' => 'حائل',
        ]);
        City::create([
            'name' => 'ابهاء',
        ]);
    }
}
