"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(() => import("@/app/components/About/Achievements/Hero"));
const Timeline = lazy(() => import("@/app/components/About/Achievements/Timeline"));
const SuccessStories = lazy(() => import("@/app/components/About/Achievements/SuccessStories"));
const ImpactStatistics = lazy(() => import("@/app/components/About/Achievements/ImpactStatistics"));
const AwardsRecognition = lazy(() => import("@/app/components/About/Achievements/AwardsRecognition"));
const GlobalReach = lazy(() => import("@/app/components/About/Achievements/GlobalReach"));
const CommunityImpact = lazy(() => import("@/app/components/About/Achievements/CommunityImpact"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Timeline />
      <SuccessStories />
      <ImpactStatistics />
      <AwardsRecognition />
      <GlobalReach />
      <CommunityImpact />
      <Footer />
    </Suspense>
  );
};

export default Home;
