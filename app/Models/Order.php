<?php

namespace App\Models;

use Spatie\ModelStatus\HasStatuses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    use HasStatuses;

    const STATUS = [
        'sent_to_library' => [
            'key' => 'sent_to_library',
            'message' => [
                'ar' => 'تم الإرسال للمكتبة',
                'en' => 'Sent To Library'
            ],
        ],
    ];
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
    protected $with = ['statuses'];
    protected $appends = ['model_status', 'current_status'];


    public function getModelStatusAttribute(): array
    {
        return self::STATUS;
    }

    public function getCurrentStatusAttribute(): String
    {
        return $this->status;
    }

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
