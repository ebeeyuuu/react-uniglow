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
  FaUserGraduate,
  FaLaptop,
  FaChalkboardTeacher,
  FaGlobe,
  FaTimes,
  FaThList,
  FaHandshake,
  FaDonate,
  FaQuestionCircle,
  FaHeadset,
  FaListUl,
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
          className="absolute top-0 origin-top mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-gradient-to-b from-black via-65% via-black/50 to-purple-950/50 backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
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
                <p className="text-xs lg:text-base text-white">{label}</p>
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
      href: "/pages/about/missionandvalues",
      label: "Mission and Values",
      icon: FaHandshake,
    },
    { href: "/pages/about/team", label: "Team", icon: RiTeamFill },
    {
      href: "/pages/about/corporateresponsibility",
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
    <nav
      className={`fixed inset-0 top-0 right-0 h-[100vh] bg-black/50 backdrop-blur-xl flex flex-col justify-center items-center transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
        } ${visible ? "opacity-100" : "opacity-0"} z-50`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="b-10 font-semibold text-[25px] scale-100 px-5 py-3 hover:scale-110 transition-all duration-300 ease-in-out -mt-24"
      >
        Close
      </button>
      {navItems.map((item, index) => (
        <div key={index} className="relative flex justify-center items-center">
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
                    flex flex-row gap-x-3 items-center px-5 py-3 rounded-[10px] 
                    transition-all duration-300 ease-in-out bg-transparent hover:bg-white
                    hover:text-black
                    ${activeLink === item.href
                  ? "bg-white text-black"
                  : "gradient-hover"
                }
                  `}
            >
              {item.text}
            </button>
          ) : (
            <Link
              className="flex flex-row justify-center items-center gap-x-2 z-40"
              href={item.href}
            >
              {item.text}
            </Link>
          )}

          {item.text === "About Us" && (
            <AnimatePresence>
              <DropdownMenu
                open={aboutOpen}
                items={aboutItems}
                onClose={() => setAboutOpen(false)}
              />
            </AnimatePresence>
          )}

          {item.text === "Contact" && (
            <AnimatePresence>
              <DropdownMenu
                open={contactOpen}
                items={contactUsItems}
                onClose={() => setContactOpen(false)}
              />
            </AnimatePresence>
          )}

          {item.text === "Donate" && (
            <AnimatePresence>
              <DropdownMenu
                open={donateOpen}
                items={donateItems}
                onClose={() => setDonateOpen(false)}
              />
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
                  className="absolute top-0 origin-top mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-gradient-to-b from-black via-65% via-black/50 to-purple-950/50 backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
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
                        <p className="text-xs lg:text-base text-white">
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
                      <p className="text-xs lg:text-base text-white">
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
      <div className="relative z-40 flex justify-center items-center">
        <button
          onClick={() => handleMenuOpen("explore")}
          className="px-5 py-3 rounded-xl hover:bg-white bg-transparent hover:text-black transition-all duration-300 ease-in-out flex justify-center items-center flex-row z-40"
        >
          <p>Explore</p>
        </button>
        <AnimatePresence>
          {exploreOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute top-0 origin-top mt-14 w-72 rounded-md shadow-lg border border-white/[0.05] bg-gradient-to-b from-black via-65% via-black/50 to-purple-950/50 backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-7 px-3"
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
                    <p className="text-xs lg:text-base text-white">{label}</p>
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
    </nav>
  );
};

export default NavModal;
