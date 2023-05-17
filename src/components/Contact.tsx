import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { contact } from "../../public";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16 flex flex-col md:flex-row items-center gap-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start bg-secondary p-6 rounded-2xl w-full"
      >
        <div>
          <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
            GET IN TOUCH
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h2>
        </div>

        <form className="flex flex-col justify-start items-start mt-10 w-full gap-5">
          <div className="w-full">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-transparent border-b-2 border-white w-full focus:outline-none focus:border-primary py-2"
              placeholder="Enter your name..."
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border-b-2 border-white w-full focus:outline-none focus:border-primary py-2"
              placeholder="Enter your email address..."
            />
          </div>

          <div className="w-full">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-transparent border-b-2 border-white w-full focus:outline-none focus:border-primary py-2"
              rows={5}
              placeholder="Type your message here..."
            />
          </div>

          <button className="bg-white text-primary font-semibold py-2 px-4 rounded mt-4">
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Image src={contact} alt="contact" />
      </motion.div>
    </section>
  );
};

export default Contact;
