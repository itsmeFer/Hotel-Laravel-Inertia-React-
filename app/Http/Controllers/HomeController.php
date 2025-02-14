<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home', [
            'hotels' => [
                [
                    'name' => 'Grand Hotel',
                    'location' => 'Jakarta, Indonesia',
                    'price' => 750000,
                    'image' => asset('images/hotel1.jpg'),
                    'reviews' => '520',
                    'rating' => 4
                ],
                [
                    'name' => 'Luxury Resort',
                    'location' => 'Bali, Indonesia',
                    'price' => 1200000,
                    'image' => asset('images/hotel2.jpg'),
                    'reviews' => '890',
                    'rating' => 5
                ],
                [
                    'name' => 'Cozy Stay',
                    'location' => 'Bandung, Indonesia',
                    'price' => 500000,
                    'image' => asset('images/hotel3.jpg'),
                    'reviews' => '350',
                    'rating' => 4
                ],
                [
                    'name' => 'Sunset Inn',
                    'location' => 'Yogyakarta, Indonesia',
                    'price' => 680000,
                    'image' => asset('images/hotel4.jpg'),
                    'reviews' => '470',
                    'rating' => 4
                ],
                [
                    'name' => 'Mountain Lodge',
                    'location' => 'Malang, Indonesia',
                    'price' => 580000,
                    'image' => asset('images/hotel5.jpg'),
                    'reviews' => '280',
                    'rating' => 3
                    
                ],
                [
                    'name' => 'Parapat Cottage',
                    'location' => 'Samosir, Indonesia',
                    'price' => 800000,
                    'image' => asset('images/hotel6.jpg'),
                    'reviews' => '980',
                    'rating' => 4
                ]
            ]
        ]);
    }
}
