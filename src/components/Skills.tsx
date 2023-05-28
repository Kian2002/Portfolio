import React from "react";
import { motion } from "framer-motion";

import { skills } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
          MY TOOLBOX
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills.
        </h2>
      </motion.div>

      <div className="flex flex-wrap mt-20 gap-10 justify-center items-center">
        {skills.map((skill) => (
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            key={skill.title}
            className="bg-black rounded px-12 py-6 flex flex-col justify-center items-center border-b-2 border-primary"
          >
            <Image
              src={skill.icon}
              alt={skill.title}
              className="invert w-36 h-24"
            />
            <p className="text-white font-bold text-lg text-center">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
