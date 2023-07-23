<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StationeryBranche extends Model
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
        'printing_option_id',
        'university',
        'stationery_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function stationery()
    {
        return $this->belongsTo(Stationery::class);
    }

    public function orders()
    {
        return $this->hasMany(StationeryOrder::class);
    }
}
