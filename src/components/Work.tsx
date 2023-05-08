import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constants";
import Image from "next/image";

const Work = () => {
  return (
    <section
      id="work"
      className="relative w-full min-h-screen py-20 mx-auto max-w-7xl overflow-hidden px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: [0.05, 0.1, 0.2, 1], y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b000b", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.company_name}
              </h4>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
