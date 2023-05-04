import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { mobileHero, hero, flying, starwars } from "../../public";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto max-w-7xl overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-72 h-40 hero-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            {"Hi, I'm"} <span className="text-primary">Kian</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            I develop Fullstack applications, mobile{" "}
            <br className="sm:block hidden" />
            apps, and dabble in some game development.
          </p>
        </div>
      </div>

      {/* pulling orb */}
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
          className="absolute top-0 left-0 right-0 bottom-0 z-0 h-72 w-72 sm:h-96 sm:w-96"
        />
      </motion.div>

      {/* flying orb */}
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
            className="absolute top-0 left-0 right-0 bottom-0 z-0 border-8 border-primary rounded-full blur-lg"
          />

          <Image
            src={mobileHero}
            alt="bitmoji image of Kian"
            className="md:hidden"
          />

          <Image
            src={hero}
            alt="bitmoji image of Kian"
            className="hidden md:block h-full w-full object-scale-down"
          />
        </div>
      </motion.div>

      {/* scroll notifier */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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

      {/* plane */}
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        animate={{ x: -50, y: -50, scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        className="absolute z-50 w-32 h-32 top-20 right-0 rounded translate-x-1/2 translate-y-1/2"
      >
        <Image
          src={flying}
          alt="flying"
          className="w-32 h-32 hidden lg:block"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
