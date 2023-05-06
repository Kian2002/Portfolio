import React from "react";
import { motion } from "framer-motion";

const ScrollNotifier = () => {
  return (
    <div className="w-full flex justify-center items-center mt-5 lg:mt-20">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-gray-400 mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollNotifier;
