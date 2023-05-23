<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        City::create([
            'name' => 'مكة المكرمة',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'المدينة المنورة',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'جدة',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'الرياض',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'الدمام',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'الطائف',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'تبوك',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'بريدة',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'حائل',
            'country_id' => 1,
        ]);
        City::create([
            'name' => 'ابهاء',
            'country_id' => 1,
        ]);
    }
}
