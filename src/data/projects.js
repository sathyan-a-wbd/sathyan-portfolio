// Images
import Weather from "../assets/ProjectScrennshots/weather.png";
import WeatherCold from "../assets/ProjectScrennshots/weather-cold.png";
import WeatherNewyork from "../assets/ProjectScrennshots/newyork.png";

import NotesAdd from "../assets/ProjectScrennshots/Notes Add.png";
import NotesDis from "../assets/ProjectScrennshots/Notes dis.png";
import NotesSrch from "../assets/ProjectScrennshots/Notes Search.png";

import Todo from "../assets/ProjectScrennshots/todo-add.png";
import TodoEmpty from "../assets/ProjectScrennshots/todo-empty.png";
import TodoHave from "../assets/ProjectScrennshots/todo-have.png";

import PortfolioHero from "../assets/ProjectScrennshots/PortfolioHero.png";
import PortfolioContact from "../assets/ProjectScrennshots/PortfolioSkills.png";
import PortfolioSkills from "../assets/ProjectScrennshots/PortfolioContact.png";

import Food from "../assets/ProjectScrennshots/Food.JPG";
import FoodRecipeCatagory from "../assets/ProjectScrennshots/FoodCategory.JPG";
import SeparateFood from "../assets/ProjectScrennshots/Separate.JPG";

// Job Portal App
import JobistHome from "../assets/ProjectScrennshots/JobistHome.png";
import SavedJobs from "../assets/ProjectScrennshots/SavedJobs.png";
import MyApplications from "../assets/ProjectScrennshots/MyApplications.png";
import EmployerDashboard from "../assets/ProjectScrennshots/EmployerDashboard.png";
import EmployerApplicants from "../assets/ProjectScrennshots/EmployerApplicants.png";
const projects = [
  {
    title: "💼 Job Portal Application",
    description:
      "Developed a full-featured Job Portal Application using the MERN stack that connects job seekers and recruiters through a modern, responsive, and user-friendly platform. Implemented secure authentication, role-based access, job posting and application systems, profile and resume management, saved jobs functionality, and AI-powered interview preparation features with seamless REST API integration.",
    image: [
      JobistHome,
      SavedJobs,
      MyApplications,
      EmployerDashboard,
      EmployerApplicants,
    ],
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "REST APIs",
    ],
    demo: "https://jobist.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/job-portal-fullstack",
  },

  {
    title: "🍔 Food Recipe Finder",
    description:
      "Built a dynamic Food Recipe Finder application using Next.js that allows users to search and filter recipes by category through an interactive navbar dropdown.",
    image: [Food, FoodRecipeCatagory, SeparateFood],
    tech: ["Next.js", "TheMealDBAPI"],
    demo: "https://recipe-pies.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/Recipe-Finder/",
  },

  {
    title: "📝 Notes App",
    description:
      "ReactJS notes application with localStorage support, custom note colors, labels, search functionality, and responsive UI.",
    image: [NotesAdd, NotesDis, NotesSrch],
    tech: ["React", "LocalStorage"],
    demo: "https://takeshortnoty.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/Notes-App",
  },

  {
    title: "💻 Portfolio Website",
    description:
      "Modern animated portfolio website built using ReactJS and TailwindCSS with responsive layouts and smooth UI interactions.",
    image: [PortfolioHero, PortfolioSkills, PortfolioContact],
    tech: ["React", "TailwindCSS"],
    demo: "https://sathyandevportfolio.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/sathyan-portfolio",
  },

  {
    title: "🌦 Weather App",
    description:
      "Dynamic weather app using OpenWeather API with live weather details, humidity, wind speed, and city-based search.",
    image: [Weather, WeatherCold, WeatherNewyork],
    tech: ["React", "Reducer Hook", "API"],
    demo: "https://weathercheckerinanycity.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/Weather-App",
  },

  {
    title: "✅ Todo App",
    description:
      "Simple productivity-focused todo application with add, edit, and delete task functionality.",
    image: [TodoEmpty, Todo, TodoHave],
    tech: ["React", "LocalStorage"],
    demo: "https://my-todo-a.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/my-todo-app",
  },
];
export default projects;
