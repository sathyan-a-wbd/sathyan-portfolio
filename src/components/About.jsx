import React, { useState, useRef, useEffect } from "react";

import { FiCalendar } from "react-icons/fi";
import Headings from "./small_compo/Headings";
// #211F20
//text //#A5BBCB
//#9CAFBF
function About() {
  const education = [
    {
      hold: "Bachelor of Computer Applications",
      university: "TMG College of Arts and Science - University of Madras",
      date: "2022 - 2025",
    },
    {
      hold: "Higher Secondary Education (HSC)",
      university: "GHSS-Pazhampettai",
      date: "2020 - 2022",
    },
    {
      hold: "Secondary School Leaving Certificate",
      university: "GHSS-Pazhampettai",
      date: "2019 - 2020",
    },
  ];
  const boxRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    if (boxRef.current) observer.observe(boxRef.current);
    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);
  return (
    <div className="flex  flex-col w-full my-5 items-center justify-center overflow-hidden ">
      <div ref={boxRef} className="w-[90%] md:w-[80%]">
        <Headings value={"01"} title={"About"} cSize={"40px"} />
        <p className=" lora text-justify indent-[3rem] mt-3 font-medium tracking-wide text-gray-400">
          Hi, I’m Sathyan, a passionate Front-End Developer with a knack for
          crafting clean, responsive, and user-friendly web experiences. I
          specialize in React.js, and JavaScript, building applications that are
          both visually appealing and highly functional.
          <br /> <br />I love turning ideas into interactive digital products —
          from brainstorming concepts to polishing the smallest UI details. My
          development philosophy is simple: keep it fast, keep it simple, and
          make it beautiful.
        </p>
      </div>
      <section
        ref={boxRef}
        className="education rgba(223, 223, 223, 0.3) overflow-hidden shadow-lg p-5 rounded-xl ring-white/20 ring-1 md:ring-0 w-[90%] my-5 md:w-[80%]"
      >
        <h2 className="text-2xl font-bold syne text-gray-400 mt-5 mb-5">
          {" "}
          Education :
        </h2>
        <div
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 w-[100%] justify-between items-center "}`}
        >
          {education.map((stats, i) => (
            <div
              key={i}
              className={`bg-[rgba(255,255,255,0.1)] flex flex-col gap-1 w-full md:w-auto  hover:-translate-y-1 transition-all duration-800 ease-in-out ${inView ? "translate-y-0 opacity-100" : "translate-y-30 opacity-0"} rounded-md shadow-[2px_0px_30px_3px_rgba(255,255,255,0.001)] p-4 ring-1 ring-white/20 hover:ring-[#23A9BD] px-6 mb-2`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h2 className="syne text-[20px] text-gray-300">{stats.hold}</h2>
              <h4 className="text-[#7a8570] dm-mono text-sm">
                {stats.university}
              </h4>
              <span>{stats.clg || ""}</span>
              <p className="flex gap-1 dm-mono text-xs items-center text-[#23A9BD]">
                <FiCalendar />
                {stats.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
