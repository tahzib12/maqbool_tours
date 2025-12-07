import React from 'react';
import './Packages.css';


const pkgs = [
{ id:'umrah', title:'Umrah 2025-26', price:'From ₹79,999', desc:'Economical packages with 3-4 star hotels near Haram.' , img:'/assets/umrah1.jpeg'},
{ id:'hajj', title:'Hajj 2026', price:'From ₹5,99,999', desc:'Complete Hajj packages with visa, flights & guidance.' , img:'/assets/hajj1.jpg'},
{ id:'ramadan', title:'Ramadan Packages', price:'From ₹59,999', desc:'Spiritual Ramadan stays in Makkah & Madinah.' , img:'/assets/RAMADAN1.jpg'},
{ id:'ziyarat', title:'Ziyarat Tours', price:'From ₹49,999', desc:'Historical ziyarat across holy sites in Saudia Arabia.' , img:'/assets/ziyarat1.jpeg'},
];


export default function Packages(){
return (
<section id="packages" className="section packages">
<div className="container">
<h2 className="section-title">Our Featured Packages</h2>
<p className="section-sub">Choose from trusted packages tailored for comfort and devotion.</p>
<div className="cards">
{pkgs.map(p=> (
<article key={p.id} className="pkg">
<div className="pkg-media"><img src={p.img} alt={p.title} /></div>
<div className="pkg-body">
<h3>{p.title}</h3>
<p className="price">{p.price}</p>
<p>{p.desc}</p>
<div className="pkg-actions"><a href={`#${p.id}`} className="btn">Read More</a></div>
</div>
</article>
))}
</div>
</div>
</section>
);
}