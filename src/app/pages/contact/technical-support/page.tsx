"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/Contact/TechnicalSupport/Hero"),
);
const Process = lazy(
  () => import("@/app/components/Contact/TechnicalSupport/Process"),
);
const Categories = lazy(
  () => import("@/app/components/Contact/TechnicalSupport/Categories"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Process />
      <Categories />
      <Footer />
    </Suspense>
  );
};

export default Home;
