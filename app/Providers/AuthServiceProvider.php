<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Library;
use App\Models\LibraryBranch;
use App\Models\Note;
use App\Models\Order;
use App\Policies\Branch\BranchPolicy;
use App\Policies\Note\NotePolicy;
use App\Policies\UserLibrary\UserLibraryPolicy;
use App\Policies\UserOrderPolicy;
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
        LibraryBranch::class => BranchPolicy::class,
        Order::class => UserOrderPolicy::class,
        Note::class => NotePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
    }
}
