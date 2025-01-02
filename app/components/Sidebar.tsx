"use client";
import React, { useEffect, useState } from "react";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { BookOpen } from "lucide-react";
import { FolderRoot } from "lucide-react";
const Sidebar = () => {
  const [active, setActive] = useState("section1");
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
    }
  };
  useEffect(() => {
    // Function to check if section is in view
    const handleScrollEvent = () => {
      const sections = [
        "section1",
        "section2",
        "section3",
        "section4",
        "section5",
      ];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <nav className="flex lg:flex-col w-full justify-evenly  gap-5 py-4  border border-white/15 lg:rounded-full bg-gray-600">
      {/* Smooth scroll links */}
      <button
        className={`nav-item ${active === "section1" ? "text-blue-500" : ""}`}
        onClick={() => handleScroll("section1")}
      >
        <House className="size-4" />
      </button>
      <button
        className={`nav-item ${active === "section2" ? "text-blue-500" : ""}`}
        onClick={() => handleScroll("section2")}
      >
        <User className="size-4" />
      </button>
      <button
        className={`nav-item ${active === "section3" ? "text-blue-500" : ""}`}
        onClick={() => handleScroll("section3")}
      >
        <BookOpen className="size-4" />
      </button>
      <button
        className={`nav-item ${active === "section4" ? "text-blue-500" : ""}`}
        onClick={() => handleScroll("section4")}
      >
        <FolderRoot className="size-4" />
      </button>
      <button
        className={`nav-item ${active === "section5" ? "text-blue-500" : ""}`}
        onClick={() => handleScroll("section5")}
      >
        <Mail className="size-4" />
      </button>
    </nav>
  );
};

export default Sidebar;
