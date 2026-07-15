import React, { useState, useCallback, memo } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaFilePdf, FaFolderOpen } from "react-icons/fa6";

import toast from "react-hot-toast";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Works", to: "works" },
  { name: "Contact", to: "contact" },
];

function NavBar({ setContactFocus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDownload = useCallback(() => {
    toast.success("Downloading Resume...");

    setIsAnimate(true);

    const timer = setTimeout(() => {
      const link = document.createElement("a");

      link.href = "/Sathyan.pdf";
      link.download = "resume-Sathyan.pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      setIsAnimate(false);

      toast.success("Resume downloaded successfully!");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleContact = useCallback(() => {
    setContactFocus((prev) => !prev);
    closeMenu();
  }, [closeMenu, setContactFocus]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: "true", amount: 0.2 }}
      aria-label="Main navigation"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#010310]/95 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}

          <div aria-label="Logo" className="flex cursor-pointer items-center">
            <h1 className="syne text-[1.2rem] font-extrabold tracking-wider text-gray-100">
              SA
            </h1>
          </div>

          {/* Desktop Nav */}

          <ul className="dm-mono hidden items-center gap-10 text-[0.78rem] uppercase tracking-[0.25em] text-gray-100 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-[#23A9BD]"
                  onClick={item.name === "Contact" ? handleContact : undefined}
                  className="relative cursor-pointer font-light transition-all duration-300 hover:text-[#23A9BD]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            {/* Resume Button */}

            <button
              aria-label="Download resume"
              onClick={handleDownload}
              className="dm-mono flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm uppercase text-white transition-all duration-300 hover:border-[#23A9BD] hover:text-[#23A9BD] focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              <span>Resume</span>

              <div className="relative flex h-5 w-5 items-center justify-center">
                <FaFilePdf
                  className={`absolute text-[16px] transition-all duration-500

                  ${
                    isAnimate ?
                      "translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
                  }
                  `}
                />

                <FaFolderOpen
                  className={`absolute text-[16px] transition-all duration-500

                  ${isAnimate ? "scale-110 opacity-100" : "scale-75 opacity-0"}
                  `}
                />
              </div>
            </button>

            {/* Mobile Menu */}

            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center text-[#A5BBCB] transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 md:hidden"
            >
              <div className="relative h-5 w-6">
                <span
                  className={`absolute left-0 h-[1.5px] w-6 rounded bg-current transition-all duration-300

                  ${isOpen ? "top-2 rotate-45" : "top-0"}
                  `}
                />

                <span
                  className={`absolute left-0 top-2 h-[1.5px] w-6 rounded bg-current transition-all duration-300

                  ${isOpen ? "opacity-0" : "opacity-100"}
                  `}
                />

                <span
                  className={`absolute left-0 h-[1.5px] w-6 rounded bg-current transition-all duration-300

                  ${isOpen ? "top-2 -rotate-45" : "top-4"}
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden

        ${
          isOpen ?
            "max-h-[400px] border-t border-white/10 opacity-100"
          : "max-h-0 opacity-0"
        }
        `}
      >
        <ul className="dm-mono flex flex-col items-center gap-2 bg-white/[0.03] px-4 py-6 uppercase tracking-[0.2em] backdrop-blur-xl">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-[#23A9BD]"
                onClick={item.name === "Contact" ? handleContact : closeMenu}
                className="block w-full cursor-pointer rounded-md py-3 text-center text-sm text-gray-100 transition-all duration-300 hover:bg-white/10 hover:text-[#23A9BD]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default memo(NavBar);
