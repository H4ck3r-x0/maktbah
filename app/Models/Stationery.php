<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stationery extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'phone',
        'district',
        'google_maps',
        'city',
        'user_id',
        'printing_option_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function printingOptions()
    {
        return $this->hasMany(PrintingOption::class);
    }
}
