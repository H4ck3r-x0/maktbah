<?php

namespace App\Http\Controllers\UserLibrary;

use App\Models\Book;
use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Library;
use App\Models\District;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with('library.branches')
            ->findOrFail(request()->user()->id);

        if ($user->library === null) {
            return redirect()
                ->route('library.create')
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية');
        }

        $topSellingBooks = DB::table('order_details')
            ->join('orders', 'order_details.order_id', '=', 'orders.id')
            ->join('books', 'order_details.book_id', '=', 'books.id')
            ->join('statuses', 'orders.id', '=', 'statuses.model_id')
            ->join('book_library', 'books.id', '=', 'book_library.book_id')
            ->select('order_details.book_id', DB::raw('count(*) as total'), DB::raw('SUM(order_details.total_price) as benefits'))
            ->where('statuses.name', 'confirmed')
            ->where('statuses.model_type', 'App\Models\Order')
            ->where('book_library.library_id', $user->library->id)
            ->groupBy('order_details.book_id')
            ->orderBy('total', 'desc')
            ->take(3)
            ->get();

        $bookIds = $topSellingBooks->pluck('book_id')->toArray();
        $totals = $topSellingBooks->pluck('total', 'book_id')->toArray();
        $benefits = $topSellingBooks->pluck('benefits', 'book_id')->toArray();

        $books = Book::whereIn('id', $bookIds)->get();

        foreach ($books as $book) {
            $book->total_sold = $totals[$book->id];
            $book->benefits = $benefits[$book->id];
        }

        $books = $books->sortByDesc(function ($book) use ($totals) {
            return $totals[$book->id]; // Sort by total_sold count in descending order
        });



        return Inertia::render('Library/Dashboard', [
            'library' => $user->library,
            'topSellingBooks' => $books->values(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::with('library')
            ->findOrFail(request()->user()->id);

        if ($user->cannot('create', Library::class)) {
            return redirect()
                ->route('library.edit', $user->library->id)
                ->with('createNewLibrary', 'الرجاء إنشاء مكتبتك الأساسية');
        }

        return Inertia::render('Library/Create', [
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'phone' => 'required|string|max:255|unique:' . Library::class,
        ]);

        $request->user()->library()->create([
            'name' => request()->name,
            'phone' => request()->phone,
            'CR' => request()->CR,
            'city' => request()->city,
            'district' => request()->district,
            'google_maps' => request()->google_maps,
        ]);

        return redirect()
            ->route('library.dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $library = Library::with('user')->findOrFail($id);
        $this->authorize('view', $library);

        return Inertia::render('Library/Edit', [
            'library' => $library,
            'cities' => City::all(),
            'districts' => District::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique(Library::class)->ignore($id)],
            'phone' => ['required', 'string', 'max:255', Rule::unique(Library::class)->ignore($id)],
        ]);

        $library = Library::with('user')->findOrFail($id);
        $library->name = $request->name;
        $library->phone = $request->phone;
        $library->CR = $request->CR;
        $library->city = $request->city;
        $library->district = $request->district;
        $library->google_maps = $request->google_maps;

        $library->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
