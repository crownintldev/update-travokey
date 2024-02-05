/** @format */
"use client";

import { useState } from 'react';
import { Nav } from './ui/nav';
import { ChevronRight, Menu } from 'lucide-react'; // Assuming this is your hamburger icon

export default function SideNavbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div className="relative">
      {/* Hamburger Button (visible on screens smaller than 992px) */}
      <button 
        className="lg:hidden block p-2" 
        onClick={toggleMobileNav}
        aria-label="Toggle Navigation"
      >
        <Menu className='' />
      </button>
    
      {/* Nav Component */}
      {/* Hidden on screens smaller than 992px unless isMobileNavVisible is true */}
      <div className={`${isMobileNavVisible ? 'block' : 'hidden'} lg:block`}>
        <Nav />
      </div>
    </div>
  );
}
