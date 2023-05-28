import React, { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/constants";
import { Poppins } from "next/font/google";
import { Menu } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {
  const [active, setActive] = useState("");

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
          <h1 className="font-black text-3xl text-primary">{"<Kian>"}</h1>
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

        {/* Mobile nav */}
        <Menu active={active} setActive={setActive} />
      </div>
    </nav>
  );
};

export default Navbar;
