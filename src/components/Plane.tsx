import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { flying } from "../../public";

const Plane = () => {
  return (
    <motion.div
      initial={{ x: "100%", y: "-100%" }}
      animate={{ x: -50, y: -50, scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      className="absolute w-32 h-32 top-20 right-0 rounded translate-x-1/2 translate-y-1/2"
    >
      <Image
        src={flying}
        alt="Bitmoji image of Kian Abdollahzadeh in a paper airplane flying onto the screen"
        className="w-32 h-32 hidden lg:block"
      />
    </motion.div>
  );
};

export default Plane;
