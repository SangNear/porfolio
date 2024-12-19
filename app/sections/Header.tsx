"use client";
import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{
        y: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="flex z-50 justify-center items-center px-1 right-0 fixed w-full"
    >
      <nav className="flex flex-col gap-1 p-1 border border-white/15 rounded-lg bg-gray-600">
        {/* Smooth scroll links */}
        <button className="nav-item" onClick={() => handleScroll("section1")}>
          Home
        </button>
        <button className="nav-item" onClick={() => handleScroll("section2")}>
        Home
        </button>
        <button className="nav-item" onClick={() => handleScroll("section3")}>
        Home
        </button>
        <button className="nav-item" onClick={() => handleScroll("section3")}>
        Home
        </button>
        <button className="nav-item" onClick={() => handleScroll("section4")}>
        Home
        </button>
      </nav>
    </motion.div>
  );
};

export default Header;
