// components/Navbar.tsx
"use client";

import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { navbarData } from "../lib/data"; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container md:container lg:container absolute flex items-center justify-between mt-24 px-5">
        <div className="lg:container flex items-center">
          <Image
            src={navbarData.logo}
            alt={navbarData.logoAlt}
            width={50}
            height={50}
          />
        </div>
        <Bars3Icon
          className="h-8 w-8 text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Render MenuDrawer */}
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default Navbar;
