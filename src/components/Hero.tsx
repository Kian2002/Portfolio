import React from "react";
import { motion } from "framer-motion";

import { Orb, ScrollNotifier } from "@/components";
import Plane from "./Plane";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto max-w-7xl overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-72 h-40 hero-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            {"Hi, I'm"}{" "}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 1.5,
              }}
              className="text-primary absolute ml-3"
            >
              Kian
            </motion.span>
          </h1>
          <p className="text-[#dfd9ff] font-medium sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            I develop Fullstack applications, mobile{" "}
            <br className="sm:block hidden" />
            apps, and dabble in some game development.
          </p>
        </div>
      </div>

      <Orb />
      <ScrollNotifier />
      <Plane />
    </section>
  );
};

export default Hero;
