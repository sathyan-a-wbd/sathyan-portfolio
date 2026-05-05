import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { IoCloudDownload } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import profile from "../assets/ProjectScrennshots/sathyan.png";
import { FaFile } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaFilePdf, FaRegFilePdf, FaRegFolderOpen } from "react-icons/fa6";
import { AiFillFolderAdd } from "react-icons/ai";
import toast from "react-hot-toast";

function Hero() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

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
  const handleDownload = () => {
    toast.loading("Preparing your download...");
    setIsAnimate(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Sathyan.pdf";
      link.download = "Sathyan-Developer.pdf";
      link.click();
      toast.success("Resume downloaded successfully!");
      setIsAnimate(false);
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-10xl my-10 md:my-18 mx-auto px-8 py-8 md:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8"
    >
      {/* left */}
      <div className="md:w-1/2 w-full order-2 lg:order-1 py-6 md:py-24 flex items-center justify-center text-center md:text-left">
        <div
          className={`flex flex-col items-center  md:items-start transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-0"
          }`}
        >
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-extrabold tracking-wide text-left text-gray-300 syne leading-tight">
            Sathyan A
          </p>
          <h1 className=" my-[1rem] text-[#7a8570] text-[1.2rem] lora-italic tracking-wider text-left font-medium">
            Fullstack Developer - MERN
          </h1>
          <p className="  text-white text-justify text-[1.1rem] md:w-[70%] w-full lora my-[1rem]">
            BCA Graduate (2025) specializing in JavaScript, React, and the MERN
            stack. I build responsive, well-structured web applications from
            frontend to backend.
          </p>{" "}
          <div className="flex items-center gap-4 mt-3"></div>
          <div className="flex w-full gap-4 flex-col md:flex-row items-center justify-center">
            <Link to="works" offset={-80} smooth={true} duration={500}>
              <button className="font-medium dm-mono uppercase relative duration-200  cursor-pointer flex items-center justify-center text-lg md:text-sm rounded-sm ring-1 ring-white/20 bg-[#23A9BD] text=black hover:shadow-[3px_7px_20px_1px_#23A9BD] hover:-translate-y-2 hover:ring-[#23A9BD] w-50 py-4">
                My works
              </button>
            </Link>
            <button
              className={`${isAnimate ? "shadow-[0_0_20px_20px_amber-100]" : ""} font-medium dm-mono uppercase relative duration-200  cursor-pointer text-white flex items-center justify-center text-lg md:text-sm rounded-sm ring-1 ring-white/20 hover:text-[#23A9BD] hover:-translate-y-2 hover:ring-[#23A9BD] w-50 py-4`}
              onClick={handleDownload}
            >
              <div className="relative flex items-center justify-center">
                <p className="mr-3">Resume</p>
                <FaFilePdf
                  className={` ${isAnimate ? "animate-fileDrop z-1 text-white" : ""}  absolute right-[-25px] `}
                />
                <FaFolderOpen
                  className={` ${isAnimate ? "visible scale-130 z-20 text-white" : "hidden"} duration-75 ease-in-out absolute right-[-25px] `}
                />
              </div>
            </button>
            <Link to="contact" offset={-80} smooth={true} duration={500}>
              <button className="font-medium dm-mono uppercase relative duration-200  cursor-pointer text-white flex items-center justify-center text-lg md:text-sm rounded-sm ring-1 ring-white/20 hover:text-[#23A9BD] hover:-translate-y-2 hover:ring-[#23A9BD]  w-50  py-4">
                Get In touch
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="order-1 lg:order-2 w-full flex items-center justify-center">
        <div
          className={`p-3 flex items-center justify-center  relative ring-1 ring-white/20 rounded-2xl transition-all  duration-300 hover:scale-102  ease-out transform ${animate ? "opacity-100 " : "opacity-0 -translate-y-0"} `}
        >
          <div className="rounded-sm text-xs absolute shadow-sm -bottom-1 -right-2 bg-[#23A9BD] text-white px-4 py-2">
            {" "}
            Open to Work{" "}
          </div>
          <img
            src={profile}
            alt="sathyan.png"
            className={`bg-[#9CAFBF] w-[250px] ring-2 ring-[#23A9BD] md:w-[350px] p-0 rounded-2xl 
          }`}
          />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Hero;
