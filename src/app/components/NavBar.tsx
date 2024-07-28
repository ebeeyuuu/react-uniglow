"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data';
import NavModal from './NavModal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="flex justify-center items-center w-full">
      <nav className="w-full h-[100px] flex justify-between items-center px-8 py-4 bg-[#003366] shadow-lg">
        <Link href="/" className="text-xl font-semibold">Uniglow</Link>
        <div className="hidden md:flex flex-row gap-x-2 items-center">
          {navItems.map(({ href, label, icon: Icon, size }) => (
            <Link 
              key={href} 
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
              <div style={{ fontWeight: '550'}}>
                {label}
              </div>
              <Icon size={size} />
            </Link>
          ))}
          <Link 
            href="/explore" 
            className={`
              px-4 py-2 border-2 border-[#e07000] 
              hover:bg-[#e07000] hover:text-black smooth-animation font-semibold 
              ${activeLink === '/explore' ? 'bg-white text-black rounded-[10px]' : ''}
            `}
          >
            Explore
          </Link>
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