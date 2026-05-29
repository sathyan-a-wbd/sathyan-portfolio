import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  memo,
} from "react";

import SkillCard from "../components/SkillCard";
import Headings from "./small_compo/Headings";

import { skills, tools } from "../data/skills";

function Skills() {
  const sectionRef = useRef(null);
  const toolRef = useRef(null);
  const cardGridRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [toolAnimate, setToolAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  const cardCategories = useMemo(
    () => [
      {
        title: "Frontend",
        sub: "Crafting responsive, interactive user interfaces.",
        data: skills.frontend,
      },

      {
        title: "Backend",
        sub: "Building robust server-side applications.",
        data: skills.backend,
      },

      {
        title: "UI & State",
        sub: "Efficient state management and seamless UI.",
        data: skills.stateManagement,
      },

      {
        title: "Database",
        sub: "Scalable storage solutions.",
        data: skills.database,
      },
    ],
    [],
  );

  /* ================= ALL SKILLS ================= */

  const allSkills = useMemo(
    () => [
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.stateManagement,
    ],
    [],
  );

  /* ================= OBSERVER ================= */

  useEffect(() => {
    const currentSection = sectionRef.current;
    const currentGrid = cardGridRef.current;
    const currentTool = toolRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === currentSection) {
            setAnimate(true);
          }

          if (entry.target === currentGrid) {
            setIsVisible(true);
          }

          if (entry.target === currentTool) {
            setToolAnimate(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
      },
    );

    if (currentSection) observer.observe(currentSection);
    if (currentGrid) observer.observe(currentGrid);
    if (currentTool) observer.observe(currentTool);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================= TOGGLE ================= */

  const toggleView = useCallback(() => {
    setViewAll((prev) => !prev);
  }, []);

  return (
    <section
      aria-labelledby="skills-heading"
      className="my-16 flex w-full flex-col items-center justify-center"
    >
      {/* ================= HEADING ================= */}

      <Headings value={"02"} title={"Technical Skills"} />

      {/* ================= SKILL CARDS ================= */}

      <div
        ref={cardGridRef}
        className="mb-10 grid w-[90%] gap-6 md:w-[80%] md:grid-cols-2"
      >
        {cardCategories.map((cat, index) => (
          <MemoSkillCard
            key={cat.title}
            index={index}
            isVisible={isVisible}
            heading={cat.title}
            subheading={cat.sub}
            skills={cat.data.map((s) => s.name)}
          />
        ))}
      </div>

      {/* ================= MAIN SKILLS ================= */}

      <div className="w-full">
        <div
          ref={sectionRef}
          className="relative mx-auto w-[90%] max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-6 py-10 shadow-[1px_5px_40px_#FFFFFF18] transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[1px_5px_30px_#23A9BD20] md:w-[70%] md:px-16"
          style={{
            maxHeight: viewAll ? "2000px" : "300px",
          }}
        >
          <div className="space-y-6">
            {allSkills.map((skill) => (
              <div key={skill.name}>
                {/* TOP */}

                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="h-[32px] w-[32px] object-contain md:h-[40px] md:w-[40px]"
                    />

                    <span className="dm-mono text-sm font-medium text-gray-300 md:text-base">
                      {skill.name}
                    </span>
                  </div>

                  <span className="dm-mono text-sm text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* PROGRESS */}

                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={`${skill.color} h-full rounded-full transition-all duration-[1800ms] ease-out will-change-transform`}
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TOOLS ================= */}

        <div
          className={`mx-auto mt-6 w-[90%] max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-8 py-8 shadow-[1px_5px_40px_rgba(255,255,255,0.08)] transition-all duration-500 md:w-[70%]

          ${viewAll ? "block" : "hidden"}
          `}
        >
          <div
            ref={toolRef}
            className="flex flex-col gap-6 md:flex-row md:items-center"
          >
            <h3 className="syne text-sm font-bold uppercase tracking-widest text-gray-300">
              Tools
            </h3>

            <div className="flex flex-wrap gap-8">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                  className={`flex items-center gap-3 rounded-xl transition-all duration-700

                  ${
                    toolAnimate
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }
                  `}
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    width={tool.w}
                    height={tool.h}
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />

                  <span className="dm-mono text-sm text-gray-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BUTTON ================= */}

        <div className="my-5 flex w-full items-center justify-center">
          <button
            aria-expanded={viewAll}
            aria-label={
              viewAll
                ? "Hide detailed skills"
                : "View detailed technical skills"
            }
            onClick={toggleView}
            className="dm-mono rounded-md border border-white/15 px-5 py-2 text-sm uppercase tracking-wide text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            {viewAll ? "View Less" : "View In Detail"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= MEMOIZED CARD ================= */

const MemoSkillCard = memo(SkillCard);

export default memo(Skills);
