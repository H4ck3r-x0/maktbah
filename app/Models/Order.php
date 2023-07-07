<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'total_payment',
        'book_id',
        'library_id',
        'user_id',
    ];

    public function refreshTotalPayment()
    {
        $total_payment = 0;
        foreach ($this->details as $detail) {
            $total_payment += $detail->price;
        }
        $this->total_payment = $total_payment;
        $this->save();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function details()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
