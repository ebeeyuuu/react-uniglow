"use client"

import React, { Suspense, lazy } from 'react';
import Loading from '@/app/components/Loading';

// Lazy load components
const NavBar = lazy(() => import('@/app/components/NavBar'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <NavBar />
        Programs
      </div>
    </Suspense>
  );
};

export default Home;