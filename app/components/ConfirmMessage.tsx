import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const ConfirmMessage = () => {
  return (
    <motion.div
      className="w-full "
      initial={{
        
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-5 items-center ">
        <CircleCheck className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
        <h4 className="text-center">
          Thanks you for sending me a contact. I will reply you as soon as i can
        </h4>
      </div>
    </motion.div>
  );
};

export default ConfirmMessage;
