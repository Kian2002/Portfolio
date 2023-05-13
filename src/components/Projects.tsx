import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ProjectProps } from "@/constants/types";
import { projects } from "@/constants";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Tilt
      className="w-full rounded-2xl shadow-xl cursor-pointer bg-secondary p-5 sm:w-[360px]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.45}
      glarePosition="all"
      scale={1.05}
      transitionSpeed={2500}
      gyroscope={true}
    >
      <Link href={project.link} passHref target="_blank">
        <div className="relative w-full h-[230px]">
          <Image
            src={project.image}
            alt={project.title}
            height={100}
            width={100}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between mt-5">
          <h3 className="text-white font-black text-[30px]">{project.title}</h3>
          <p className="text-tertiary text-[14px]">{project.description}</p>
        </div>

        <div>
          {project.tags.map((tag, index) => (
            <span key={index} className="text-tertiary text-[14px]">
              {tag} {index !== project.tags.length - 1 && "/ "}
            </span>
          ))}
        </div>
      </Link>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start items-start"
      >
        <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
          THINGS I HAVE BUILT AND WORKED ON SO FAR
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
