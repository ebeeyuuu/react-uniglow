"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data';
import NavModal from './NavModal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaVrCardboard, FaUserFriends, FaBook, FaGraduationCap, FaListUl, FaHeadset, FaUserGraduate, FaLaptop, FaChalkboardTeacher, FaGlobe, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [exploreOpen, setExploreOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExploreOpen(false);
        setProgramsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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

  const exploreItems = [
    { href: '/explore/ai-personality-matching', label: 'AI Uni Matcher', icon: FaRobot },
    { href: '/explore/vr-campus-tours', label: 'VR Campus Tours', icon: FaVrCardboard },
    { href: '/explore/peer-mentor-connection', label: 'Peer Mentor Connection', icon: FaUserFriends },
    { href: '/explore/interactive-curriculum-explorer', label: 'Interactive Curriculum Explorer', icon: FaBook },
    { href: '/explore/global-scholarship-finder', label: 'Global Scholarship Finder', icon: FaGraduationCap },
  ];

  const programItems = [
    { href: '/programs/undergraduate', label: 'Undergraduate', icon: FaGraduationCap },
    { href: '/programs/postgraduate', label: 'Postgraduate', icon: FaUserGraduate },
    { href: '/programs/online-degrees', label: 'Online Degrees', icon: FaLaptop },
    { href: '/programs/short-courses', label: 'Short Courses', icon: FaChalkboardTeacher },
    { href: '/programs/study-abroad', label: 'Study Abroad', icon: FaGlobe },
  ];

  const handleMenuOpen = (menu: 'explore' | 'programs') => {
    if (menu === 'explore') {
      setExploreOpen(true);
      setProgramsOpen(false);
    } else {
      setProgramsOpen(true);
      setExploreOpen(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <nav className="w-full h-[100px] flex justify-between items-center px-8 py-4 bg-[#003366] shadow-lg">
        <Link href="/" className="text-xl font-semibold">Uniglow</Link>
        <div className="hidden md:flex flex-row gap-x-2 items-center">
          {navItems.map(({ href, label, icon: Icon, size }) => (
            <div key={href} className="relative">
              {label === 'Programs' ? (
                <button
                  onClick={() => handleMenuOpen('programs')}
                  className={`
                    flex flex-row gap-x-3 items-center px-3 py-2 rounded-[10px] 
                    transition-all duration-300 ease-in-out 
                    ${activeLink === href 
                      ? 'bg-white text-black' 
                      : 'gradient-hover'
                    }
                  `}
                >
                  <div style={{ fontWeight: '550'}}>{label}</div>
                  <Icon size={size} />
                </button>
              ) : (
                <Link 
                  href={href} 
                  className={`
                    flex flex-row gap-x-3 items-center px-3 py-2 rounded-[10px] 
                    transition-all duration-300 ease-in-out 
                    ${activeLink === href 
                      ? 'bg-white text-black' 
                      : 'gradient-hover'
                    }
                  `}
                >
                  <div style={{ fontWeight: '550'}}>{label}</div>
                  <Icon size={size} />
                </Link>
              )}
              {label === 'Programs' && (
                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="absolute z-10 right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        {programItems.map(({ href, label, icon: Icon }) => (
                          <Link key={href} href={href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <div className="mr-3 p-1 rounded-[10px]">
                              <Icon size={20} />
                            </div>
                            {label}
                          </Link>
                        ))}
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
          <div className="relative">
            <button 
              onClick={() => handleMenuOpen('explore')} 
              className={`
                px-4 py-2 border-2 border-[#e07000] 
                hover:bg-[#e07000] hover:text-black smooth-animation font-semibold 
                ${activeLink === '/explore' ? 'bg-white text-black rounded-[10px]' : ''}
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
                  className="absolute z-10 right-0 mt-2 w-72 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    {exploreItems.map(({ href, label, icon: Icon }) => (
                      <Link key={href} href={href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="mr-3 p-1 rounded-[10px]">
                          <Icon size={20} />
                        </div>
                        {label}
                      </Link>
                    ))}
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <Link href="/explore" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="mr-3 p-1 rounded-[10px]">
                        <FaListUl size={20} />
                      </div>
                      See all features
                    </Link>
                    <Link href="/contact-support" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="mr-3 p-1 rounded-[10px]">
                        <FaHeadset size={20} />
                      </div>
                      Contact support
                    </Link>
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
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
            <Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" size={25} duration={0.5} />
          </button>
          <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;