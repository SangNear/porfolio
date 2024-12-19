"use client";
import Image from "next/image";
import React from "react";
import memojiImage from "../../public/assets/images/memoji-computer.png";
import { Download, FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, My name is Sang", "Nice to meet you"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="py-32 lg:py-48 animate-fade overflow-y-hidden "
    >
      <div className="max-lg:hidden size-[620px] hero-ring"></div>
      <div className="max-lg:hidden size-[820px] hero-ring"></div>
      <div className="max-lg:hidden size-[1020px] hero-ring"></div>
      <div className="max-lg:hidden size-[1220px] hero-ring"></div>
      <div className="container flex flex-col items-center justify-center">
        <motion.div
          initial={{
            y: -200,
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
          className="flex flex-col items-center"
        >
          <Image src={memojiImage} className="size-[100px]" alt="memoji" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full "></div>
            <div className="text-sm font-medium">Available for new jobs</div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col items-center justify-center lg:w-[50%] "
        >
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
            {text}
          </h1>
          
        </motion.div>
        <div className="flex items-center gap-2 my-4 ">
          <div className="p-2 bg-gray-400 rounded-full hover:scale-75 transition-all duration-500 cursor-pointer">
            <FacebookIcon className="w-4 h-4 text-white" />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:scale-75 transition-all duration-500 cursor-pointer">
            <Instagram className="w-4 h-4 text-white" />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:scale-75 transition-all duration-500 cursor-pointer">
            <Linkedin className="w-4 h-4 text-white" />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:scale-75 transition-all duration-500 cursor-pointer">
            <Twitter className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
          <motion.button
            initial={{
              x: -200,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="inline-flex items-center gap-2 border border-white/15 rounded-2xl px-6 py-4 "
          >
            <span>Download my CV </span>
            <Download className="size-4" />
          </motion.button>
          <motion.button
            initial={{
              x: 200,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex justify-center items-center bg-white py-4 px-6 rounded-2xl"
          >
            👋
            <span className="text-black text-md font-semibold ml-4">
              Let-s Connect
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
