<?php

namespace App\Models;

use Spatie\ModelStatus\HasStatuses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StationeryOrder extends Model
{
    use HasFactory;
    use HasStatuses;
    const  SERVICE_FEE = 0.04;

    const STATUS = [
        'sent_to_stationery' => [
            'key' => 'sent_to_stationery',
            'color' => 'green',
            'message' => [
                'ar' => 'تم الإرسال للقرطاسية',
                'en' => 'Sent To Stationery',
            ],
        ],
        'canceled_by_stationery' => [
            'key' => 'canceled_by_stationery',
            'color' => 'red',
            'message' => [
                'ar' => 'تم الإلغاء من قبل القرطاسية',
                'en' => 'Canceled by Stationery',
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
        'user_id',
        'note_id',
        'stationery_id',
        'stationery_branch_id',
        'selected_pages',
        'options',
        'total_price',
    ];

    protected $appends = ['model_status', 'current_status'];

    public function getModelStatusAttribute(): array
    {
        return self::STATUS;
    }

    public function getCurrentStatusAttribute(): string
    {
        return $this->status;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function note()
    {
        return $this->belongsTo(Note::class);
    }

    public function stationery()
    {
        return $this->belongsTo(Stationery::class);
    }

    public function stationeryBranch()
    {
        return $this->belongsTo(StationeryBranche::class);
    }
}
