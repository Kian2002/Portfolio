import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { contact } from "../../public";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const key = process.env.NEXT_PUBLIC_KEY!;

    const email = {
      from_name: form.name,
      to_name: "Kian Abdollahzadeh",
      from_email: form.email,
      to_email: "canadakurdistan@gmail.com",
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, email, key)
      .then((res) => {
        alert("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Message failed to send " + err.text);
      })
      .finally(() => setLoading(false));
  };

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
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start mt-10 w-full gap-5"
          >
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
                required
                value={form.name}
                onChange={handleChange}
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
                required
                value={form.email}
                onChange={handleChange}
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
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-white text-primary font-semibold py-2 px-4 rounded mt-4"
              disabled={loading}
            >
              Send
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Image
          src={contact}
          alt="Bitmoji of Kian Abdollahzadeh waving goodbye"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
