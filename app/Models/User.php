<?php

namespace App\Models;

use App\Models\LibraryBranch;
use App\Models\User\UserProfile;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'phone',
        'gender',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'roles',
    ];

    protected $appends = ['role'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        // 'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function library()
    {
        return $this->hasOne(Library::class);
    }

    public function libraryBranch()
    {
        return $this->hasMany(LibraryBranch::class);
    }

    public function user_profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function getRoleAttribute()
    {
        return $this->roles()->first()->name ?? null;
    }

    public function getRedirectRoute()
    {
        if ($this->role === 'admin') {
            return '/admin/dashboard';
        }

        if ($this->role === 'library') {
            return '/library/dashboard';
        }

        if ($this->role === 'branch') {
            return '/branch/dashboard';
        }

        return '/dashboard';
    }
}
