import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants";
import { menu, menuOpen } from "../../public";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${poppins.className} flex justify-between p-6 w-full items-center fixed top-0 z-20 bg-transparent backdrop-blur-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="text-xl text-primary">{"<portfolio>"}</h1>
        </Link>

        <div className="sm:flex gap-10 hidden">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`${
                active === link.title ? "text-white" : "text-gray-400"
              } hover:text-white cursor-pointer font-medium text-lg`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
