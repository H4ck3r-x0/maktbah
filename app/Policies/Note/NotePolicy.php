<?php

namespace App\Policies\Note;

use App\Models\Note;
use App\Models\User;

class NotePolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Note $note): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if ($user->role === 'teacher' && $user->teacher !== null) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Note $note): bool
    {
        if ($user->role === 'teacher' && $note->user_id === $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Note $note): bool
    {
        if ($user->role === 'teacher' && $note->user_id === $user->id) {
            return true;
        }

        return false;
    }
}
