"use client";

import React, { useState } from "react";
import Categories from "./Categories";
import logoHeader from "../../../assets/home/logo-header.png";
import Image from "next/image";
import MobilMenu from "../header/MobilMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import x from "../../../assets/home/x.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="flex flex-row justify-between items-center z-40 p-6 bg-white mb-20"
      style={{
        position: isMenuOpen ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isMenuOpen ? "white" : "transparent",
        boxShadow: isMenuOpen ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        zIndex: isMenuOpen ? 50 : "auto",
        width: "100%",
      }}
    >
      <nav className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-x-4 items-center relative">
          <Image src={logoHeader} alt="logo" width={100} height={100} />
          <div className="border-l h-7 rounded ml-4" />
        </div>
        <div className="flex-1 flex justify-end hidden md:flex">
          <Categories />
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className={isMenuOpen ? "hidden" : "block"}
          >
            <GiHamburgerMenu fontSize={30} />
          </button>
          <button
            onClick={handleMenuClose}
            className={isMenuOpen ? "block" : "hidden"}
          >
            <Image src={x} alt="cancel" width={30} height={30} />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <MobilMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
