"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(() => import("@/app/components/About/MissionAndValues/Hero"));
const Mission = lazy(() => import("@/app/components/About/MissionAndValues/Mission"));
const Values = lazy(() => import("@/app/components/About/MissionAndValues/Values"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Mission />
      <Values />
      <Footer />
    </Suspense>
  );
};

export default Home;
