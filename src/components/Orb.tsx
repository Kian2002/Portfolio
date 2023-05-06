import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { mobileHero, hero, starwars } from "../../public";

const Orb = () => {
  return (
    <>
      {/* Orb puller character */}
      <motion.div
        initial={{ x: "100%", y: "0%" }}
        animate={{
          x: ["100%", "50%", "100%"],
        }}
        transition={{
          duration: 3,
        }}
        className="hidden sm:block"
      >
        <Image
          src={starwars}
          alt="starwars"
          className="absolute top-0 left-0 right-0 bottom-0 h-72 w-72 sm:h-96 sm:w-96"
        />
      </motion.div>

      {/* Orb */}
      <motion.div
        initial={{ x: "-150%" }}
        animate={{
          x: 0,
          y: [0, 24, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
        }}
      >
        <div className="border-8 border-primary rounded-full h-72 w-72 sm:h-96 sm:w-96 m-auto relative">
          {/* blurred hover effect */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute top-0 left-0 right-0 bottom-0 border-8 border-primary rounded-full blur-lg"
          />

          <Image
            src={mobileHero}
            alt="bitmoji image of Kian"
            className="md:hidden h-full w-full object-scale-down"
          />

          <Image
            src={hero}
            alt="bitmoji image of Kian"
            className="hidden md:block h-full w-full object-scale-down"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Orb;
