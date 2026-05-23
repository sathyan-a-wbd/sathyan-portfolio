import React, { useEffect, useState, useRef } from "react";
import SkillCard from "../components/SkillCard";
import Headings from "./small_compo/Headings";

function Skills() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const cardGridRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [toolAnimate, setToolAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (cardGridRef.current) observer.observe(cardGridRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToolAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef1.current) observer.observe(sectionRef1.current);
    return () => observer.disconnect();
  }, []);
  const [viewAll, setViewAll] = useState(false);
  // Data from your resume [cite: 6, 14, 16, 17]
  const skills = {
    frontend: [
      {
        name: "HTML5",
        color: "bg-orange-500",
        img: "https://img.icons8.com/fluency/50/html-5.png",
        level: 95,
      },
      {
        name: "CSS3",
        color: "bg-blue-500",
        img: "https://img.icons8.com/color/50/css3.png",
        level: 88,
      },
      {
        name: "JavaScript (ES6+)",
        color: "bg-yellow-400",
        img: "https://img.icons8.com/color/50/javascript.png",
        level: 90,
      },
      {
        name: "React.js",
        color: "bg-cyan-500",
        img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
        level: 80,
      },
      {
        name: "REST API Integration",
        color: "bg-[#CDB4DB]",
        img: "https://img.icons8.com/officel/80/api-settings.png",
        level: 75,
      },
    ],
    styling: [
      {
        name: "Tailwind CSS",
        color: "bg-sky-400",
        img: "https://img.icons8.com/color/48/tailwindcss.png",
        level: 85,
      },
      {
        name: "Sass",
        color: "bg-[#EB608F]",
        img: "https://img.icons8.com/color/50/sass.png",
        level: 60,
      },
      {
        name: "Responsive Web Design",
        color: "bg-indigo-500",
        img: "https://img.icons8.com/ios/50/responsive.png",
        level: 90,
      },
    ],
    stateManagement: [
      {
        name: "Redux Toolkit",
        color: "bg-[#764ABC]",
        img: "https://img.icons8.com/color/48/redux.png",
        level: 70,
      },
      {
        name: "Context API",
        color: "bg-cyan-400",
        img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png",
        level: 75,
      },
    ],
    backend: [
      {
        name: "Node.js",
        color: "bg-[#339933]",
        img: "https://img.icons8.com/fluency/48/node-js.png",
        level: 60,
      },
      {
        name: "Express.js",
        color: "bg-gray-700",
        img: "https://img.icons8.com/officel/80/express-js.png",
        level: 65,
      },
      {
        name: "PHP",
        color: "bg-[#878EB7]",
        img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-shadow-tal-revivo.png",
        level: 55,
      },
    ],
    database: [
      {
        name: "MongoDB",
        color: "bg-[#47A248]",
        img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
        level: 60,
      },
      {
        name: "MySQL",
        color: "bg-[#F57F17]",
        img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mysql-an-open-source-relational-database-management-system-logo-shadow-tal-revivo.png",
        level: 65,
      },
    ],
  };

  const tools = [
    {
      name: "Git",
      w: 40,
      h: 40,
      img: "https://img.icons8.com/color/50/git.png",
    },
    {
      name: "GitHub",
      w: 40,
      h: 40,
      img: "https://img.icons8.com/fluency/50/github.png",
    },
    {
      name: "Vs Code",
      w: 35,
      h: 35,
      img: "https://img.icons8.com/color/50/visual-studio-code-2019.png",
    },
  ];

  const cardCategories = [
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
      sub: "Designing seamless user experiences with efficient state handling.",
      data: skills.stateManagement,
    },
    {
      title: "Database",
      sub: "Scalable Storage Solutions",
      data: skills.database,
    },
  ];

  return (
    <section className="flex my-15 flex-col w-full items-center justify-center">
      <Headings value={"02"} title={"Technical Skills"} />

      {/* WAVE ANIMATION GRID */}
      <div
        ref={cardGridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[80%] mb-10"
      >
        {cardCategories.map((cat, index) => (
          <SkillCard
            key={index}
            index={index}
            isVisible={isVisible}
            heading={cat.title}
            subheading={cat.sub}
            skills={cat.data.map((s) => s.name)}
          />
        ))}
      </div>
      <div className="w-full ">
        {/* <div className=" shadow-[1px_5px_40px_#FFFFFF21,inset_6px_0_18px_rgba(0,0,0,0.25),inset_-6px_0_18px_rgba(0,0,0,0.25)] px-7 mb-6 md:px-20 rounded-lg py-10 mx-auto overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {[
              ...skills.frontend,
              ...skills.backend,
              ...skills.database,
              ...skills.stateManagement,
              ...tools,
              ...tools,
            ].map((skill, i) => (
              <img
                key={i}
                src={skill.img}
                alt={skill.name}
                className="h-12 w-auto flex-shrink-0 hover:-translate-y-2 hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div> */}

        <div
          ref={sectionRef}
          className={`max-w-9xl flex flex-col  relative md:max-w-5xl  transition-all duration-700 ease-in-out overflow-hidden shadow-[1px_5px_40px_#FFFFFF21] px-7 md:px-20 hover:shadow-[1px_5px_40px_#A5BBCB40] rounded-lg py-10 w-[90%] md:w-[70%] mx-auto space-y-6`}
          style={{
            maxHeight: viewAll ? "2000px" : "280px",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
          }}
        >
          {[
            ...skills.frontend,
            ...skills.backend,
            ...skills.database,
            ...skills.stateManagement,
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-[30px] md:w-[40px]"
                  />
                  <span className="text-gray-400 font-medium dm-mono">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[#23A9BD] text-sm dm-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${skill.color} h-2 rounded-full  transition-all duration-1500 ease-out`}
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <br />

        <div
          style={{ boxShadow: "1px 5px 40px rgba(255, 255, 255, 0.13)" }}
          className={`max-w-5xl ${viewAll ? "visible" : "hidden"} overflow-hidden flex items-center gap-10 px-10 rounded-lg py-10 w-[90%] md:w-[70%] mx-auto space-y-6`}
        >
          <div
            ref={sectionRef1}
            className="flex flex-col md:flex-row text-sm gap-5 md:items-center"
          >
            <h4 className="text-gray-300 syne text-left font-extrabold text-wider">
              Tools :
            </h4>
            <div className="flex gap-10">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row p-0 rounded-2xl gap-2 items-center transition-all duration-1000 ease-out transform ${
                    toolAnimate
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[-50%] opacity-0"
                  }`}
                >
                  <img
                    width={tool.w}
                    height={tool.h}
                    src={tool.img}
                    alt={tool.name}
                  />
                  <span className="text-gray-400 text-xs dm-mono md:text-sm font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center my-4">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="ring-1 duration-200 transition-all text-sm dm-mono uppercase ring-white/20 hover:ring-[#23A9BD] hover:text-[#23A9BD] rounded-sm px-4 py-2 text-white"
          >
            {viewAll ? "View Less" : "View In Detail"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
