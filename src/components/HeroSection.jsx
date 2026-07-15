import React, { useState, useEffect, useRef, useCallback, memo } from "react";

import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaFilePdf, FaFolderOpen } from "react-icons/fa6";
import { BsArrow90DegRight } from "react-icons/bs";
import toast from "react-hot-toast";

// import profile from "../assets/sathyan.webp";
import Tags from "./small_compo/Tags";
import HeroImage from "./small_compo/HeroImage";

function HeroSection() {
  const sectionRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },

    popup: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.4,
      },
    },

    floating: {
      y: [0, -5, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
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
      style={{
        boxShadow: "0 4px 40px rgba(255, 255, 255, 0.1)",
      }}
      className="relative border-b border-white/20 min-h-screen h-auto lg:h-screen flex flex-col lg:flex-row w-full items-center gap-10 overflow-hidden lg:items-center
"
    >
      {/* Left */}
      <div
        className={`md:top-[30%] left-0 z-20 flex w-full h-screen items-center justify-center  py-4 text-left md:py-10 order-2 md:order-2 lg:justify-start lg:order-1 mx-10 `}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: "true", amount: 0.2 }}
          className={`flex flex-col items-center transition-all duration-1000 ease-out md:items-start justify-center
      
               
                `}
        >
          <span className="lora w-full text-start px-2 text-sm text-white">
            Hi, I'm
          </span>
          <p
            id="hero-heading"
            className="syne text-4xl font-extrabold italic leading-tight tracking-wide text-gray-200 sm:text-4xl xl:text-4xl"
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
                "Full Stack Developer",
                "MERN Stack Developer",
                "React.js Developer",
                "Building Modern Web Applications",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="lora-italic text-lg tracking-wide text-[#7a8570] md:text-[1.2rem]"
            />
          </div>

          {/* Buttons */}

          <div
            className={`mt-8 flex w-full flex-col items-center gap-4 transition-all delay-500 duration-1000 md:flex-row lg:justify-start
      
                  ${
                    animate ?
                      "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }
                  `}
          >
            <Link to="works" offset={-80} smooth={true} duration={500}>
              <button
                aria-label="View my projects"
                className="dm-mono md:w-35 w-80 rounded-md border border-cyan-400 bg-[#23A9BD] px-4 py-4 text-sm font-medium uppercase text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(35,169,189,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              >
                My Works
              </button>
            </Link>

            <button
              aria-label="Download resume"
              onClick={handleDownload}
              className={`dm-mono flex w-80 md:w-35 items-center justify-center gap-3 rounded-md border border-white/15 px-4 py-4 text-sm font-medium uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40
      
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
                className="dm-mono md:w-35 backdrop:blur-2xl w-80 rounded-md border border-white/15 px-4 py-4 text-sm font-medium uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Left */}

      {/* Center */}
      <HeroImage />
      {/* Center */}
      {/* Right */}
      <div className="hidden lg:flex  order-2 right-0  items-center justify-center">
        {" "}
        <motion.div
          variants={tagVariants}
          initial="hidden"
          whileInView="popup"
          animate="floating"
          viewport={{ once: true, amount: 0.1 }}
          className="w-100 mt-30 mx-10 px-6 py-4 text-center text-white/80 rounded-md bg-white/5 border border-dashed border-gray-700  backdrop-blur-md"
        >
          <p
            className={`lora  w-full max-w-xl text-justify text-xs leading-relaxed text-white/85 transition-all delay-300 duration-1000 md:text-sm

            
            `}
          >
            BCA Graduate passionate about building scalable and responsive web
            applications using the MERN stack. I enjoy turning ideas into
            real-world products with clean code, modern UI, and efficient
            backend architecture.
          </p>
        </motion.div>
      </div>
      {/* Right */}
    </section>
  );
}

export default memo(HeroSection);
