import React from 'react';
import './Footer.css';


export default function Footer(){
return (
<footer className="footer" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
<div className="container footer-inner">
<div className="f-about">
<img src="/assets/logo.png" alt="logo" style={{width:70}}/>
<p>Maqbool Tours & Travels — Trusted Hajj & Umrah operators since 2003. We are committed to safe and dignified pilgrimages.</p>
</div>
<div className="f-links">
<h4>Quick Links</h4>
<ul>
<li>Hajj Packages</li>
<li>Umrah Packages</li>
<li>Visa Assistance</li>
<li>Contact</li>
</ul>
</div>
<div className="f-news">
<h4>Newsletter</h4>
<p>Sign up for latest departures & offers.</p>
<form onSubmit={e=>e.preventDefault()} className="news-form">
<input placeholder="Your email" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}/>
<button className="btn" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Subscribe</button>
</form>
</div>
</div>
<div className="f-bottom">© {new Date().getFullYear()} Maqbool Tours & Travels. All rights reserved.</div>
</footer>
);
}   