import React, { useEffect, useState, useRef } from "react";

function Skills() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [toolAnimate, setToolAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
    
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToolAnimate(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef1.current) observer.observe(sectionRef1.current);
    return () => observer.disconnect();
    
  }, []);
  const skills = [
    {
      name: "HTML",
      level: 95,
      color: "bg-orange-500",
      img: "https://img.icons8.com/fluency/50/html-5.png",
    },
    {
      name: "CSS",
      level: 88,
      color: "bg-blue-500",
      img: "https://img.icons8.com/color/50/css3.png",
    },
    {
      name: "JavaScript",
      level: 80,
      color: "bg-yellow-400",
      img: "https://img.icons8.com/color/50/javascript.png",
    },
    {
      name: "React",
      level: 55,
      color: "bg-cyan-500",
      img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "Sass",
      level: 60,
      color: "bg-[#EB608F]",
      img: "https://img.icons8.com/color/50/sass.png",
    },
    {
      name: "MySQL",
      level: 50,
      color: "bg-[#F57F17]",
      img: "https://img.icons8.com/fluency/50/mysql-logo.png",
    },
    {
      name: "PHP",
      level: 20,
      color: "bg-[#878EB7]",
      img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-shadow-tal-revivo.png",
    },
  ];
  const tools = [
    {
      name: "Git",
      h: 40,
      w: 40,
      icon: "https://img.icons8.com/color/50/git.png",
    },
    {
      name: "GitHub",
      h: 40,
      w: 40,
      icon: "https://img.icons8.com/fluency/50/github.png",
    },
    {
      name: "Vs Code",
      h: 35,
      w: 35,
      icon: "https://img.icons8.com/color/50/visual-studio-code-2019.png",
    },
  ];

  return (
    <section className="flex my-15  flex-col w-full items-center justify-center">
      <h1 className="text-center mb-5 text-[#A5BBCB] inter text-4xl font-extrabold">
        What I Do
      </h1>
      <div
        ref={sectionRef}
        className="max-w-7xl md:max-w-5xl shadow-[1px_5px_40px_#FFFFFF21] px-10 md:px-20 hover:shadow-[1px_5px_40px_#A5BBCB40] rounded-lg py-10 w-[80%] md:w-[70%] mx-auto space-y-6 "
      >
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <div className="flex items-center gap-2">
                <img
                  src={skill.img}
                  alt="skills"
                  className="w-[30px] md:w-[40px]"
                />
                <span className="text-gray-400 font-medium work-sans">{skill.name}</span>
              </div>
              <span className="text-gray-400 work-sans">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${skill.color} h-2 rounded-full transition-all duration-1500 ease-out`}
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div
        style={{ boxShadow: "1px 5px 40px rgba(255, 255, 255, 0.13)" }}
        className="max-w-5xl flex items-center gap-10 px-10  rounded-lg py-10 w-[80%] md:w-[70%] mx-auto space-y-6"
      >
        <div
   ref={sectionRef1}
          className=" flex flex-col  md:flex-row text-sm gap-5  md:items-center"
        >
          <h4 className="text-gray-300 work-sans text-left font-extrabold text-wider">
            Tools :
          </h4>
          <div className="flex gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row p-0 rounded-2xl sm:flex-col   gap-2 items-center transition-all duration-1000 ease-out transform ${
                  toolAnimate
                    ? "translate-x-0 opacity-100": "translate-x-[-50%] opacity-0"
                }`}
              >
                <img width={tool.w} height={tool.h} src={tool.icon} alt="Git" />
                <span className="text-gray-400 text-xs work-sans md:text-sm font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-gray-100 font-roboto-tail"></h1>
    </section>
  );
}

export default Skills;
