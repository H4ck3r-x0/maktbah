<?php

namespace App\Policies\UserLibrary;

use App\Models\Library;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserLibraryPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Library $library): Response
    {
        return $user->id == $library->user_id
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if ($user->library === null) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Library $library): bool
    {
        return $user->id == $library->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Library $library): bool
    {
        return $user->id == $library->user_id;
    }
}
