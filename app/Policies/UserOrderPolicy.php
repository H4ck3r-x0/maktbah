<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserOrderPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Order $order): Response
    {
        return $user->id == $order->user_id || $user->role == 'admin'
            ? Response::allow()
            : Response::denyAsNotFound();
    }


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Order $order): Response
    {
        return $user->id === $order->user_id || $user->role == 'admin'
            ? Response::allow()
            : Response::denyAsNotFound();
    }
}
