import React from "react";
import Link from "next/link";
import Image from "next/image";

import { linkedin, github, resume } from "../../public";

const Socials = () => {
  return (
    <div className="flex flex-row sm:mt-10 mt-3 gap-5">
      <Link href="https://www.linkedin.com/in/kianabd/" target="_blank">
        <Image
          src={linkedin}
          alt="linkedin"
          width={25}
          height={25}
          className="invert"
        />
      </Link>
      <Link href="https://github.com/Kian2002/" target="_blank">
        <Image
          src={github}
          alt="github"
          width={25}
          height={25}
          className="invert"
        />
      </Link>
      <a href="/resume.pdf" download>
        <Image
          src={resume}
          alt="resume"
          width={18}
          height={18}
          className="invert"
        />
      </a>
    </div>
  );
};

export default Socials;
