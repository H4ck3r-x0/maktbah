<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Library;
use App\Models\LibraryBranch;
use App\Policies\Branch\BranchPolicy;
use Illuminate\Support\Facades\Gate;
use App\Policies\UserLibrary\UserLibraryPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Library::class => UserLibraryPolicy::class,
        LibraryBranch::class => BranchPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
    }
}
