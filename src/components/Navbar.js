import React, { useState } from 'react';
import './Navbar.css';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar(){
const [open, setOpen] = useState(false);
return (
<header className="nav-wrap">
<div className="nav-main container">
<div className="brand">
<img src="/assets/newlogowb.png" alt="Maqbool Tours" className="logo" />
<div className="brand-text"><span>Maqbool</span><small>Tours & Travels</small></div>
</div>


<nav className={`nav-links ${open ? 'open' : ''}`}>
<a href="#home" onClick={()=>setOpen(false)}>Home</a>
<a href="#packages" onClick={()=>setOpen(false)}>Hajj</a>
<a href="#packages" onClick={()=>setOpen(false)}>Umrah</a>
<a href="#packages" onClick={()=>setOpen(false)}>Ziyarat</a>
<a href="#about" onClick={()=>setOpen(false)}>About</a>
<a href="#contact" className="cta" onClick={()=>setOpen(false)}>Contact</a>
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