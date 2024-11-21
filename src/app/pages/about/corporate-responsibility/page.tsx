"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

const Hero = lazy(
  () => import("@/app/components/About/CorporateResponsibility/Hero"),
);
const EmpoweringStudents = lazy(
  () => import("@/app/components/About/CorporateResponsibility/EmpoweringStudents"),
);
const GlobalCommunity = lazy(
  () => import("@/app/components/About/CorporateResponsibility/GlobalCommunity"),
);
const EthicalPartnerships = lazy(
  () => import("@/app/components/About/CorporateResponsibility/EthicalPartnerships"),
);
const ReducingBarriers = lazy(
  () => import("@/app/components/About/CorporateResponsibility/ReducingBarriers"),
);
const StudentWellness = lazy(
  () => import("@/app/components/About/CorporateResponsibility/StudentWellness"),
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Hero />
      <EmpoweringStudents />
      <GlobalCommunity />
      <EthicalPartnerships />
      <ReducingBarriers />
      <StudentWellness />
      <Footer />
    </Suspense>
  );
};

export default Home;
