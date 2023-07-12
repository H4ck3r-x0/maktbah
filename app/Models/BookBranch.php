<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class BookBranch extends Pivot implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public $timestamps = false;
    public $table = 'book_library_branch';

    protected $appends = ['ad_image'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'media',
    ];


    public function branch()
    {
        return $this->belongsTo(LibraryBranch::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function getAdImageAttribute()
    {
        return $this->getFirstMediaUrl('bookAdImage') ? $this->getFirstMediaUrl('bookAdImage') : null;
    }
}
