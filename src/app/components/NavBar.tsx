"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { navItems } from '@/data';
import NavModal from './NavModal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center w-full">
      <nav className="w-full h-[100px] flex justify-between items-center px-8 py-4 bg-[#020202] shadow-lg border-b-2 border-white">
        <Link href="/" className="text-xl font-semibold">Uniglow</Link>
        <div className="hidden md:flex flex-row gap-x-6 items-center">
          {navItems.map(({ href, label, icon: Icon, size }) => (
            <Link key={href} href={href} className="flex flex-row gap-x-3">
              <div style={{ fontWeight: '550'}}>
                {label}
              </div>
              <Icon size={size} />
            </Link>
          ))}
          <Link href="/explore" className="px-4 py-2 border-2 border-white">
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