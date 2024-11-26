"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/LandingPage/Footer";

import Hero from "@/app/components/About/CorporateResponsibility/Hero";
import EmpoweringStudents from "@/app/components/About/CorporateResponsibility/EmpoweringStudents";
import GlobalCommunity from "@/app/components/About/CorporateResponsibility/GlobalCommunity";
import EthicalPartnerships from "@/app/components/About/CorporateResponsibility/EthicalPartnerships";
import ReducingBarriers from "@/app/components/About/CorporateResponsibility/ReducingBarriers";
import StudentWellness from "@/app/components/About/CorporateResponsibility/StudentWellness";

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
