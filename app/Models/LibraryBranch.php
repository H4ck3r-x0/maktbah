<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryBranch extends Model
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
        'google_maps',
        'district',
        'city',
        'user_id',
        'library_id',
        'university'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_library', 'library_branch_id', 'book_id')
            ->using(BookLibrary::class)
            ->withPivot('id', 'qty', 'price', 'offer', 'book_id', 'deleted_at');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'branch_id');
    }
}
