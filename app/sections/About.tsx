"use client";
import React from "react";
import { techStack } from "../constant/data";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="px-4 md:px-20  ">
      <h2 className="my-20 text-center text-4xl leading-7">About Me</h2>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col  gap-4 flex-1 ">
          <h4 className="text-2xl leading-5 font-light uppercase tracking-[10px]">
            Biography
          </h4>
          <p className="mt-4 text-justify text-white/60">
            I am a full stack web developer with a passion for creating
            interactive and reponsive web applications. I have experience
            working Javascript, React, Nextjs, Nodejs, Express, Mongodb,
            Sequelize, HTML, CSS, Git and more. I am a quick learner and I
            always looking to expand my knowledge and skill set. I am a
            teamplayer and excited to work with others to create amazing
            applications.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 flex-1">
          <h4 className="text-2xl leading-5 font-light uppercase tracking-[10px]">
            My skills
          </h4>
          <div className="flex flex-wrap items-center justify-evenly md:justify-center gap-4 ">
            {techStack.map((tech, index) => (
              <motion.div
                initial={{
                  y: 200,
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{
                  duration: 1,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col items-center  gap-2 px-6 py-1 bg-zinc-800 rounded-lg"
              >
                <Image
                  src={tech.img}
                  alt="logo"
                  className="w-24 h-24 object-contain hover:scale-75 transition-all duration-500 py-2"
                />
                <span className="">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
