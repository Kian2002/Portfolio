import {
  web,
  backend,
  mobile,
  software,
  earls,
  html,
  css,
  js,
  ts,
  react,
  next,
  node,
  java,
  cpp,
  lua,
  express,
  ejs,
  bootstrap,
  tailwind,
  mongo,
  postgres,
  firebase,
  postman,
  git,
  github,
} from "../../public";
import { IProject } from "./types";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const niches = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: software,
  },
];

export const skills = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "TypeScript",
    icon: ts,
  },
  {
    title: "React",
    icon: react,
  },
  {
    title: "Next.js",
    icon: next,
  },
  {
    title: "Node.js",
    icon: node,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "C++",
    icon: cpp,
  },
  {
    title: "Lua",
    icon: lua,
  },
  {
    title: "Express.js",
    icon: express,
  },
  {
    title: "EJS",
    icon: ejs,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "MongoDB",
    icon: mongo,
  },
  {
    title: "PostgreSQL",
    icon: postgres,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "Postman",
    icon: postman,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "GitHub",
    icon: github,
  },
];

export const experiences = [
  {
    title: "Sushi Cook",
    company_name: "Earls Kitchen + Bar",
    icon: earls,
    iconBg: "#E6DEDD",
    date: "January 2020 - March 2020",
    points: [
      "Learned to prepare various types of sushi dishes according to established guidelines on quality, portion size, presentation, and food safety.",
      "Maintained a clean work environment to prevent food contamination.",
      "Sterilized all utensils, instruments, and equipment used in sushi preparation before every use.",
      "Communicated with wait staff to ensure that special requests and food allergy considerations were met",
      "Provided support to other employees during peak hours to ensure the store runs efficiently.",
      "Followed instructions from supervisors and traded shifts with others as needed.",
    ],
  },
  {
    title: "Kitchen Staff",
    company_name: "Earls Kitchen + Bar",
    icon: earls,
    iconBg: "#E6DEDD",
    date: "October 2019 - January 2020",
    points: [
      "Organized and maintained a clean kitchen, washed, and sorted soiled dishes, and prepped foods as needed. Kept dish area free of clutter and organized.",
      "Adhered to specific guidelines and processes for setting up dish stations.",
      "Maintained clean/dry floors throughout the shift.",
      "Maintained trash cans throughout the shift and removed full trashcans and boxes at the end of each shift. ",
    ],
  },
];

export const projects: IProject[] = [
  {
    title: "E-Commerce",
    description: "This is an e-commerce app built using React, React Router, Framer Motion, and React-responsive-carousel for the front end, and Node, Express, Cloudinary, and axios for the backend. The app uses Stripe for a test/example checkout and Rawg API for the data.",
    image: "https://camo.githubusercontent.com/39bffa5e4727272709902837f0e7b017bf2eb0f40bd02be53dfd5d6cdb47a80e/68747470733a2f2f692e696d6775722e636f6d2f344d55776763552e706e67",
    link: "https://e-commerce-kian2002.vercel.app/",
    github: "https://github.com/Kian2002/E-commerce",
    tags: ["TypeScript", "React", "Node", "Express", "MongoDB", "Cloudinary", "Stripe", "Rawg API"],
  },
  {
    title: "CRM-System",
    description: "This project is a CRM system built using Next.js, TypeScript, and React with Supabase for the database, Prisma for ORM, Tailwind for styling, NextAuth for authentication, and Bcrypt for password hashing.",
    image: "https://i.imgur.com/gMpkatW.png",
    link: "https://crm-system-eight.vercel.app",
    github: "https://github.com/Kian2002/CRM-System",
    tags: ["Next.js", "TypeScript", "React", "Supabase", "Prisma", "Tailwind", "NextAuth", "Bcrypt"],
  },
  {
    title: "FIFA World Cup",
    description: "This project is a FIFA World Cup simulation using C++. This simulation incorporated the rules and regulations of the World Cup, including penalty kicks, tiebreakers, and the determination of third place. Real data from teams were used to construct a realistic representation of football matches.",
    image: "https://i.imgur.com/xFWxgRs.png",
    link: "https://github.com/Kian2002/Tournament-Simulation-cpp",
    github: "https://github.com/Kian2002/Tournament-Simulation-cpp",
    tags: ["C++", "OOP"],
  },
  {
    title: "Job App",
    description: "This app is a mobile application built using React Native framework that allows users to search for job opportunities and apply for them directly from their smartphones. With a clean and intuitive interface, users can easily search for job listings using keywords and location. [Additional Features Implemented Soon]",
    image: "https://camo.githubusercontent.com/0a253cb59b20f0351b9830f337d34f0d1a01f244178343a03180026db5e6fa13/68747470733a2f2f692e696d6775722e636f6d2f736334614143792e706e67",
    link: "https://github.com/Kian2002/Job-App-React-Native",
    github: "https://github.com/Kian2002/Job-App-React-Native",
    tags: ["ReactNative", "TypeScript", "Expo", "NativeWind"],
  },
  {
    title: "Dall-e Clone",
    description: "This project involved recreating the popular Dall-E image generation application using the OpenAI API. The frontend of the application was built using React, Typescript, and Tailwind, while the backend was constructed using Node, Express, Mongoose, OpenAI, and Cloudinary.",
    image: "https://i.imgur.com/nph1l68.png",
    link: "https://dall-e-clone-rho.vercel.app/",
    github: "https://github.com/Kian2002/DALL-E-Clone",
    tags: ["React", "TypeScript", "Node", "Express", "MongoDB", "Cloudinary", "OpenAI", "Tailwind"],
  },
]

// project template
// {
//   title: "",
//   description: "",
//   image: "",
//   link: "",
//   github: "",
//   tags: [],
// },
