import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Works", to: "works" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand / Quote */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Sathyan.dev
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-400 italic leading-relaxed max-w-md">
              “Building, Learning, and Improving every day.”
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-5 sm:gap-7 text-sm sm:text-base">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-gray-300 hover:text-[#00b7ff] hover:-translate-y-1 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:sathyana3011@gmail.com"
              aria-label="Email"
              className="w-11 h-11 hover:bg-[#00b7ff] rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
            >
              <MdAlternateEmail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sathyan-sathya3011"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 hover:bg-[#00b7ff] rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://github.com/sathyan-a-wbd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 hover:bg-[#00b7ff] rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
            © {currentYear} Sathyan.dev — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
