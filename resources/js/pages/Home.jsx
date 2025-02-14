import { useState } from "react";

export default function Home({ hotels }) {
    return (
        <div>
            {/* Navbar */}
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 20px',
                backgroundColor: '#36384c',
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                margin: '10px',
                maxWidth: '95%',
                marginLeft: 'auto', 
                marginRight: 'auto'
            }}>
                <h2 style={{ margin: 0 }}>Hotel Booking</h2>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hotels</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                </div>

                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '8px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Logout
                </button>
            </nav>

            {/* Container Hotel */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px',
                justifyContent: 'center',
                maxWidth: '1000px',
                margin: 'auto'
            }}>
                {hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </div>
        </div>
    );
}

// Komponen Card Hotel dengan Efek Pop-Up
function HotelCard({ hotel }) {
    const [hover, setHover] = useState(false);

    return (
        <div 
            style={{
                width: '300px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: 'white',
                position: 'relative',
                transition: 'transform 0.3s',
                margin: 'auto'
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img 
                src={hotel.image} 
                alt="Hotel" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '15px' }}>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
            </div>

            {/* Detail yang Muncul Saat Hover */}
            <div 
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: hover ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
                    opacity: hover ? 1 : 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    width: '90%',
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    textAlign: 'center'
                }}
            >
                {/* Bintang Rating */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <span key={index} style={{ color: index < hotel.rating ? '#FFD700' : '#DDD', fontSize: '18px' }}>★</span>
                    ))}
                    <span style={{ fontSize: '14px', color: '#555' }}>({hotel.reviews} reviews)</span>
                </div>

                {/* Harga */}
                <p style={{ fontWeight: 'bold', color: '#28a745' }}>Rp {hotel.price.toLocaleString()}</p>

                {/* Tombol Pemesanan */}
                <button style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '5px'
                }}>
                    Pesan Sekarang
                </button>
            </div>
        </div>
    );
}
