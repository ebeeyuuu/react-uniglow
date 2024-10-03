"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/About/CorporateResponsibility/Hero"),
);
const WorkEthics = lazy(
  () => import("@/app/components/About/CorporateResponsibility/WorkEthics"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <div className="w-full h-full multiple-large-radial-bg">
        <Hero />
        <WorkEthics />
      </div>
      <Footer />
    </Suspense>
  );
};

export default Home;
