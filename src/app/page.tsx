"use client";

import React, { Suspense, lazy, useEffect } from "react";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { AnimatePresence } from "framer-motion";

const components = {
  Hero: lazy(() => import("./components/LandingPage/Hero")),
  WhyChooseUs: lazy(() => import("./components/LandingPage/WhyChooseUs")),
  Features: lazy(() => import("./components/LandingPage/Features")),
  Testimonies: lazy(() => import("./components/LandingPage/Testimonies")),
  FAQ: lazy(() => import("./components/LandingPage/FAQ")),
  Footer: lazy(() => import("./components/LandingPage/Footer")),
};

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      router.push("/pages/main");
    }
  });

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence>
        <NavBar />
        {Object.values(components).map((Component, index) => (
          <React.Fragment key={index}>
            <Component />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </Suspense>
  );
};

export default Home;
