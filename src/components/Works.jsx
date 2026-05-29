import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from "react";

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Headings from "./small_compo/Headings";

import projects from "../data/projects";

function Works() {
  const boxRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const imageSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      lazyLoad: "ondemand",
      swipeToSlide: true,
      pauseOnHover: false,
    }),
    [],
  );

  /* ================= OBSERVER ================= */

  useEffect(() => {
    const currentRef = boxRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  /* ================= DESKTOP SLIDER ================= */

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < projects.length - 3 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  return (
    <section
      ref={boxRef}
      className="relative flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-visible py-20"
    >
      {/* Heading */}
      <Headings value={"03"} title={"My works"} />

      {/* ================= DESKTOP ================= */}

      <div className="relative mt-14 hidden w-full items-center justify-center xl:flex">
        {/* LEFT BUTTON */}

        <button
          aria-label="Previous projects"
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
        <div className="w-[85%] overflow-x-hidden overflow-y-visible py-4">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / 3)))`,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                inView={inView}
                imageSettings={imageSettings}
              />
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}

        <button
          aria-label="Next projects"
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
              key={project.title}
              project={project}
              index={index}
              inView={inView}
              imageSettings={imageSettings}
            />
          ),
        )}
      </div>

      {/* ================= SHOW MORE BUTTON ================= */}

      <div className="mt-10 flex justify-center xl:hidden">
        <button
          onClick={() => setShowAllMobile(!showAllMobile)}
          className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
        >
          {showAllMobile ? "Show Less" : "Show More"}

          <MdKeyboardDoubleArrowDown size={18} />
        </button>
      </div>
    </section>
  );
}

/* ================= PROJECT CARD ================= */
const ProjectCard = memo(function ProjectCard({
  project,
  index,
  inView,
  imageSettings,
}) {
  const [expanded, setExpanded] = useState(false);

  const shouldShowReadMore = project.description.length > 140;

  return (
    <div
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
      className={`group relative min-w-[31%] overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur-md will-change-transform transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-500/10

      ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      {/* IMAGE SLIDER */}

      <div className="relative overflow-hidden">
        <Slider {...imageSettings}>
          {project.image.map((img, i) => (
            <div
              key={i}
              className="aspect-video w-full overflow-hidden bg-black"
            >
              <img
                src={img}
                alt={`${project.title} preview ${i + 1}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-100" />

        <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
          Featured
        </div>
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6">
        {/* TITLE + DESCRIPTION */}

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {project.title}
          </h2>

          <div className="space-y-2">
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded
                  ? "max-h-40 overflow-y-auto custom-scroll pr-1"
                  : "max-h-[72px]"
              }`}
            >
              <p className="text-sm leading-relaxed text-white/65">
                {project.description}
              </p>
            </div>

            {shouldShowReadMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                {expanded ? "Show Less ↑" : "Read More →"}
              </button>
            )}
          </div>
        </div>

        {/* TECH STACK */}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-cyan-400/10 bg-cyan-500/5 px-3 py-1 text-[11px] font-medium text-cyan-300 transition-all hover:bg-cyan-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Live demo of ${project.title}`}
            className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-400"
          >
            Live Demo
            <TbWorld size={17} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub repository of ${project.title}`}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
          >
            GitHub
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      {/* TOP BORDER */}

      <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
});

export default Works;
