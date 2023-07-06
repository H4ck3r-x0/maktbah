<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use App\Models\UserCart;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BookLibrary;
use App\Models\Library;
use App\Models\Order;

class UserCartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $cart = UserCart::query()
            ->where('user_id', $request->user()->id)
            ->with(['books.library:id,name,city,district,google_maps', 'books.book'])
            ->get();

        return Inertia::render('User/Cart/Index', [
            'carts' => $cart,
            'total' => $cart->sum('total_price')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        foreach ($request->carts as $book) {
            foreach ($book['books'] as $libraryBook) {
                $library = Library::where('id', $libraryBook['library_id'])
                    ->first()
                    ->orders()
                    ->create(
                        [
                            'total' => $libraryBook['price'],
                            'book_id' => $libraryBook['book_id'],
                            'user_id' => $request->user()->id
                        ]
                    );
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
