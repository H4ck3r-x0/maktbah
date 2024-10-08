<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));

            Route::prefix('admin')
                ->middleware('auth', 'web', 'isAdmin')
                ->name('admin.')
                ->group(base_path('routes/admin.php'));

            Route::prefix('library')
                ->middleware('auth', 'web', 'isLibrary')
                ->group(base_path('routes/libraryRoutes.php'));

            Route::prefix('branch')
                ->name('branch.')
                ->middleware('auth', 'web', 'isBranch')
                ->group(base_path('routes/branchRoutes.php'));

            Route::prefix('teacher')
                ->name('teacher.')
                ->middleware('auth', 'web', 'isTeacher')
                ->group(base_path('routes/teacherRoutes.php'));

            Route::prefix('stationery')
                ->name('stationery.')
                ->middleware('auth', 'web', 'isStationery')
                ->group(base_path('routes/stationeryRoutes.php'));


            Route::prefix('stationery_branch')
                ->name('stationery_branch.')
                ->middleware('auth', 'web', 'isStationeryBranch')
                ->group(base_path('routes/stationeryBranchRoutes.php'));
        });
    }
}
