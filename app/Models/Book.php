<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'book_name',
        'author_name',
        'edition_number',
        'volume_number',
    ];

    public function libraries()
    {
        return $this->belongsToMany(Library::class);
    }

    public function countOrders()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
