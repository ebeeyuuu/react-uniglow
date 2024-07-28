"use client"

import React, { Suspense } from 'react';
import Loading from '@/app/components/Loading';

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        Donate
      </div>
    </Suspense>
  );
};

export default Home;