import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { ProjectProps } from "@/constants/types";
import { projects } from "@/constants";
import { Notification } from "@/components";

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const card = cardRef.current;

    if (img && card) {
      card.addEventListener("mouseenter", () => {
        img.classList.add("scale-105");
      });

      card.addEventListener("mouseleave", () => {
        img.classList.remove("scale-105");
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: index < 3 ? index * 0.5 : index * 0.2,
        duration: 0.75,
        ease: "easeOut",
      }}
      className="w-full h-full"
    >
      <Link href={project.link} passHref target="_blank">
        <Tilt
          className="w-full h-full rounded-2xl shadow-xl cursor-pointer bg-secondary p-5 flex flex-col gap-3"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.45}
          glarePosition="all"
          transitionSpeed={2500}
          gyroscope={true}
        >
          <div className="relative w-full h-[230px] rounded-2xl">
            <Image
              ref={imgRef}
              src={project.image}
              alt={project.title}
              fill
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-white font-black text-[30px]">
              {project.title}
            </h3>
            <p className="text-tertiary text-[14px]">{project.description}</p>
          </div>

          <div className={`min-h-[100px] grid grid-rows-4 grid-cols-2`}>
            {project.tags.map((tag, index) => (
              <span key={index} className="text-tertiary text-[14px]">
                #{tag}{" "}
              </span>
            ))}
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  const [loadedProjects, setLoadedProjects] = useState(projects.slice(0, 3));
  const [notifications, setNotifications] = useState([{ message: "" }]);

  useEffect(() => {
    const clearNotifications = setTimeout(() => {
      setNotifications([]);
    }, 3000);

    return () => clearTimeout(clearNotifications);
  }, [notifications]);

  const loadMoreProjects = () => {
    setLoadedProjects(projects.slice(0, loadedProjects.length + 3));

    if (loadedProjects.length === projects.length) {
      setNotifications([
        ...notifications,
        {
          message: "No more projects to show. I will add more soon!",
        },
      ]);
    }
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center md:max-w-none max-w-[400px] mx-auto mt-10">
        {loadedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-secondary p-4 rounded" onClick={loadMoreProjects}>
          Show More
        </button>
      </div>

      {loadedProjects.length == projects.length &&
        notifications.map((notification, index) => (
          <Notification
            key={index}
            message={notification.message}
            index={index}
          />
        ))}
    </section>
  );
};

export default Projects;
