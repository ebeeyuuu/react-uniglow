"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Hero"),
);
const Stats = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Stats"),
);
const CTA = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/CTA"),
);
const Partners = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Partners"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Stats />
      <Partners />
      <CTA />
      <Footer />
    </Suspense>
  );
};

export default Home;
