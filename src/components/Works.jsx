import React, { useRef, useState, useEffect } from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Headings from "./small_compo/Headings";

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

function Works() {
  const projects = [
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
      size: "w-[300px]",
    },

    {
      title: "✅ Todo App",
      description:
        "Simple productivity-focused todo application with add, edit, and delete task functionality.",
      image: [TodoEmpty, Todo, TodoHave],
      tech: ["React", "LocalStorage"],
      demo: "https://my-todo-a.netlify.app/",
      github: "https://github.com/sathyan-a-wbd/my-todo-app",
      size: "w-[300px]",
    },
  ];

  const imageSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const boxRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Desktop slider
  const nextSlide = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <section
      ref={boxRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Heading */}
      <Headings value={"03"} title={"My works"} />

      {/* ================= DESKTOP SLIDER ================= */}
      <div className="relative mt-14 hidden w-full items-center justify-center xl:flex">
        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-6 z-20 flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300

          ${
            currentIndex === 0
              ? "cursor-not-allowed border-white/10 bg-white/5 text-white/20"
              : "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:scale-110 hover:bg-cyan-400 hover:text-black"
          }
          `}
        >
          <MdKeyboardDoubleArrowLeft size={18} />
        </button>

        {/* SLIDER */}
        <div className="w-[85%] overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 33.5}%)`,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                inView={inView}
                imageSettings={imageSettings}
              />
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= projects.length - 3}
          className={`absolute right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300

          ${
            currentIndex >= projects.length - 3
              ? "cursor-not-allowed border-white/10 bg-white/5 text-white/20"
              : "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:scale-110 hover:bg-cyan-400 hover:text-black"
          }
          `}
        >
          <MdKeyboardDoubleArrowRight size={18} />
        </button>
      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="mx-auto mt-10 grid w-[90%] gap-8 md:grid-cols-2 xl:hidden">
        {(showAllMobile ? projects : projects.slice(0, 2)).map(
          (project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              inView={inView}
              imageSettings={imageSettings}
            />
          ),
        )}
      </div>

      {/* MOBILE SHOW MORE BUTTON */}
      <div className="mt-10 flex justify-center xl:hidden">
        <button
          onClick={() => setShowAllMobile(!showAllMobile)}
          className="rounded-full border border-cyan-400/20 gap-2 flex items-center bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
        >
          {showAllMobile ? "Show Less" : "Show More"}{" "}
          <MdKeyboardDoubleArrowDown />
        </button>
      </div>
    </section>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, index, inView, imageSettings }) {
  return (
    <div
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
      className={`group relative min-w-[31%] overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]

      ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      {/* Image Slider */}
      <div className="relative overflow-hidden">
        <Slider {...imageSettings}>
          {project.image.map((img, i) => (
            <div
              key={i}
              className="flex h-[240px] items-center justify-center overflow-hidden bg-black"
            >
              <img
                src={img}
                alt={`${project.title}-${i}`}
                loading="lazy"
                className={`h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  project.size || "w-full"
                }`}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-100" />

        {/* Featured */}
        <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {project.title}
          </h2>

          <p className="text-sm leading-relaxed text-white/65">
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-md border border-cyan-400/10 bg-cyan-500/5 px-3 py-1 text-[11px] font-medium text-cyan-300 transition-all hover:bg-cyan-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-400"
          >
            Live Demo
            <TbWorld size={17} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
          >
            GitHub
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      {/* Top Hover Border */}
      <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

export default Works;
