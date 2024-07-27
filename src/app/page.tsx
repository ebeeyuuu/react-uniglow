"use client"

import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/LandingPage/Hero';
import WhyChooseUs from './components/LandingPage/WhyChooseUs';
import Features from './components/LandingPage/Features';
import Testimonies from './components/LandingPage/Testimonies';
import FAQ from './components/LandingPage/FAQ';
import Footer from './components/LandingPage/Footer';
import Loading from './components/Loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Component mounted, starting timer');
    const timer = setTimeout(() => {
      console.log('Timer finished, setting isLoading to false');
      setIsLoading(false);
    }, 1500);

    return () => {
      console.log('Component unmounted, clearing timer');
      clearTimeout(timer);
    };
  }, []);

  console.log('Rendering, isLoading:', isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />
          <Hero />
          <WhyChooseUs />
          <Features />
          <Testimonies />
          <FAQ />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;