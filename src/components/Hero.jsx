import React, { useState, useEffect, useRef, useCallback, memo } from "react";

import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

import { FaFilePdf, FaFolderOpen } from "react-icons/fa6";

import toast from "react-hot-toast";

import profile from "../assets/sathyan.webp";
// import profile from "../assets/sathyan-profie.png";

function Hero() {
  const sectionRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const handleDownload = useCallback(() => {
    toast.loading("Preparing your download...", {
      id: "resume-download",
    });

    setIsAnimate(true);

    const timer = setTimeout(() => {
      const link = document.createElement("a");

      link.href = "/Sathyan.pdf";
      link.download = "resume-Sathyan.pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      setIsAnimate(false);

      toast.success("Resume downloaded successfully!", {
        id: "resume-download",
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="mx-auto my-10 flex max-w-7xl flex-col items-center gap-10 overflow-hidden px-6 py-10 md:my-20 md:px-10 lg:flex-row lg:items-center"
    >
      {/* Left */}

      <div className="order-2 flex w-full items-center justify-center py-4 text-center md:py-10 lg:order-1 lg:w-1/2 lg:justify-start lg:text-left">
        <div
          className={`flex flex-col items-center transition-all duration-1000 ease-out lg:items-start

          ${animate ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
          `}
        >
          <p
            id="hero-heading"
            className="syne text-4xl font-extrabold italic leading-tight tracking-wide text-gray-200 sm:text-5xl xl:text-6xl"
          >
            Sathyan A
          </p>

          <div
            className={`mt-4 transition-all delay-200 duration-1000

            ${animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            <ReactTyped
              strings={[
                "Fullstack Developer - MERN",
                "Frontend Developer",
                "React Developer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="lora-italic text-lg tracking-wide text-[#7a8570] md:text-[1.2rem]"
            />
          </div>

          <p
            className={`lora mt-6 w-full max-w-xl text-justify text-[1rem] leading-relaxed text-white/85 transition-all delay-300 duration-1000 md:text-[1.08rem]

            ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }
            `}
          >
            BCA Graduate (2025) specializing in JavaScript, React, and the MERN
            stack. I build responsive, scalable, and well-structured web
            applications from frontend to backend.
          </p>

          {/* Buttons */}

          <div
            className={`mt-8 flex w-full flex-col items-center gap-4 transition-all delay-500 duration-1000 md:flex-row lg:justify-start

            ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }
            `}
          >
            <Link to="works" offset={-80} smooth={true} duration={500}>
              <button
                aria-label="View my projects"
                className="dm-mono w-52 rounded-md border border-cyan-400 bg-[#23A9BD] px-6 py-4 text-sm font-medium uppercase text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(35,169,189,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              >
                My Works
              </button>
            </Link>

            <button
              aria-label="Download resume"
              onClick={handleDownload}
              className={`dm-mono flex w-52 items-center justify-center gap-3 rounded-md border border-white/15 px-6 py-4 text-sm font-medium uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40

              ${isAnimate ? "shadow-[0_0_20px_rgba(255,255,255,0.15)]" : ""}
              `}
            >
              <span>Resume</span>

              <div className="relative flex h-5 w-5 items-center justify-center">
                <FaFilePdf
                  className={`absolute text-[17px] transition-all duration-500

                  ${
                    isAnimate ?
                      "translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
                  }
                  `}
                />

                <FaFolderOpen
                  className={`absolute text-[17px] transition-all duration-500

                  ${isAnimate ? "scale-110 opacity-100" : "scale-75 opacity-0"}
                  `}
                />
              </div>
            </button>

            <Link to="contact" offset={-80} smooth={true} duration={500}>
              <button
                aria-label="Go to contact section"
                className="dm-mono w-52 rounded-md border border-white/15 px-6 py-4 text-sm font-medium uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              >
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2">
        <div
          className={`relative rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md transition-all duration-1000 ease-out hover:scale-[1.02] hover:border-cyan-400/30

          ${animate ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
          `}
        >
          {/* Badge */}

          <div
            className={`absolute -bottom-2 -right-2 rounded-md bg-[#23A9BD] z-20 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all delay-700 duration-700

            ${animate ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
          >
            Open to Work
          </div>

          {/* Image */}

          <div className="overflow-hidden rounded-2xl">
            <img
              src={profile}
              alt="Portrait of Sathyan"
              width={350}
              height={350}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={`w-[250px] rounded-2xl bg-[#9CAFBF] object-cover ring-2 ring-[#23A9BD] transition-all duration-[1200ms] md:w-[350px]

              ${animate ? "scale-100 rotate-0" : "scale-90 rotate-2"}
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
