import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start items-start"
      >
        <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
          THINGS I HAVE BUILT AND WORKED ON SO FAR
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
    </section>
  );
};

export default Projects;
