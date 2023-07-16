<?php

namespace App\Models;

use App\Models\User\UserProfile;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

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
        'city',
        'district',
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

    protected $appends = ['role', 'role_name'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];

    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }

    public function library()
    {
        return $this->hasOne(Library::class);
    }

    public function branch()
    {
        return $this->hasOne(LibraryBranch::class);
    }

    public function libraryBranch()
    {
        return $this->hasMany(LibraryBranch::class);
    }

    public function user_profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function carts()
    {
        return $this->hasMany(UserCart::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function getRoleAttribute()
    {
        return $this->roles()->first()->name ?? null;
    }

    public function getRoleNameAttribute()
    {
        $roleNames = [
            'user' => 'طالب / طالبة',
            'library' => 'مكتبة',
            'branch' => 'فرع مكتبة',
            'teacher' => 'استاذ / استاذة',
            'stationery' => 'قرطاسية',
        ];

        return $roleNames[$this->role] ?? $this->role;
    }


    public function getRedirectRoute()
    {
        $redirectRoutes = [
            'admin' => '/admin/dashboard',
            'library' => '/library/dashboard',
            'branch' => '/branch/dashboard',
            'teacher' => '/teacher/dashboard',
        ];

        return $redirectRoutes[$this->role] ?? '/dashboard';
    }
}
