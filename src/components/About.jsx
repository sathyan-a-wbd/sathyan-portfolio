import React, { useState, useRef, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Headings from "./small_compo/Headings";
import education from "../data/educations";
function About() {
  // About section animation
  const aboutRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);

  // Education cards animation
  const educationRef = useRef(null);
  const [educationInView, setEducationInView] = useState(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutInView(true);
          aboutObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    const educationObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEducationInView(true);
          educationObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);

    if (educationRef.current) educationObserver.observe(educationRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);

      if (educationRef.current)
        educationObserver.unobserve(educationRef.current);
    };
  }, []);

  return (
    <section className="w-full flex justify-center overflow-hidden py-16">
      <div className="w-[90%] md:w-[85%] max-w-7xl">
        {/* Heading */}
        <Headings value={"01"} title={"About"} cSize={"40px"} />

        {/* About Content */}
        <div
          ref={aboutRef}
          className={`mt-6 transition-all duration-1000 ease-out ${
            aboutInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-justify leading-8 tracking-wide text-[15px] sm:text-base lora indent-8">
            Hi, I’m <span className="text-white font-semibold">Sathyan</span>, a
            passionate Front-End Developer focused on crafting clean,
            responsive, and user-friendly web experiences.
            <br />
            <br />
            I specialize in React.js and JavaScript, building applications that
            are both visually appealing and highly functional. I enjoy turning
            ideas into interactive digital products — from brainstorming
            concepts to polishing the smallest UI details.
            <br />
            <br />
            My development philosophy is simple:
            <span className="text-[#A5BBCB] font-medium">
              {" "}
              keep it fast, keep it simple, and make it beautiful.
            </span>
          </p>
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 syne mb-8">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((item, i) => (
              <div
                key={i}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#23A9BD]/50 hover:-translate-y-1 transition-all duration-700 ${
                  educationInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-14 opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 180}ms`,
                }}
              >
                <h3 className="text-lg sm:text-xl text-white font-semibold syne leading-snug">
                  {item.hold}
                </h3>

                <p className="text-sm text-gray-400 mt-2 leading-relaxed dm-mono">
                  {item.university}
                </p>

                <div className="flex items-center gap-2 mt-4 text-sm text-[#23A9BD]">
                  <FiCalendar size={16} />
                  <span className="dm-mono">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
