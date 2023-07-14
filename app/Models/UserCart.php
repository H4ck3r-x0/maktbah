<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCart extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'total_price',
        'book_library_id',
        'book_id',
        'user_id',
        'library_id',
        'branch_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function books()
    {
        return $this->hasMany(BookLibrary::class, 'id', 'book_library_id');
    }
}
