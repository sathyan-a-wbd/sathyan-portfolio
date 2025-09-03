import React,{useState,useRef,useEffect} from "react";
import {FaCalendar } from "react-icons/fa";

// #211F20
//text //#A5BBCB
//#9CAFBF
function About() {

  const education=[
    {hold:"BCA",university:"TMG College of Arts and Science - University of Madras",date:"June 2022 - June 2025"},
    {hold:"HSC | 67.1",university:"GHSS-Pazhampettai",date:"June 2020 - June 2022"},
    {hold:"SSLC | 73.2",university:"GHSS-Pazhampettai",date:"June 2019 - June 2020"},
  ]
  const boxRef =useRef(null);
  const [inView,setInView]= useState(false);
useEffect(()=>{
  const observer =new IntersectionObserver((entries)=>{
    const [entry] = entries;
    if(entry.isIntersecting){
      setInView(true);
      observer.unobserve(entry.target);
    }
  },
  {threshold : 0.2}
  );
  if(boxRef.current) observer.observe(boxRef.current);
  return ()=>{
    if(boxRef.current) observer.unobserve(boxRef.current);
  }
},[])
  return (
    <div className="flex  flex-col w-full items-center justify-center overflow-hidden ">
      <div className="w-[80%]">
        <div ref={boxRef} className="flex inter items-center gap-3 text-[#A5BBCB] text-5xl font-extrabold">
          about
          <div
            className="mt-3"
            style={{ width: "90%", height: "2px", backgroundColor: "#A5BBCB" }}
          ></div>{" "}
        </div>
        <p className=" work-sans text-justify indent-[3rem] mt-3 font-medium tracking-wider text-gray-400">
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
      <section ref={boxRef} className="education w-[80%]">
      <h2 className="text-2xl font-extrabold text-gray-400 mt-5 mb-5"> Education :</h2>
      <div className={`flex flex-col gap-5 md:flex-row w-[100%] justify-between items-center transition-all duration-1000 ease-in-out ${inView? "translate-x-0 opacity-100": "translate-x-30 opacity-0"}`}>
      {education.map((stats,i)=>(
        <div key={i} className="bg-[rgba(255,255,255,.2)] flex flex-col
         gap-1 w-full md:w-auto  work-sans rounded-md shadow-lg p-4  px-6 border border-[#fff]">
          <h2 className="work-sans text-[20px] text-gray-300">{stats.hold}</h2>
          <h4 className="text-gray-300 inter">{stats.university}</h4>
          <span>{stats.clg || ""}</span>
          <p className="flex gap-1 text-xs items-center text-gray-300"><FaCalendar/>{stats.date}</p>
        </div>
        ))}
       
      </div>
        
      </section>
    </div>
  );
}

export default About;
