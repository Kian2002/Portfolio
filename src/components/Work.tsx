import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <p className="text-tertiary text-lg mb-2">WHAT I HAVE DONE SO FAR</p>
        <h2 className="sm:text-5xl text-5xl mb-2 font-black text-white">
          Work Experience.
        </h2>
      </motion.div>
    </section>
  );
};

export default Work;
