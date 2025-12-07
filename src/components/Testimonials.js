import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ahmed Khan',
    city: 'Mumbai',
    text: 'Very supportive staff. Our Umrah was smoothly managed. Highly recommended.',
    img: '/assets/man1.jpeg',
  },
  {
    name: 'Fatima B',
    city: 'Surat',
    text: 'Excellent arrangements and comfortable stay near the Haram. Great guidance.',
    img: '/assets/woman.avif',
  },
  {
    name: 'Mohammad Ali',
    city: 'Varanasi',
    text: 'Professional services and clear communication. Thank you Al Khalid!',
    img: '/assets/man2.jpeg',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section testimonials" style={{ fontFamily: "'Reem Kufi Fun', sans-serif" }}>
      <div className="container">
        <h2 className="section-title">Clients Speak</h2>

        <div className="testi-wrap">
          {/* Desktop navigation buttons */}
          <button className="nav desktop" onClick={prev}>◀</button>

          <div className="testi-card">
            <img src={testimonials[i].img} alt={testimonials[i].name} />
            <div className="testi-body">
              <p className="quote">"{testimonials[i].text}"</p>
              <p className="author">— {testimonials[i].name}, {testimonials[i].city}</p>
            </div>
          </div>

          <button className="nav desktop" onClick={next}>▶</button>

          {/* Mobile buttons below card */}
          <div className="testi-buttons mobile">
            <button className="nav" onClick={prev}>◀</button>
            <button className="nav" onClick={next}>▶</button>
          </div>
        </div>
      </div>
    </section>
  );
}
