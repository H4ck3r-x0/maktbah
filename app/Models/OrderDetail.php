<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;
    protected $table = 'order_details';

    protected $fillable = [
        'id',
        'order_id',
        'book_library_id',
        'book_id',
        'price',
        'total_price'
    ];


    public function book()
    {
        return $this->belongsTo(BookLibrary::class, 'book_library_id', 'id')
            ->withTrashed();
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
