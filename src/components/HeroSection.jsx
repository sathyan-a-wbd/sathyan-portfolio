import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
// import profile from "../assets/sathyan.webp";
import Tags from "./small_compo/Tags";
import HeroImage from "./small_compo/HeroImage";
import HeroIntro from "./small_compo/HeroIntro";

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
      // style={{
      //   boxShadow: "0 4px 40px rgba(255, 255, 255, 0.1)",
      // }}
      // className="relative min-h-screen h-screen  lg:h-screen justify-between flex flex-col lg:flex-row w-full items-center gap-10 overflow-hidden lg:items-center"
      className="relative min-h-screen h-auto grid grid-cols-1 lg:grid-cols-2 w-full m-0 items-center justify-center"
    >
      {/* Left */}
      <HeroIntro
        animate={animate}
        isAnimate={isAnimate}
        handleDownload={handleDownload}
      />
      {/* Left */}

      {/* Center */}
      <HeroImage />
      {/* Center */}
      {/* Right */}
      <div className="hidden lg:flex order-2 right-0 mt-20 h-full p-10 items-center justify-end">
        <motion.div
          variants={tagVariants}
          initial="hidden"
          whileInView="popup"
          animate="floating"
          viewport={{ once: true, amount: 0.1 }}
          className="w-100 px-6 py-4 text-center text-white/80 rounded-md bg-white/5 border border-dashed border-gray-700  backdrop-blur-md"
        >
          <p
            className={`lora  w-full max-w-xl text-justify text-xs leading-relaxed text-white/85 transition-all delay-300 duration-1000 md:text-sm`}
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
