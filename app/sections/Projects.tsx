import Image from "next/image";
import React from "react";
import project1 from "../../public/assets/images/project1.png";
import chatapp from "../../public/assets/images/chatapp1.png";
import porfolio from "../../public/assets/images/portfolio.png";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="px-4 md:px-20 flex flex-col items-center w-full pb-32">
      <h2 className="text-center uppercase text-3xl">My Projects</h2>
      <div className="flex flex-wrap w-full items-center justify-evenly xl:justify-between gap-10 mt-10">
        <Link href="https://ai-generation-image-delta.vercel.app/" passHref target="_blank" className="flex flex-col gap-2 border border-gray-800 shadow-2xl p-4  ">
          <Image
            src={project1}
            alt="image-project"
            className="w-96 h-60 object-contain rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>AI - Generation Images</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
        <Link href="https://realtime-chatapp-219n.onrender.com" passHref target="_blank" className="flex flex-col gap-2 border border-gray-800 shadow-2xl p-4  ">
          <Image
            src={chatapp}
            alt="image-project"
            className="w-96 h-60 object-contain rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>Realtime Chat app</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
        <Link href="#"  className="flex flex-col gap-2 border  border-gray-800 shadow-2xl p-4  ">
          <Image
            src={porfolio}
            alt="image-project"
            className="w-96 h-60 object-contain rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>My Portfolio</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
