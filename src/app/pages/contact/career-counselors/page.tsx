"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/Contact/CareerCounselors/Hero"),
);
const Services = lazy(
  () => import("@/app/components/Contact/CareerCounselors/Services"),
)
const Process = lazy(
  () => import("@/app/components/Contact/CareerCounselors/Process"),
)
const Booking = lazy(
  () => import("@/app/components/Contact/CareerCounselors/Booking")
)
const Testimonial = lazy(
  () => import("@/app/components/Contact/CareerCounselors/Testimonial"),
)

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <Services />
      <Process />
      <Booking />
      <Testimonial />
      <Footer />
    </Suspense>
  );
};

export default Home;
