import React from 'react';
import './Gallery.css';


const imgs = ['/assets/rauja.webp','/assets/Jannat-Al-Mualla.jpg','/assets/hajreaswad.jpg','/assets/rocks.jpg'];


export default function Gallery(){
return (
<section className="section gallery">
<div className="container">
<h2 className="section-title">Sacred Moments & Places</h2>
<div className="grid">
{imgs.map((s,idx)=> (
<div key={idx} className="g-item"><img src={s} alt={`gallery-${idx}`} /></div>
))}
</div>
</div>
</section>
);
}