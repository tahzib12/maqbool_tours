import React, { useState } from 'react';
import './Navbar.css';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar(){
const [open, setOpen] = useState(false);
return (
<header className="nav-wrap" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
<div className="nav-main container">
<div className="brand">
<img src="/assets/newlogowb.png" alt="Maqbool Tours" className="logo" />
<div className="brand-text" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}><span>Maqbool</span><small>Tours & Travels</small></div>
</div>


<nav className={`nav-links ${open ? 'open' : ''}`}>
<a href="#home" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Home</a>
<a href="#packages" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Packages</a>
<a href="#about" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Hotel</a>
<a href="#testimonials" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Testimonials</a>
<a href="#about" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>About</a>
<a href="#contact" className="cta" onClick={()=>setOpen(false)} style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Contact</a>
</nav>


<div className="nav-actions">
<div className="hamburger" onClick={()=>setOpen(!open)}>
{open ? <FaTimes /> : <FaBars />}
</div>
</div>
</div>
</header>
);
}