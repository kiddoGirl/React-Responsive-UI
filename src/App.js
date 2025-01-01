import React from 'react';


import Navbar from './components/navbar';
import HeroSection from './components/hero';
import FeaturesSection from './components/features';
import FeaturesWithTestimonial from './components/testinominal';
import FaqSection from './components/faq';
import FooterSection from './components/footer';


function App() {
  return (
    
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeaturesWithTestimonial />
      <FaqSection />
      <FooterSection />
    </div>

  );
}

export default App;
