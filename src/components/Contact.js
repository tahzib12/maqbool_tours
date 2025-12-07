import React, { useState } from 'react';
import './Contact.css';


export default function Contact(){
const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
const [sent, setSent] = useState(false);
const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
const handleSubmit = e => {
e.preventDefault();
// placeholder: integrate with email service
setSent(true);
setTimeout(()=> setSent(false), 4000);
setForm({name:'', email:'', phone:'', message:''});
}


return (
<section id="contact" className="section contact" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
<div className="container contact-inner">
<div className="contact-left">
<h2>Get In Touch</h2>
<p>Contact our offices across India for bookings, visa support and group discounts. We will get back within 24 hours.</p>
<ul className="contact-info">
<li><strong>Phone:</strong>+91 7376906787, +91 7054886787</li>
<li><strong>Email:</strong> shoyebattari77@gmail.com</li>
<li><strong>Address:</strong>Near Sone Health Club , Purab Mohal, Ward no. 23, Robertsganj-Sonbhadra(UP)</li>
</ul>
</div>
<div className="contact-right">
<form onSubmit={handleSubmit} className="contact-form">
<div className="row">
<input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}/>
<input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}/>
</div>
<input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" required style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}/>
<textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={5} required style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}/>
<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<button className="btn" type="submit" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Send Message</button>
{sent && <span className="sent" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>Message sent ✓</span>}
</div>
</form>
</div>
</div>
</section>
);
}