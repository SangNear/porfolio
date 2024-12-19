import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footter = () => {
  return (
    <div className="w-full bg-slate-800  ">
      <div className="flex flex-col items-center gap-5 py-10">
        <h2 className="text-2xl font-bold">Sang Nguyen</h2>
        <div className="flex items-center gap-5">
          <span className="text-sm text-gray-400 font-medium">About</span>
          <span className="text-sm text-gray-400 font-medium">Projects</span>
          <span className="text-sm text-gray-400 font-medium">Experiences</span>
        </div>
        <div className="flex items-center gap-5">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p className="text-gray-400">© Crypticalcoder. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footter;
