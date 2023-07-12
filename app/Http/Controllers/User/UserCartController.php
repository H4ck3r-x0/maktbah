<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\UserCart;
use App\Models\BookLibrary;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

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


    public function store(Request $request)
    {
        try {
            DB::transaction(function () use ($request) {
                $libraries = [];

                foreach ($request->carts as $cart) {
                    $libraryId = $cart['library_id'];

                    if (!isset($libraries[$libraryId])) {
                        $libraries[$libraryId] = Order::create([
                            'total_payment' => 0,
                            'user_id' => $request->user()->id,
                            'library_id' => $libraryId,
                        ]);
                    }

                    $order = $libraries[$libraryId];

                    foreach ($cart['books'] as $book) {
                        $order->increment('total_payment', $book['price']);

                        $detail = Orderdetail::create([
                            'order_id' => $order->id,
                            'book_library_id' => $cart['book_library_id'],
                            'book_id' => $book['book_id'],
                            'price' => $book['price'],
                            'total_price' => $book['price']
                        ]);

                        BookLibrary::findOrFail($detail->book_library_id)->decrement('qty');
                    }

                    if (!$order->latestStatus(Order::STATUS['sent_to_library']['key'])) {
                        $order->setStatus(Order::STATUS['sent_to_library']['key']);
                    }
                }

                $request->user()->carts()->delete();
            });

            return redirect()->route('user.order.index');
        } catch (\Exception $e) {
            Log::error($e);
        }
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
