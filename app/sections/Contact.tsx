"use client";
import { MailIcon, PhoneCallIcon, SendIcon } from "lucide-react";
import { BsMessenger } from "react-icons/bs";
import { motion } from "framer-motion";
import ContactMessage from "../components/ContactMessage";
import ConfirmMessage from "../components/ConfirmMessage";
const Contact = () => {
  return (
    <div className="pb-32 px-4 md:px-20 w-full flex flex-col items-center gap-16">
      <h2 className="text-center uppercase text-3xl">Contact</h2>
      <div className="flex flex-col md:flex-row justify-between w-full gap-10">
        <div className="flex flex-col gap-10 w-full lg:px-20 ">
          <h4 className="text-lg leading-2 text-center font-light uppercase tracking-[5px]">
            Lets Connect
          </h4>
          <motion.div
            initial={{
              y: -200,
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
            className="flex flex-col gap-2 items-center border border-gray-800 shadow-2xl py-6 px-4 rounded-2xl "
          >
            <MailIcon />
            <span className="font-bold text-gray-200">Email</span>
            <span className="text-gray-400">nguyenlamsang2004@gmail.com</span>
          </motion.div>
          <motion.div
            initial={{
              y: -200,
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
            className="flex flex-col gap-2 items-center border border-gray-800 shadow-2xl py-6 px-4 rounded-2xl "
          >
            <PhoneCallIcon />
            <span className="font-bold text-gray-200">Phone</span>
            <span className="text-gray-400">0817467859</span>
          </motion.div>
          <motion.div
            initial={{
              y: -200,
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
            className="flex flex-col gap-2 items-center border border-gray-800 shadow-2xl py-6 px-4 rounded-2xl "
          >
            <BsMessenger />
            <span className="font-bold text-gray-200">Messenger</span>
            <span className="text-gray-400">
              facebook.com/nguyen.sang.56829446
            </span>
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 w-full lg:px-20">
          <h4 className="text-lg leading-2 text-center  font-light uppercase tracking-[5px]">
            Send me a message
          </h4>
          <ContactMessage />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
