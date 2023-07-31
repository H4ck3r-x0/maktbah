<?php

namespace App\Http\Controllers\Admin\Ads;

use Inertia\Inertia;
use App\Models\AdminAds;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adminAd = AdminAds::first();
        $adminAdImage = $adminAd ? $adminAd->getAdminAdImageAttribute() : null;

        return Inertia::render('Admin/Settings/Ads/Create', [
            'adminAdImage' => $adminAdImage,
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
        $request->validate([
            'adImage' => 'required|mimes:jpg,png,jpeg|max:2048',
        ]);

        // Remove previous ad from AdminAds model and media table
        $previousAd = AdminAds::first();
        if ($previousAd) {
            $previousAd->delete();
            $previousAd->clearMediaCollection('adminAdsImage');
        }

        $image = $request->file('adImage');
        $adminAd = new AdminAds();
        $adminAd->addMedia($image)->toMediaCollection('adminAdsImage');

        $adminAd->save();
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $previousAd = AdminAds::first();
        if ($previousAd) {
            $previousAd->delete();
            $previousAd->clearMediaCollection('adminAdsImage');
        }

        return redirect()->back();
    }
}
