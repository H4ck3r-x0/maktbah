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
        'district',
        'city',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function branches()
    {
        return $this->hasMany(LibraryBranch::class);
    }

    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_library', 'library_id', 'book_id')
            ->using(BookLibrary::class)
            ->withPivot('id', 'qty', 'price', 'offer', 'book_id', 'deleted_at');
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
