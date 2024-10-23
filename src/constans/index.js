import {
  pyth,
  backend,
  creator,
  web,
  itproger,
  shortener,
  django,
  telegram,
} from "../assets";


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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: pyth,

  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const experiences = [
  {
    title: "Work on Freelance",
    company_name: "Freelance",
    icon: itproger,
    iconBg: "#00302b",
    date: "August 2024 - Present",
    points: [
      "Website parsing",
      "Development of telegram bots (aiogram lib.)",
      "Adaptive layout of the site according to the model",
      "Website development on such frameworks like Django and React.js",
      "Testing and QA",
    ],
  },
];


const projects = [
  {
    name: "Photographer's Website",
    description:
      "A visually stunning website designed to showcase a photographer's portfolio, allowing users to view a variety of works and connect with the artist.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: shortener,
    source_code_link: "https://github.com/YuriiTahlin/photographer_website  ",
  },
  {
    name: "Task Organizer",
    description:
      "A comprehensive task organizer that enables users to create, edit, and manage their tasks efficiently.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: django, // Змініть на відповідне зображення
    source_code_link: "https://github.com/YuriiTahlin/my_notepad.git",
  },
  {
    name: "YouTube Video Downloader Bot",
    description:
      "This is a Telegram bot that allows users to download videos from YouTube by simply sending a video link.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram",
        color: "green-text-gradient",
      },
      {
        name: "aiogram",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    source_code_link: "https://github.com/YuriiTahlin/youtube_video_downloader",
  },
];

export { services, experiences, projects };