import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <div className="overflow-x-hidden">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;