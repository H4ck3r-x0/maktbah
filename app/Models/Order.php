<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\ModelStatus\HasStatuses;

class Order extends Model
{
    use HasFactory;
    use HasStatuses;

    const STATUS = [
        'sent_to_library' => [
            'key' => 'sent_to_library',
            'color' => 'green',
            'message' => [
                'ar' => 'تم الإرسال للمكتبة',
                'en' => 'Sent To Library',
            ],
        ],
        'canceled_by_library' => [
            'key' => 'canceled_by_library',
            'color' => 'red',
            'message' => [
                'ar' => 'تم الإلغاء من قبل المكتبة',
                'en' => 'Canceled by Library',
            ],
        ],
        'canceled_by_user' => [
            'key' => 'canceled_by_user',
            'color' => 'red',
            'message' => [
                'ar' => 'تم الإلغاء من قبل الطالب',
                'en' => 'Canceled by User',
                'color' => 'text-red-400'
            ],
        ],

        'confirmed' => [
            'key' => 'confirmed',
            'color' => 'blue',
            'message' => [
                'ar' => 'تم تأكيد الطلب',
                'en' => 'Confirmed',
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
        'branch_id',
        'user_id',
    ];

    protected $with = ['statuses'];

    protected $appends = ['model_status', 'current_status'];

    public function getModelStatusAttribute(): array
    {
        return self::STATUS;
    }

    public function getCurrentStatusAttribute(): string
    {
        return $this->status;
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function branch()
    {
        return $this->belongsTo(LibraryBranch::class);
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
