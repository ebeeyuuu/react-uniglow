"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from 'react-icons/fa';
import { useUser } from '@/context/userContext'; // Import the useUser hook

import placeholderpfp from "@/images/7.png";
import AI from "../Icons/AI";
import Explore from "../Icons/Explore";
import Mentorship from "../Icons/Mentorship";
import Program from "../Icons/Program";
import VR from "../Icons/VR";
import Exit from "../Icons/Exit";
import Settings from '../Icons/Settings';

const menuVariants = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { username } = useUser(); // Use the username from context

  const navItems = [
    { href: "/explore/ai-personality-matching", label: "AI Matching", icon: AI },
    { href: "/explore/vr-campus-tours", label: "VR Tours", icon: VR },
    { href: "/explore/peer-mentor-connection", label: "Mentorship", icon: Mentorship },
    { href: "/explore/interactive-curriculum-explorer", label: "Explorer", icon: Explore },
    { href: "/explore/global-scholarship-finder", label: "Programs", icon: Program },
    { href: "/pages/settings", label: "Settings", icon: Settings },
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
    <div className="flex items-center justify-center h-screen"> {/* Adjusted for clarity */}
      <nav className="bg-[#002347bc] text-white p-4 flex flex-col w-[145px] h-[95%] justify-between items-center hover:w-[240px] transition-all duration-500 max-[700px]:duration-0 max-[700px]:transition-none ease-in-out rounded-[20px] max-[700px]:flex-row max-[700px]:w-[95%] max-[700px]:h-[100px] max-[700px]:ml-0 max-[700px]:mt-[30px] max-[700px]:hover:w-[95%] absolute left-[20px] max-[700px]:top-[20px] max-[700px]:left-[14px]" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className="flex flex-col items-center mt-[30px] gap-[25px] max-[700px]:flex-row max-[700px]:mt-0 max-[700px]:gap-[15px] max-[700px]:h-full max-[700px]:justify-center max-[530px]:hidden">
          <Image src={placeholderpfp} alt="" className="rounded-full w-[50px] h-[50px] max-[700px]:my-auto max-[700px]:ml-[30px] max-[700px]:w-[40px] max-[700px]:h-[40px]" />
          <p className="max-[700px]:text-sm">{username}</p>
          {navItems.map(({ href, label, icon: Icon }) => (
            <div key={href}>
              {isHover ? (
                <Link href={href} className="flex flex-row items-center justify-center gap-x-[15px] h-[50px] text-ellipsis overflow-hidden whitespace-nowrap">
                  <Icon className="max-[700px]:w-[25px] max-[700px]:h-[25px]" />
                  <p className="opacity-100 transition-opacity duration-500 delay-500 max-[700px]:hidden">{label}</p>
                </Link>
              ) : (
                <Link href={href} className="flex flex-row items-center justify-center gap-x-[15px] h-[50px] text-ellipsis overflow-hidden whitespace-nowrap">
                  <Icon className="max-[700px]:w-[25px] max-[700px]:h-[25px]" />
                  <p className="hidden opacity-0 duration-300 delay-800">{label}</p>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center mb-[30px] max-[700px]:my-auto max-[700px]:mr-[40px] max-[530px]:ml-[30px] flex-row gap-x-[15px]">
          <Image src={placeholderpfp} alt="" className="rounded-full w-[50px] h-[50px] max-[700px]:my-auto max-[700px]:w-[40px] max-[700px]:h-[40px] hidden max-[530px]:flex" />
          <Link href="/">
            <Exit className="max-[700px]:w-[25px] max-[700px]:h-[25px]" />
          </Link>
        </div>
        <div className="hidden max-[530px]:flex max-[600px]:items-center max-[600px]:justify-between">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" className="max-[700px]:mr-[30px]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" size={25} duration={0.8} />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={menuVariants}
                className="absolute top-0 right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#002347bc] flex flex-col text-black px-[60px] py-[30px] max-[700px]:mt-[100px]"
              >
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href} className="flex items-center gap-x-[20px] my-4 text-lg hover:text-orange-500">
                    <Icon />
                    <div>{label}</div>
                  </Link>
                ))}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} className="max-[700px]:w-[25px] max-[700px]:h-[25px] text-gray-600" />
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
