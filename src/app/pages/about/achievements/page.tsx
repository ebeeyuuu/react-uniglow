"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(() => import("@/app/components/About/Achievements/Hero"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Footer />
    </Suspense>
  );
};

export default Home;
