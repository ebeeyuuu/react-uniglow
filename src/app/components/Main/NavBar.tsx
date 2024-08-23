"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from 'react-icons/fa';
import { useUser } from '@/context/userContext'; // Import the useUser hook
import { useRouter } from 'next/navigation'

import placeholderpfp from "@/images/7.png";
import AI from "../Icons/AI";
import Explore from "../Icons/Explore";
import Mentorship from "../Icons/Mentorship";
import Program from "../Icons/Program";
import VR from "../Icons/VR";
import Exit from "../Icons/Exit";
import Home from "../Icons/Home";

const textVariants = {
  hidden: { x: 120 },
  visible: { x: 45, transition: { duration: 0.2 } },
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { username } = useUser(); // Use the username from context
  const router = useRouter();

  const navItems = [
    { href: "/pages/main", label: "Home", icon: Home },
    { href: "/pages/main/ai-matching", label: "AI Matching", icon: AI },
    { href: "/pages/main/vr-campus-tours", label: "VR Tours", icon: VR },
    { href: "/pages/main/peer-mentor-connection", label: "Mentorship", icon: Mentorship },
    { href: "/pages/main/interactive-curriculum-explorer", label: "Explorer", icon: Explore },
    { href: "/pages/main/global-scholarship-finder", label: "Programs", icon: Program },
  ];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <nav
        className={`bg-[#001c5c]/70 text-white p-4 flex flex-col h-[calc(100vh-70px)] justify-between items-center rounded-[20px] left-[20px] max-[1000px]:flex-row max-[1000px]:w-[calc(100vw-45px)] max-[1000px]:h-[100px] max-[1000px]:ml-0  absolute max-[1000px]:top-[40px] max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 opacity-100 transition-colors duration-500 ease-in-out`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex flex-col items-center mt-[30px] gap-[25px] max-[1000px]:flex-row max-[1000px]:mt-0 max-[1000px]:gap-[15px] max-[1000px]:h-full max-[1000px]:justify-center max-[1000px]:hidden p-3">
          <Image
            src={placeholderpfp}
            alt=""
            className={`rounded-full max-[1000px]:my-auto max-[1000px]:ml-[30px] max-[1000px]:w-[40px] max-[1000px]:h-[40px] cursor-pointer smooth-animation w-[50px] h-[50px]`}
            onClick={() => {router.push('/pages/settings')}}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={`max-[1000px]:text-sm mb-2 max-[1000px]:mb-0`}>{username === "" ? "Guest" : username}</p>
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={`flex items-center h-[50px] text-ellipsis overflow-hidden whitespace-nowrap smooth-animation`}>
              <motion.div className="flex items-center justify-center relative"
                initial={{ x: 0 }}
                animate={isHover ? { x: -50 } : { x: 0, transition: { duration: 0.8 } }}
                transition={{ type: "spring", stiffness: 200, damping: 40 }}
              >
                <Icon className={`max-[1000px]:w-[25px] max-[1000px]:h-[25px] transition-all duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 ${isHover ? "opacity-0" : ""}`} />
                <motion.p
                  initial="hidden"
                  animate={isHover ? "visible" : "hidden"}
                  variants={textVariants}
                  className={`${isHover ? "opacity-100" : ""} max-[1000px]:hidden ml-2 font-medium text-base hover:bg-white hover:text-black px-3 py-2 rounded-[10px] transition-all duration-500 ease-in-out`}
                >
                  {label}
                </motion.p>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex items-center mb-[30px] max-[1000px]:my-auto max-[1000px]:mr-[40px] max-[1000px]:ml-[30px] flex-row gap-x-[15px]">
          <Image
            src={placeholderpfp}
            alt=""
            className={`rounded-full w-[50px] h-[50px] max-[1000px]:my-auto cursor-pointer hidden max-[1000px]:flex smooth-animation`}
            onClick={() => {router.push('/pages/settings')}}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Link href="/">
            <Exit className="max-[1000px]:w-[25px] max-[1000px]:h-[25px]" />
          </Link>
        </div>
        <div className="hidden max-[1000px]:flex max-[600px]:items-center max-[600px]:justify-between">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" className="max-[1000px]:mr-[30px]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" size={25} duration={0.8} />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, x: 30 }}
                className="absolute top-0 right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#002347bc] flex flex-col text-black px-[60px] py-[30px] max-[1000px]:mt-[100px] z-50"
              >
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href} className="flex items-center gap-x-[20px] my-4 text-lg hover:text-orange-500 smooth-animation w-full">
                    <Icon className=""/>
                    <div>{label}</div>
                  </Link>
                ))}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} className="max-[1000px]:w-[25px] max-[1000px]:h-[25px] text-gray-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
