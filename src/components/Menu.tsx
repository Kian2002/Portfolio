import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { navLinks } from "@/constants";
import { menu, menuOpen } from "../../public";

const containerVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface MenuProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ active, setActive }: MenuProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={toggleMenu ? "open" : "closed"}
      className="sm:hidden"
    >
      <Image
        src={toggleMenu ? menuOpen : menu}
        alt="menu"
        className="w-7 h-7 cursor-pointer object-contain invert"
        onClick={() => setToggleMenu(!toggleMenu)}
      />

      {toggleMenu && (
        <motion.ul
          variants={containerVariants}
          initial="closed"
          className="absolute top-20 right-0 menu-gradient p-6 mx-4 my-2 min-w-[140px] rounded-xl bg-opacity-80 flex flex-col items-center justify-center"
        >
          {navLinks.map((link) => (
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate={toggleMenu ? "open" : "closed"}
              key={link.id}
            >
              <Link
                href={`#${link.id}`}
                className={`${
                  active === link.title ? "text-secondary" : "text-white"
                } cursor-pointer font-black text-lg`}
                onClick={() => {
                  setActive(link.title);
                  setToggleMenu(!toggleMenu);
                }}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Menu;
