import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { IoCloudDownload } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {ReactTyped} from "react-typed";
// #211F20
//text //#A5BBCB
//#9CAFBF

function Hero() {
  let [ishover, setIsHover] = useState(false);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SathyanAResume.pdf";
    link.download = "Sathyan-Frontend-Developer.pdf";
    link.click();
  };
  return (
    <section
      ref={sectionRef}
      className="max-w-6xl my-18 mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-6"
    >
      {/* left */}
      <div className="flex-1 py-24 flex items-center  justify-center text-center md:text-left">
        <div
          className={`flex flex-col items-start transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-0"
          }`}
        >
          <p className="p-2 tracking-wider roboto text-left text-gray-300  font-bold">
            I'm Sathyan
          </p>
          <h1 className=" poppins-extrabold text-[#A5BBCB] text-6xl md:text-6xl text-left font-extrabold">
            Front-End <br />
            Developer
          </h1>
           <ReactTyped strings ={['" Passionate about web Development,with a curious <br/> mindset and  strong focus on continuous learning "']}
        typeSpeed={10}
        backSpeed={40}
        showCursor={false}
        philosophy
       className=" text-gray-300 mt-2 mb-2 poppins-medium-italic"
        />
         
          <div className="flex items-center gap-2 mt-3">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="font-bold inter hover:bg-gray-400  duration-200  cursor-pointer text-gray-700 flex items-center justify-between text-xs md:text-[13px] rounded-sm bg-[#A5BBCB] px-2 py-1"
              onClick={handleDownload}
            >
              Resume
              {ishover ? (
                <IoCloudDownload className="ml-2 text-[#211F20] duration-200" />
              ) : (
                <IoCloudDownloadOutline className="ml-2 text-[#211F20]  duration-200" />
              )}
            </button>
            <Link to="works" offset={-80} smooth={true} duration={500}>
              <button className="font-bold inter hover:bg-gray-400 border-gray-100 duration-200 text-gray-700 cursor-pointer  flex items-center justify-between  rounded-sm bg-[#A5BBCB] px-2 py-1 text-xs md:text-[13px] ">
                My works
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1  flex items-center md:justify-center">
        <img
          src="/src/assets/sathyan.png.png"
          alt="sathyan.png"
          className={`bg-[#9CAFBF] w-[300px] md:w-[350px] p-0 rounded-2xl transition-all transition-transform duration-300 hover:scale-105 duration-1000 ease-out transform ${
            animate ? "opacity-100 translate-y-2" : "opacity-0 -translate-y-0"
          }`}
        />
      </div>
      <hr/>
    </section>
  );
}

export default Hero;
