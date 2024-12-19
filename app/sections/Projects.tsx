import Image from "next/image";
import React from "react";
import project from "../../public/assets/images/project1.png";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="px-4 md:px-20 flex flex-col items-center w-full pb-32">
      <h2 className="text-center uppercase text-3xl">My Projects</h2>
      <div className="flex flex-wrap w-full items-center justify-evenly xl:justify-between gap-10 mt-10">
        <Link href="#" className="flex flex-col gap-2  ">
          <Image
            src={project}
            alt="image-project"
            className="w-96 h-60 object-cover rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>Reactjs Portfolio</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
        <Link href="#" className="flex flex-col gap-2  ">
          <Image
            src={project}
            alt="image-project"
            className="w-96 h-60 object-cover rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>Reactjs Portfolio</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
        <Link href="#" className="flex flex-col gap-2  ">
          <Image
            src={project}
            alt="image-project"
            className="w-96 h-60 object-cover rounded-t-xl hover:scale-95 duration-500 transition-all"
          />

          <div className="flex flex-col gap-2">
            <p>Reactjs Portfolio</p>
            <span>Project 1 Description</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
