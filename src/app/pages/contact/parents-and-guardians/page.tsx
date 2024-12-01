"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/Hero"),
);
const WhyGetInvolved = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/WhyGetInvolved"),
);
const HowUniglowHelps = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/HowUniglowHelps"),
);
const Resources = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/Resources"),
);
const CommonConcerns = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/CommonConcerns"),
);
const NextSteps = lazy(
  () => import("@/app/components/Contact/ParentsAndGuardians/NextSteps"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <WhyGetInvolved />
      <HowUniglowHelps />
      <Resources />
      <CommonConcerns />
      <NextSteps />
      <Footer />
    </Suspense>
  );
};

export default Home;
