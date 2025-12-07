import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
return (
<div className="site-root">
<Navbar />
<main>
<Hero />
<Packages />
<About />
<Testimonials />
<Gallery />
<Contact />
</main>
<Footer />
<a
  href="https://wa.me/917376906787"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/assets/whatsapplogo.png" alt="WhatsApp" />
</a>

</div>
);
}


export default App;