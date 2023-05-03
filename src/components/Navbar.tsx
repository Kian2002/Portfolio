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
    <nav className={`${poppins.className} flex justify-between items-center`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="font-black text-3xl text-primary">{"<portfolio>"}</h1>
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

        <div className="sm:hidden">
          <Image
            src={toggleMenu ? menuOpen : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer object-contain invert"
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          {toggleMenu && (
            <div className="absolute top-20 right-0 menu-gradient p-6 mx-4 my-2 min-w-[140px] rounded-xl bg-opacity-80 flex flex-col items-center justify-center">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-primary" : "text-white"
                    } cursor-pointer font-medium text-lg`}
                    onClick={() => {
                      setActive(link.title);
                      setToggleMenu(!toggleMenu);
                    }}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
