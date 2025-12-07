import React from 'react';
import './Hero.css';


export default function Hero(){
return (
<section id="home" className="hero" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
<div className="hero-overlay">
<div className="container hero-inner">
<div className="hero-left">
<h1>Journey Filled with Blessings & Mercy</h1>
<p>Maqbool Tours provides trusted, comfortable and fully guided Hajj & Umrah packages with premium hotels in Makkah & Madinah, experienced guides, and 24/7 support.</p>
<div className="hero-actions">
<a href="#packages" className="btn">View Packages</a>
<a href="#contact" className="btn secondary">Get A Quote</a>
</div>
</div>
<div className="hero-right">
</div>
</div>
</div>
</section>
);
}