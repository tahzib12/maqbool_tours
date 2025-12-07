import React from 'react';
import './About.css';


export default function About(){
return (
<section id="about" className="section about" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
<div className="container about-inner">
<div className="about-media">
<img src="/assets/hotel1.avif" alt="Maqbool Tours & Travels" />
</div>
<div className="about-body">
<h2 >Luxurious Hotel Accommodations For Pilgrims</h2>
<p>Al Khalid Tours & Travels has been operating trusted Hajj & Umrah services since 2003. We arrange comfortable accommodation in Makkah and Madinah, licensed local ground transport, knowledgeable guides and 24/7 assistance for our pilgrims. Our mission is to make your spiritual journey smooth, dignified and memorable.</p>
<ul>
<li>Experienced multilingual guides</li>
<li>Hand-picked hotels near Haram</li>
<li>Transparent pricing & visa assistance</li>
<li>Dedicated welfare & medical support</li>
</ul>
<a href="#contact" className="btn">Book Now</a>
</div>
</div>
</section>
);
}