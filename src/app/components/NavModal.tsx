"use client";

import { navItems } from "@/data";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

interface NavModalProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const NavModal: React.FC<NavModalProps> = ({ isOpen, setIsOpen }) => {
  const [visible, setVisible] = useState(isOpen);
  const [activeLink, setActiveLink] = useState("");
  const [exploreOpen, setExploreOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

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

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setVisible(false);
    }
  };

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

  const aboutItems = [
    { href: "/pages/about", label: "Our Story", icon: FaBookOpen },
    {
      href: "/about/mission-and-values",
      label: "Mission and Values",
      icon: FaHandshake,
    },
    { href: "/about/team", label: "Team", icon: RiTeamFill },
    {
      href: "/about/corporate-responsibility",
      label: "Corporate Responsibility",
      icon: MdCorporateFare,
    },
    { href: "/about/achievements", label: "Achievements", icon: GrAchievement },
  ];

  const contactUsItems = [
    { href: "/pages/contact", label: "Message Us", icon: FaBookOpen },
    {
      href: "/contact/university-partnerships",
      label: "University Partnerships",
      icon: FaHandshake,
    },
    {
      href: "/contact/career-counselors",
      label: "Career Counselors",
      icon: RiTeamFill,
    },
    {
      href: "/contact/parents-and-guardians",
      label: "Parents & Guardians",
      icon: MdCorporateFare,
    },
    {
      href: "/contact/technical-support",
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
      href: "/donate/one-time-donation",
      label: "One-Time Donation",
      icon: FaDonate,
    },
    {
      href: "/donate/monthly-donation",
      label: "Monthly Donation",
      icon: MdCalendarMonth,
    },
    {
      href: "/donate/sponsor-a-student",
      label: "Sponsor a Student",
      icon: SiGithubsponsors,
    },
    {
      href: "/donate/impact-stories",
      label: "Impact Stories",
      icon: HiBookOpen,
    },
    {
      href: "/donate/where-your-money-goes",
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
    <nav
      className={`fixed top-0 right-0 h-[100vh] bg-[#00478f] backdrop-blur-md pl-20 pr-4 pt-12 flex flex-col justify-start items-end gap-y-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
        } ${visible ? "opacity-100" : "opacity-0"} z-50`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="mb-10 font-semibold text-[25px]"
      >
        Close
      </button>
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          {item.text === "Programs" ||
            item.text === "About Us" ||
            item.text === "Contact" ||
            item.text === "Donate" ? (
            <button
              onClick={() =>
                handleMenuOpen(
                  item.text === "Programs"
                    ? "programs"
                    : item.text === "About Us"
                      ? "about"
                      : item.text === "Contact"
                        ? "contact"
                        : "donate",
                )
              }
              className={`
                    flex flex-row gap-x-3 items-center px-3 py-2 rounded-[10px] 
                    transition-all duration-300 ease-in-out 
                    ${activeLink === item.href
                  ? "bg-white text-black"
                  : "gradient-hover"
                }
                  `}
            >
              {item.text}
              <item.icon size={item.size} />
            </button>
          ) : (
            <Link
              className="flex flex-row justify-center items-center gap-x-2 z-40"
              href={item.href}
            >
              {item.text}
              <item.icon size={item.size} />
            </Link>
          )}

          {item.text === "About Us" && (
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                >
                  <div className="py-1">
                    {aboutItems.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon size={20} />
                        </div>
                        {label}
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setAboutOpen(false)}
                    className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} className="text-gray-600" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {item.text === "Contact" && (
            <AnimatePresence>
              {contactOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                >
                  <div className="py-1">
                    {contactUsItems.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon size={20} />
                        </div>
                        {label}
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setContactOpen(false)}
                    className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} className="text-gray-600" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {item.text === "Donate" && (
            <AnimatePresence>
              {donateOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                >
                  <div className="py-1">
                    {donateItems.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon size={20} />
                        </div>
                        {label}
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setDonateOpen(false)}
                    className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} className="text-gray-600" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {item.text === "Programs" && (
            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
                >
                  <div className="py-1">
                    {programItems.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon size={20} />
                        </div>
                        {label}
                      </a>
                    ))}
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <a
                      href="/programs"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="mr-3 p-1 rounded-[10px]">
                        <FaThList size={20} />
                      </div>
                      See all programs
                    </a>
                  </div>
                  <button
                    onClick={() => setProgramsOpen(false)}
                    className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} className="text-gray-600" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
      <div className="relative z-40">
        <button
          onClick={() => handleMenuOpen("explore")}
          className="px-4 py-3 border-2 border-[#ff7f00] z-40"
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
              className="absolute right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
            >
              <div className="py-1">
                {exploreItems.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="mr-3 p-1 rounded-[10px]">
                      <Icon size={20} />
                    </div>
                    {label}
                  </a>
                ))}
              </div>
              <div className="py-1 border-t border-gray-200">
                <a
                  href="/explore"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="mr-3 p-1 rounded-[10px]">
                    <FaListUl size={20} />
                  </div>
                  See all features
                </a>
                <a
                  href="/contact-support"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="mr-3 p-1 rounded-[10px]">
                    <FaHeadset size={20} />
                  </div>
                  Contact support
                </a>
              </div>
              <button
                onClick={() => setExploreOpen(false)}
                className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200"
                aria-label="Close menu"
              >
                <FaTimes size={20} className="text-gray-600" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavModal;
