import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import { FaFilePdf, FaFolderOpen } from "react-icons/fa6";
import Button from "../ui/Buttons";
const HeroIntro = ({ animate, isAnimate, handleDownload }) => {
  return (
    <div
      className={`lg:h-full h-1/2 items-center absolute top-0 sm:relative flex left-0 z-20  w-full lg:items-center justify-center p-10 text-left md:py-10 order-1 sm:order-2 md:order-2 lg:justify-start lg:order-1 `}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: "true", amount: 0.2 }}
        className={`flex flex-col items-center transition-all duration-1000 ease-out md:items-start justify-center`}
      >
        <span className="lora w-full text-left font-extrabold text-sm text-gray-200 ">
          Hi, I'm
        </span>
        <p
          id="hero-heading"
          className="syne text-3xl font-extrabold italic leading-tight tracking-wide text-gray-200 sm:text-4xl xl:text-4xl"
        >
          Sathyan A
        </p>

        <div className={`mt-4 transition-all delay-200 duration-1000`}>
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
            className="lora-italic text-sm sm:text-lg tracking-wide text-[#7a8570] md:text-[1.2rem]"
          />
        </div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: "true", amount: 0.2 }}
          className={`mt-8 flex w-full flex-row items-center gap-4 md:flex-row lg:justify-start`}
        >
          <Link to="works" offset={-80} smooth={true} duration={500}>
            <Button variant="primary" aria-label="View my projects">
              My works
            </Button>
          </Link>

          <Button
            onClick={handleDownload}
            aria-label="Download Resume"
            icon={<FaFilePdf />}
          >
            Resume
          </Button>

          <Link to="contact" offset={-80} smooth={true} duration={500}>
            <Button aria-label="Go to contact section">Let's Talk</Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroIntro;
