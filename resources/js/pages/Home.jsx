import { useState, useEffect } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

export default function Home({ hotels }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: isScrolled ? 'transparent' : '#b3c4db',
    color: isScrolled ? '#b3c4db' : 'white',
    fontWeight: isScrolled ? 'bold' : 'lighter',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: isScrolled ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.4s ease, color 0.4s ease',
    zIndex: 1000,
}}>
    <h2 style={{ margin: 0, fontWeight: 'normal', color: isScrolled ? '#b3c4db' : 'white' }}>Hotel Booking</h2>

    <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: isScrolled ? '#b3c4db' : 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: isScrolled ? '#b3c4db' : 'white', textDecoration: 'none' }}>Hotels</a>
        <a href="#" style={{ color: isScrolled ? '#b3c4db' : 'white', textDecoration: 'none' }}>Contact</a>
    </div>
    <button style={{
        backgroundColor: isScrolled ? '#b3c4db' : 'white',
        color: isScrolled ? 'white' : '#b3c4db',
        padding: '8px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.4s ease, color 0.4s ease'
    }}>
        Logout
    </button>
</nav>


{/* Header di bawah Navbar */}
<div style={{
    position: 'relative',
    backgroundColor: '#fff9f9',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px',
    margin: '10px',
    marginTop: '80px',
    flexWrap: 'wrap',
    fontFamily: 'Poppins, sans-serif',
}}>
    <div style={{ flex: 1, minWidth: '300px', paddingRight: '20px', zIndex: 2 }}>
        <p style={{ color: '#000000', fontSize: '28px', fontWeight: 'bold' }}>
            Pilih Hotel Impian Anda!
        </p>
        <p style={{ color: '#555555', fontSize: '16px' }}>
            Lorem Ipsum is simply dummy text of the printing industry.
        </p>
    </div>

    {/* Gambar Hotel */}
    <div style={{ flex: 1, minWidth: '300px', textAlign: 'right', position: 'relative' }}>
        <img
            src="images/image.png"
            alt="Hotel"
            style={{ width: '100%', borderRadius: '10px', maxWidth: '500px' }}
        />
    </div>

    {/* Form Pencarian (Memanjang ke samping) */}
    <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '90%', // Memanjang ke samping
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        zIndex: 3,
    }}>
        <input type="text" placeholder="Lokasi" style={wideInputStyle} />
        <input type="date" placeholder="Check-in" style={wideInputStyle} />
        <input type="date" placeholder="Check-out" style={wideInputStyle} />
        <input type="number" placeholder="Person" style={wideInputStyle} />
        <button style={wideSearchButtonStyle}>Cari</button>
    </div>
</div>

            <div style={{ margin: 25, paddingTop: '90px', fontFamily: 'Poppins, sans-serif' }}>
                <p style={{ fontWeight: 'bold', fontSize: 30 }}>Hotel yang mungkin Favorit kamu</p>
                <p style={{ color: '#555555' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

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

// Komponen Card Hotel
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
                backgroundColor: 'white',
                position: 'relative',
                transition: 'transform 0.3s',
                margin: 'auto',
                fontFamily: 'Poppins, sans-serif',
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
                <p style={{ color: '#24AB70' }}>{hotel.location}</p>
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
                    textAlign: 'center',
                }}
            >
                {/* Bintang Rating */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '5px' }}>
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
                    marginTop: '5px',
                }}>
                    Pesan Sekarang
                </button>
            </div>
        </div>
    );
}
// Style tambahan
// Style tambahan untuk input & tombol lebih lebar
const wideInputStyle = {
    flex: 1, // Agar semua input seimbang lebarnya
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
};

const wideSearchButtonStyle = {
    backgroundColor: '#b3c4db',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
};