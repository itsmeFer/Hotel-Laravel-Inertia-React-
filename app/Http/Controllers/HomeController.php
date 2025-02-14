<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home', [
            'hotel' => [
                'name' => 'Grand Hotel',
                'location' => 'Jakarta, Indonesia',
                'price' => 750000,
                'image' => asset('images/hotel.jpg'),
                'reviews' => '520',
                'rating' => '4'
            ]
        ]);
    }
}
