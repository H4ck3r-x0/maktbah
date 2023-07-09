<?php

namespace App\Policies\Branch;

use App\Models\LibraryBranch;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BranchPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, LibraryBranch $libraryBranch): Response
    {
        return $user->id == $libraryBranch->user_id
            ? Response::allow()
            : Response::denyAsNotFound();
    }
}
