import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/LandingPage/Hero';
import WhyChooseUs from './components/LandingPage/WhyChooseUs';
import Features from './components/LandingPage/Features'
import FAQ from './components/LandingPage/FAQ'
import Footer from './components/LandingPage/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
