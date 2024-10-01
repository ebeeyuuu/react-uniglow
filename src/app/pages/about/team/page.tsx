"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(() => import("@/app/components/About/Team/Hero"));
const Hiring = lazy(() => import("@/app/components/About/Team/Hiring"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Hiring />
      <Footer />
    </Suspense>
  );
};

export default Home;
