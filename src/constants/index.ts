import { web, backend, mobile, software, earls } from "../../public";

export const navLinks = [
  {
    id: "about",
    title: "About",
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