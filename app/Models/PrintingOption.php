<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrintingOption extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'option',
        'price',
        'per_page',
        'stationery_id'
    ];
    protected $appends = ['display_name'];

    public static function getOptionDisplayName($option)
    {
        $optionNames = [
            // 'print_price' => 'سعر الطباعة الأساسي',
            'single_face_printing' => 'طباعة وجه واحد',
            'double_sided_printing' => 'طباعة وجهيين',
            'colored_printing' => 'طباعة ملونة',
            'ribbon_print' => 'طباعة بشريط',
        ];

        return $optionNames[$option] ?? $option;
    }

    public function getDisplayNameAttribute()
    {
        return self::getOptionDisplayName($this->option);
    }
}