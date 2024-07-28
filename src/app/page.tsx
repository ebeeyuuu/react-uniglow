"use client"

import React, { Suspense, lazy } from 'react';
import NavBar from './components/NavBar';
import Loading from './components/Loading';

// Lazy load components
const Hero = lazy(() => import('./components/LandingPage/Hero'));
const WhyChooseUs = lazy(() => import('./components/LandingPage/WhyChooseUs'));
const Features = lazy(() => import('./components/LandingPage/Features'));
const Testimonies = lazy(() => import('./components/LandingPage/Testimonies'));
const FAQ = lazy(() => import('./components/LandingPage/FAQ'));
const Footer = lazy(() => import('./components/LandingPage/Footer'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <Features />
      <Testimonies />
      <FAQ />
      <Footer />
    </Suspense>
  );
};

export default Home;