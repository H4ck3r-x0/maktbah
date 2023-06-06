<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Library extends Model
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
        'CR',
        'google_maps',
        'country',
        'city',
        'user_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
