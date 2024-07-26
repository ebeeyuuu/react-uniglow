"use client"

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import NavBar from '@/app/components/NavBar';

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
      Contact
    </div>
  );
};

export default Home;