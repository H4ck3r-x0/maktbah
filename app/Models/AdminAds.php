<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdminAds extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;


    protected $appends = ['admin_ad_image'];

    public function getAdminAdImageAttribute()
    {
        $mediaUrl = $this->getFirstMediaUrl('adminAdsImage');
        return $mediaUrl ? $mediaUrl : null;
    }
}
