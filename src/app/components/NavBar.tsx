"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { navItems } from "@/data";
import NavModal from "./NavModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaVrCardboard,
  FaUserFriends,
  FaBook,
  FaGraduationCap,
  FaListUl,
  FaHeadset,
  FaUserGraduate,
  FaLaptop,
  FaChalkboardTeacher,
  FaGlobe,
  FaTimes,
  FaThList,
  FaHandshake,
  FaDonate,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdCorporateFare, MdCalendarMonth } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { SiGithubsponsors } from "react-icons/si";
import { HiBookOpen } from "react-icons/hi2";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const DropdownMenu = ({ open, items, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="absolute top-0 origin-top mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-black backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
        >
          <div className="py-1">
            {items.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center px-4 py-2 text-sm text-gray-700 scale-100 hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
              >
                <div className="mr-3 p-1 rounded-[10px]">
                  <Icon className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                </div>
                <p className="text-xs lg:text-sm text-white">{label}</p>
              </Link>
            ))}
          </div>
          <button
            onClick={() => onClose()}
            className="absolute bottom-2 right-2 p-1 rounded-full scale-100 hover:scale-105 smooth-animation"
            aria-label="Close menu"
          >
            <FaTimes size={20} className="text-gray-300" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExploreOpen(false);
        setProgramsOpen(false);
        setAboutOpen(false);
        setContactOpen(false);
        setDonateOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const aboutItems = [
    { href: "/pages/about", label: "Our Story", icon: FaBookOpen },
    {
      href: "/pages/about/mission-and-values",
      label: "Mission and Values",
      icon: FaHandshake,
    },
    { href: "/pages/about/team", label: "Team", icon: RiTeamFill },
    {
      href: "/pages/about/corporate-responsibility",
      label: "Corporate Responsibility",
      icon: MdCorporateFare,
    },
    {
      href: "/pages/about/achievements",
      label: "Achievements",
      icon: GrAchievement,
    },
  ];

  const contactUsItems = [
    { href: "/pages/contact", label: "Message Us", icon: FaBookOpen },
    {
      href: "/pages/contact/university-partnerships",
      label: "University Partnerships",
      icon: FaHandshake,
    },
    {
      href: "/pages/contact/career-counselors",
      label: "Career Counselors",
      icon: RiTeamFill,
    },
    {
      href: "/pages/contact/parents-and-guardians",
      label: "Parents & Guardians",
      icon: MdCorporateFare,
    },
    {
      href: "/pages/contact/technical-support",
      label: "Technical Support",
      icon: GrAchievement,
    },
  ];

  const exploreItems = [
    {
      href: "/explore/ai-personality-matching",
      label: "AI Uni Matcher",
      icon: FaRobot,
    },
    {
      href: "/explore/vr-campus-tours",
      label: "VR Campus Tours",
      icon: FaVrCardboard,
    },
    {
      href: "/explore/peer-mentor-connection",
      label: "Peer Mentor Connection",
      icon: FaUserFriends,
    },
    {
      href: "/explore/interactive-curriculum-explorer",
      label: "Interactive Curriculum Explorer",
      icon: FaBook,
    },
    {
      href: "/explore/global-scholarship-finder",
      label: "Global Scholarship Finder",
      icon: FaGraduationCap,
    },
  ];

  const donateItems = [
    {
      href: "/pages/donate/one-time-donation",
      label: "One-Time Donation",
      icon: FaDonate,
    },
    {
      href: "/pages/donate/monthly-donation",
      label: "Monthly Donation",
      icon: MdCalendarMonth,
    },
    {
      href: "/pages/donate/sponsor-a-student",
      label: "Sponsor a Student",
      icon: SiGithubsponsors,
    },
    {
      href: "/pages/donate/impact-stories",
      label: "Impact Stories",
      icon: HiBookOpen,
    },
    {
      href: "/pages/donate/where-your-money-goes",
      label: "Where Your Money Goes",
      icon: FaQuestionCircle,
    },
  ];

  const programItems = [
    {
      href: "/programs/undergraduate",
      label: "Undergraduate",
      icon: FaGraduationCap,
    },
    {
      href: "/programs/postgraduate",
      label: "Postgraduate",
      icon: FaUserGraduate,
    },
    {
      href: "/programs/online-degrees",
      label: "Online Degrees",
      icon: FaLaptop,
    },
    {
      href: "/programs/short-courses",
      label: "Short Courses",
      icon: FaChalkboardTeacher,
    },
    { href: "/programs/study-abroad", label: "Study Abroad", icon: FaGlobe },
  ];

  const handleMenuOpen = (
    menu: "explore" | "programs" | "about" | "contact" | "donate",
  ) => {
    if (menu === "explore") {
      setExploreOpen(true);
      setProgramsOpen(false);
      setAboutOpen(false);
      setContactOpen(false);
      setDonateOpen(false);
    } else if (menu === "programs") {
      setProgramsOpen(true);
      setExploreOpen(false);
      setAboutOpen(false);
      setContactOpen(false);
      setDonateOpen(false);
    } else if (menu === "about") {
      setAboutOpen(true);
      setProgramsOpen(false);
      setExploreOpen(false);
      setContactOpen(false);
      setDonateOpen(false);
    } else if (menu === "contact") {
      setContactOpen(true);
      setProgramsOpen(false);
      setExploreOpen(false);
      setAboutOpen(false);
      setDonateOpen(false);
    } else if (menu === "donate") {
      setDonateOpen(true);
      setProgramsOpen(false);
      setExploreOpen(false);
      setAboutOpen(false);
      setContactOpen(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <nav className="w-full py-8 px-7 flex justify-between items-center bg-black border-b-2 border-white/[0.1]">
        <Link href="/" className="text-sm lg:text-lg font-semibold">
          Uniglow
        </Link>
        <div className="hidden md:flex flex-row gap-x-1 items-center">
          {navItems.map(({ href, label, icon: Icon, size }) => (
            <div key={href} className="relative flex justify-center">
              {label === "Programs" ||
                label === "About Us" ||
                label === "Contact" ||
                label === "Donate" ? (
                <button
                  onClick={() =>
                    handleMenuOpen(
                      label === "Programs"
                        ? "programs"
                        : label === "About Us"
                          ? "about"
                          : label === "Contact"
                            ? "contact"
                            : "donate",
                    )
                  }
                  className={`
                    flex flex-row gap-x-3 items-center px-3 py-2 rounded-[10px] 
                    transition-all duration-300 ease-in-out text-xs lg:text-sm
                  `}
                >
                  <div style={{ fontWeight: "550" }}>{label}</div>
                  <Icon size={size} />
                </button>
              ) : (
                <Link
                  href={href}
                  className={`
                    flex flex-row gap-x-3 items-center px-3 py-2 rounded-[10px] 
                    transition-all duration-300 ease-in-out 
                  `}
                >
                  <div style={{ fontWeight: "550" }}>{label}</div>
                  <Icon size={size} />
                </Link>
              )}

              {label === "About Us" && (
                <DropdownMenu
                  open={aboutOpen}
                  items={aboutItems}
                  onClose={() => setAboutOpen(false)}
                />
              )}

              {label === "Contact" && (
                <DropdownMenu
                  open={contactOpen}
                  items={contactUsItems}
                  onClose={() => setContactOpen(false)}
                />
              )}

              {label === "Donate" && (
                <DropdownMenu
                  open={donateOpen}
                  items={donateItems}
                  onClose={() => setDonateOpen(false)}
                />
              )}

              {label === "Programs" && (
                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="absolute top-0 origin-top mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-black blackdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                    >
                      <div className="py-1 mr-2">
                        {programItems.map(({ href, label, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 scale-100 hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
                          >
                            <div className="mr-3 p-1 rounded-[10px]">
                              <Icon className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                            </div>
                            <p className="text-xs lg:text-sm text-white">
                              {label}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="py-1 border-t-[1px] border-zinc-600">
                        <Link
                          href="/programs"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 scale-100 hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
                        >
                          <div className="mr-3 p-1 rounded-[10px]">
                            <FaThList className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                          </div>
                          <p className="text-xs lg:text-sm text-white">
                            See all programs
                          </p>
                        </Link>
                      </div>
                      <button
                        onClick={() => setProgramsOpen(false)}
                        className="absolute bottom-2 right-2 p-1 rounded-full scale-100 hover:scale-105 smooth-animation"
                        aria-label="Close menu"
                      >
                        <FaTimes size={20} className="text-gray-300" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="relative">
            <button
              onClick={() => handleMenuOpen("explore")}
              className={`
                px-4 py-2 text-xs lg:text-sm 
                rounded-full smooth-animation font-semibold 
              `}
            >
              Explore
            </button>
            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute top-0 right-0 origin-top-right mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-black backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                >
                  <div className="py-1">
                    {exploreItems.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 scale-100 hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
                      >
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                        </div>
                        <p className="text-xs lg:text-base text-white">
                          {label}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="py-1 border-t-[1px] border-zinc-600">
                    <Link
                      href="/explore"
                      className="flex items-center px-4 py-2 text-sm text-white scale-100 hover:scale-105 smooth-animation"
                    >
                      <div className="mr-3 p-1 rounded-[10px]">
                        <FaListUl className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                      </div>
                      <p className="text-xs lg:text-base text-white">
                        See all features
                      </p>
                    </Link>
                    <Link
                      href="/contact-support"
                      className="flex items-center px-4 py-2 text-sm text-white scale-100 hover:scale-105 smooth-animation"
                    >
                      <div className="mr-3 p-1 rounded-[10px]">
                        <FaHeadset className="w-3 h-3 lg:w-6 lg:h-6 text-purple-400" />
                      </div>
                      <p className="text-xs lg:text-base text-white">
                        Contact support
                      </p>
                    </Link>
                  </div>
                  <button
                    onClick={() => setExploreOpen(false)}
                    className="absolute bottom-2 right-2 p-1 rounded-full scale-100 hover:scale-105 smooth-animation"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} className="text-gray-300" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              direction="left"
              size={25}
              duration={0.5}
            />
          </button>
          <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
