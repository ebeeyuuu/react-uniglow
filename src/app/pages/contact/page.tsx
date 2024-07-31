"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

// Lazy load components
const NavBar = lazy(() => import("@/app/components/NavBar"));
const TypewriterEffect = lazy(
  () => import("@/app/components/TypewriterEffect")
);
const Message = lazy(() => import("@/app/components/Contact/Message"));
const Newsletter = lazy(() => import("@/app/components/Contact/Newsletter"));
const Contacts = lazy(() => import("@/app/components/Contact/Contacts"));

const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <NavBar />
        <div className="flex justify-center items-center h-[100vh] w-full">
          <div className="mt-[-300px]">
            <div className="mt-[80px] ml-[40px] w-[95px]">
              <motion.div
                className="flex flex-row gap-x-[10px] items-center cursor-pointer"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div>
                  <FaArrowLeft />
                </motion.div>
                <Link href="/">Go back</Link>
              </motion.div>
            </div>
            <div className="ml-[40px] mt-[20px]">
              <TypewriterEffect
                text="Here to help"
                className="text-8xl font-bold max-[900px]:text-6xl smooth-animation"
              />
            </div>
            <div className="flex flex-row w-full max-[900px]:flex-col gap-x-[100px]">
              <Message />
              <div className="flex flex-col gap-y-[30px] max-[900px]:justify-center smooth-animation">
                <Newsletter />
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
