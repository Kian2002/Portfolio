import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

import { niches } from "@/constants";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[calc(100vh-84px)] mx-auto max-w-7xl overflow-hidden px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-tertiary text-xl mb-2">INTRODUCTION</p>
        <h2 className="sm:text-7xl text-5xl mb-2 font-black text-white">
          About.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-12 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        {`I am a highly motivated software developer with a 4.19 GPA on the Dean's
        Honour Roll, with a strong combination of technical skills and
        leadership abilities. I have a strong educational background in
        information technology and a solid foundation of technical skills in
        various programming languages, frameworks, and tools. I am a skilled
        communicator and problem solver and able to work effectively on
        cross-functional teams. I am always eager to learn and stay current with
        industry developments, and I am excited to bring my passion for software
        development and my strong work ethic to an internship opportunity where
        I can continue to grow and develop my skills.`}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-10">
        {niches.map((niche, index) => (
          <Tilt key={niche.title} className="xs:w-[250px] w-full rounded-3xl">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                duration: index * 0.5,
                bounce: 0.5,
                ease: "easeInOut",
              }}
              className="w-full bg-white p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-[#3b000b] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <Image
                  src={niche.icon}
                  alt="web-development"
                  className="w-16 h-16 object-contain invert"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                  {niche.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
