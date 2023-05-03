import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { mobileHero } from "../../public";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 hero-gradient" />
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

      <div className="border-8 border-primary rounded-full h-72 w-72 m-auto relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 border-8 border-primary rounded-full blur-lg"></div>
        <Image src={mobileHero} alt="bitmoji image of Kian" />
      </div>

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
    </section>
  );
};

export default Hero;
