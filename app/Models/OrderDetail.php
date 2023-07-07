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

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            if ($model->total_price < 1) {
                $model->refreshTotalPrice();
            }
        });
    }

    public function refreshTotalPrice()
    {
        $this->total_price = $this->price;
        $this->save();
    }

    public function book()
    {
        return $this->belongsTo(BookLibrary::class, 'book_library_id', 'id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
