/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import { ChevronRight, Menu } from "lucide-react"; // Assuming this is your hamburger icon

export default function SideNavbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden block p-2"
        onClick={toggleMobileNav}
        aria-label="Toggle Navigation"
      >
        <Menu className="absolute left-4 top-6" />
      </button>
      <div className={`${isMobileNavVisible ? "block" : "hidden"} lg:block`}>
        <Nav />
      </div>
    </div>
  );
}
