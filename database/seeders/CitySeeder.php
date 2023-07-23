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
        $cities = [
            'مكة المكرمة',
            'المدينة المنورة',
            'جدة',
            'الرياض',
            'الدمام',
            'الطائف',
            'تبوك',
            'بريدة',
            'حائل',
            'ابهاء',
            'الخرج',
            'خميس مشيط',
            'المدينة المنورة',
            'القطيف',
            'الجوف',
            'جازان',
            'العلا',
            'عرعر',
            'نجران',
            'ينبع',
        ];

        foreach ($cities as $city) {
            City::create([
                'name' => $city,
            ]);
        }
    }
}
