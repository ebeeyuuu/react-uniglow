"use client"

import React, { Suspense, lazy } from 'react';
import Loading from '@/app/components/Loading';
import NavBar from '@/app/components/NavBar';

// Lazy load the Hero component
const Hero = lazy(() => import('@/app/components/About/Hero'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
    </Suspense>
  );
};

export default Home;