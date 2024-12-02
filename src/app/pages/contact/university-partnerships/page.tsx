"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Hero"),
);
const WhyPartner = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/WhyPartner"),
);
const Benefits = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Benefits"),
);
const PartnershipTiers = lazy(
  () =>
    import("@/app/components/Contact/UniversityPartnerships/PartnershipTiers"),
);
const HowItWorks = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/HowItWorks"),
);
const Contact = lazy(
  () => import("@/app/components/Contact/UniversityPartnerships/Contact"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <WhyPartner />
      <Benefits />
      <PartnershipTiers />
      <HowItWorks />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Home;
