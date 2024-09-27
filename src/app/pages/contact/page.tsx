"use client";

import React, { Suspense, lazy } from "react";
import Loading from "@/app/components/Loading";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NavBar = lazy(() => import("@/app/components/NavBar"));
const TypewriterEffect = lazy(
  () => import("@/app/components/TypewriterEffect"),
);
const Message = lazy(() => import("@/app/components/Contact/Message"));
const Newsletter = lazy(() => import("@/app/components/Contact/Newsletter"));
const Contacts = lazy(() => import("@/app/components/Contact/Contacts"));

const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <NavBar />
        <div className="flex relative p-20 h-full w-full">
          <div className="flex flex-col">
            <div>
              <motion.div
                className="flex flex-row gap-x-[10px] items-center cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div>
                  <FaArrowLeft />
                </motion.div>
                <Link href="/">Go back</Link>
              </motion.div>
            </div>
            <div>
              <TypewriterEffect
                text="Here to help"
                className="text-5xl font-bold max-[900px]:text-6xl smooth-animation mt-2"
              />
            </div>
            <div className="flex flex-row gap-6 w-full max-[900px]:flex-col">
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
