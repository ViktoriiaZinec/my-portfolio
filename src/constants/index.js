import {
  css,
  figma,
  git,
  github2,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
} from "../assets/img/tech";
import {
  canvas,
  chocolate,
  phonebook,
  tweets,
  webstudio,
} from "../assets/img/projects";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

export const navIcons = [
  {
    id: BsGithub,
    link: "https://github.com/ViktoriiaZinec",
    icon: BsGithub,
  },
  {
    id: BsLinkedin,
    link: "https://www.linkedin.com/in/viktoriia-zaitseva/",
    icon: BsLinkedin,
  },
];

export const experience = [
  {
    id: "html",
    title: "HTML5",
    icon: html,
  },
  {
    id: "css",
    title: "CSS",
    icon: css,
  },
  {
    id: "js",
    title: "JavaScript",
    icon: javascript,
  },
  {
    id: "figma",
    title: "Figma",
    icon: figma,
  },
  {
    id: "react",
    title: "React",
    icon: reactjs,
  },
  {
    id: "redux",
    title: "Redux",
    icon: redux,
  },
  {
    id: "node",
    title: "Node.js",
    icon: nodejs,
  },
  {
    id: "mongo",
    title: "Mongo DB",
    icon: mongodb,
  },
  {
    id: "Tailwind",
    title: "Tailwind",
    icon: tailwind,
  },
  {
    id: "github",
    title: "Github",
    icon: github2,
  },
  {
    id: "git",
    title: "Git",
    icon: git,
  },
];

export const projects = [
  {
    name: "WebStudio",
    description:
      "My first project with responsive design with a modal window, image gallery and svg icons. It consists of 3 pages - Studio, Portfolio, Contacts. ",
    tags: [
      {
        name: "html",
        color: "text-[#2cc7fa] text-shadow",
      },
      {
        name: "css",
        color: "text-[#fefe47] text-shadow",
      },
      {
        name: "js",
        color: "text-[#ff57bc] text-shadow",
      },
    ],
    image: webstudio,
    link: "https://github.com/ViktoriiaZinec/goit-markup-hw-07",
  },
  {
    name: "Simple chocolate",
    description:
      "Team project. Website for chocolate lovers - chocolate shop.As a developer, I made the responsive markup with CSS styles for the Advantages section.",
    tags: [
      {
        name: "html",
        color: "text-[#2cc7fa] text-shadow",
      },
      {
        name: "css",
        color: "text-[#fefe47] text-shadow",
      },
      {
        name: "js",
        color: "text-[#ff57bc] text-shadow",
      },
    ],
    image: chocolate,
    link: "https://github.com/olegvoskovets/project-html-css-53-bootcamp",
  },
  {
    name: "Phonebook",
    description:
      "Simple application for storing phone numbers. It includes registration, login, and logout functionalities. You can add, delete, and sort phone numbers by name.",
    tags: [
      {
        name: "html",
        color: "text-[#2cc7fa] text-shadow",
      },
      {
        name: "css",
        color: "text-[#fefe47] text-shadow",
      },
      {
        name: "js",
        color: "text-[#ff57bc] text-shadow",
      },
      {
        name: "react",
        color: "text-[#ce58f9] text-shadow",
      },
      {
        name: "redux",
        color: "text-[#2cc7fa] text-shadow",
      },
    ],
    image: phonebook,
    link: "https://github.com/ViktoriiaZinec/goit-react-hw-08-phonebook",
  },
  {
    name: "Tweets",
    description:
      "Tweets are implemented using the development server Vite.js, which provides a highly efficient and fast development environment. ",
    tags: [
      {
        name: "html",
        color: "text-[#2cc7fa] text-shadow",
      },
      {
        name: "css",
        color: "text-[#fefe47] text-shadow",
      },
      {
        name: "js",
        color: "text-[#ff57bc] text-shadow",
      },
      {
        name: "react",
        color: "text-[#ce58f9] text-shadow",
      },
    ],
    image: tweets,
    link: "https://github.com/ViktoriiaZinec/test-tweets",
  },
  {
    name: "Canvas",
    description:
      "Simple graphic editor.  It allows you to draw circles and squares. You can choose the size of the shapes and their color - either from a predefined palette or custom.",
    tags: [
      {
        name: "html",
        color: "text-[#2cc7fa] text-shadow",
      },
      {
        name: "css",
        color: "text-[#fefe47] text-shadow",
      },
      {
        name: "js",
        color: "text-[#ff57bc] text-shadow",
      },
    ],
    image: canvas,
    link: "https://github.com/ViktoriiaZinec/canva",
  },
];
