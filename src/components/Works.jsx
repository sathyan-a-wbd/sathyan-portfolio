import React, { useRef,useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaAngleDoubleLeft } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";

//Image Imports
// import TodoImage from "https://img.icons8.com/scribby/50/todo-list.png";
import Weather from "../assets/ProjectScrennshots/weather.png";
import WeatherCold from "../assets/ProjectScrennshots/weather-cold.png";
import WeatherNewyork from "../assets/ProjectScrennshots/newyork.png";
import NotesAdd from "../assets/ProjectScrennshots/Notes Add.png";
import NotesDis from "../assets/ProjectScrennshots/Notes dis.png";
import NotesSrch from  "../assets/ProjectScrennshots/Notes Search.png";
import Todo from "../assets/ProjectScrennshots/todo-add.png";
import TodoEmpty from "../assets/ProjectScrennshots/todo-empty.png";
import TodoHave from  "../assets/ProjectScrennshots/todo-have.png";
import PortfolioHero from "../assets/ProjectScrennshots/PortfolioHero.png";
import PortfolioContact from "../assets/ProjectScrennshots/PortfolioSkills.png";
import PortfolioSkills from  "../assets/ProjectScrennshots/PortfolioContact.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Works() {
const [spread,setSpread]=useState(false);

const projects = [
  {
    title: "📝 Notes App",
    description: "This notes application was built with ReactJS to help users manage their personal notes easily. Notes can be added with custom background colors and labels, searched quickly, and deleted when no longer needed. I implemented localStorage to ensure the notes are saved even after refreshing, and designed a simple, user-friendly interface.",
    image:[NotesAdd,NotesDis,NotesSrch],
    tech: ["React", "LocalStorage"],
    demo: "https://takeshortnoty.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/Notes-App"
  },
  {
    title: "🌦 Weather App",
    description: "I created a dynamic weather application using ReactJS and the OpenWeather API. It shows real-time weather conditions with icons, temperature in Celsius, humidity, wind speed, country, latitude, and longitude. The app also includes a city search feature and is designed with a clean, responsive interface for both desktop and mobile users.",
    image: [Weather, WeatherCold, WeatherNewyork],
    tech: ["React", "Reducer Hook", "API"],
    demo: "https://weathercheckerinanycity.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/Weather-App",
   size:"w-[300px]"
  },
  {
    title: "💻 Portfolio Website",
    description: "I developed my personal portfolio website using ReactJS and TailwindCSS, focusing on a minimal and professional design. The site showcases my projects, skills, and contact details while using subtle animations to enhance user experience. It is fully responsive, ensuring smooth performance across different devices.",
    image: [PortfolioHero,PortfolioSkills,PortfolioContact],
    tech: ["React", "TailwindCSS"],
    demo: "https://sathyandevportfolio.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/sathyan-portfolio"
  },
    {
    title: "✅ Todo App",
    description: "This project is a simple and efficient todo application for managing daily tasks. Users can add, edit, and delete their todos with ease. The app has a lightweight design, focuses on productivity, and provides a straightforward interface to keep track of tasks effectively.",
    image:[TodoEmpty,Todo,TodoHave],
    tech: ["React", "LocalStorage"],
    demo: "https://my-todo-a.netlify.app/",
    github: "https://github.com/sathyan-a-wbd/my-todo-app",
    size:"w-[300px]"
  },
];
   const imageSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
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
<section ref={boxRef} className="flex my-15 overflow-hidden flex-col w-full items-center justify-center">
<h2 className="text-center mb-5 text-[#A5BBCB] text-4xl font-extrabold inter">My Works</h2>
<div  className={`max-w-7xl md:max-w-5xl rounded-xl  mt-3  w-[80%] md:w-[70%] mx-auto space-y-6 transition-all duration-1000 ease-in-out ${inView? "translate-x-0 opacity-100": "translate-x-30 opacity-0"}`}>
  {projects.map((project, index) => (
        <div style={{boxShadow:"1px 1px 30px rgba(255,255,255,.1)"}}  key={index} className=" overflow-hidden mb-5 w-[full] rounded-lg ">
          {/* Slick Slider for images */}
          <Slider {...imageSettings}>
            {project.image.map((img, i) => (
              <div key={i} className=" w-full flex items-center justify-center">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className={`d-block mx-auto ${project.size || "w-full"}`}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </Slider>

          {/* Project Details */}
          <div className="card-body p-3 flex flex-col gap-2">
            <h5 className="card-title inter text-gray-400 font-bold"> {project.title}</h5>
            <p className="card-text text-gray-300 work-sans text-justify indent-[10px] text-sm md:text-md">{project.description}</p>
            <p className="text-gray-300 work-sans text-sm md:text-md indent-[10px]">
              <strong className="text-gray-300 work-sans text-sm md:text-md">Tech:</strong> {project.tech + ""}
            </p>
            <div className="flex items-center ml-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn flex items-center gap-1  btn-primary me-2 bg-blue-500 hover:bg-blue-700 py-1 px-2 text-xs md:text-sm rounded-xs inter text-gray-100"
            >
              Live  <TbWorld/>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn flex items-center gap-1  btn-primary me-2 bg-gray-600 hover:bg-gray-700  py-1 px-2 text-xs md:text-sm rounded-xs work-sans text-gray-100"
            >
              GitHub <FaGithub/>
            </a>
            </div>
          </div>
        </div>
      ))}
 
</div>
</section>
      
  );
}

export default Works;
