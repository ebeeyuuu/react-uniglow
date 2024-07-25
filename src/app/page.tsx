import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/LandingPage/Hero';
import WhyChooseUs from './components/LandingPage/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhyChooseUs />
    </div>
  );
}
