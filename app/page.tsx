import Header from "@/app/sections/Header";
import React from "react";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div>
      <div id="section1">
        <Hero />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Experience />
      </div>
      <div id="section4">
        <Projects />
      </div>
      <div id="section5">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
