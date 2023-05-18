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
          alt="Link to Kian Abdollahzadeh's LinkedIn profile"
          width={25}
          height={25}
          className="invert"
        />
      </Link>
      <Link href="https://github.com/Kian2002/" target="_blank">
        <Image
          src={github}
          alt="Link to Kian Abdollahzadeh's GitHub profile"
          width={25}
          height={25}
          className="invert"
        />
      </Link>
      <a href="/resume.pdf" download>
        <Image
          src={resume}
          alt="Link to Kian Abdollahzadeh's resume"
          width={18}
          height={18}
          className="invert"
        />
      </a>
    </div>
  );
};

export default Socials;
