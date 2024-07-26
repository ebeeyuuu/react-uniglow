"use client"

import React, { useState, useEffect } from 'react';
import { grid } from 'ldrs'
import NavBar from './components/NavBar';
import Hero from './components/LandingPage/Hero';
import WhyChooseUs from './components/LandingPage/WhyChooseUs';
import Features from './components/LandingPage/Features';
import Testimonies from './components/LandingPage/Testimonies';
import FAQ from './components/LandingPage/FAQ';
import Footer from './components/LandingPage/Footer';
import Loading from './components/Loading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <Features />
      <Testimonies />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;