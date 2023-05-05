import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-84px)] mx-auto max-w-7xl overflow-hidden px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-gray-400 text-xl mb-2">INTRODUCTION</p>
        <h2 className="sm:text-7xl text-5xl mb-2 font-black">About.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-12 text-secondary text-[17px] max-w-3xl leading-[30px]"
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
    </section>
  );
};

export default About;
