"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(() => import("@/app/components/About/Hero"));
const Journey = lazy(() => import("@/app/components/About/Journey"));
const Values = lazy(() => import("@/app/components/About/Values"));
const Team = lazy(() => import("@/app/components/About/Team"));
const Impact = lazy(() => import("@/app/components/About/Impact"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Journey />
      <Values />
      <Team />
      <Impact />
      <Footer />
    </Suspense>
  );
};

export default Home;
