<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        District::create([
            'name' => 'الزهراء',
            'city_id' => 1
        ]);
        District::create([
            'name' => 'الهجرة',
            'city_id' => 1
        ]);
        District::create([
            'name' => 'الغزة',
            'city_id' => 1
        ]);

        District::create([
            'name' => 'الرفيعة',
            'city_id' => 8
        ]);

        District::create([
            'name' => 'الصفراء',
            'city_id' => 8
        ]);

        District::create([
            'name' => 'الجردة',
            'city_id' => 8
        ]);

        District::create([
            'name' => 'الروابي',
            'city_id' => 4
        ]);

        District::create([
            'name' => 'الربوة',
            'city_id' => 4
        ]);
    }
}
