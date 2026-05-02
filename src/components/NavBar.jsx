import React, { useState } from "react";
import { IoCloudDownload } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaUserTie, FaCode, FaLaptopCode } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaFilePdf, FaRegFilePdf, FaRegFolderOpen } from "react-icons/fa6";
import { AiFillFolderAdd } from "react-icons/ai";
import toast from "react-hot-toast";
// #211F20
//text //#A5BBCB
//#9CAFBF
function NavBar({ setContactFocus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleDownload = () => {
    toast.success("Downloading Resume...");
    setIsAnimate(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Sathyan.pdf";
      link.download = "Sathyan-Developer.pdf";
      link.click();
      setIsAnimate(false);
      toast.success("Resume downloaded successfully!");
    }, 2000);
  };
  const handleRemove = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#010310] shadow-lg border-1 border-b-white/20  fixed top-0 left-0 w-full z-50">
      <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-1 justify-between w-38 cursor-pointer">
            <h3 className="text-[1.2rem] syne tracking-wider font-extrabold text-gray-200 md:text-[1.2rem] ">
              SA
            </h3>
          </div>
          <ul className="hidden text-[0.79rem] dm-mono uppercase text-sm tracking-widest justify-between items-center w-100 text-gray-100 md:flex">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-light cursor-pointer hover:text-[#23A9BD] transition-all duration-300 relative inline-block  "
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-light cursor-pointer hover:text-[#23A9BD] transition-all duration-300 relative inline-block  "
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-light cursor-pointer hover:text-[#23A9BD] transition-all duration-300 relative inline-block  "
            >
              Skills
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-light cursor-pointer hover:text-[#23A9BD] transition-all duration-300 relative inline-block  "
            >
              Works
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setContactFocus((prev) => !prev)}
              className=" font-light cursor-pointer hover:text-[#23A9BD] transition-all duration-300 relative inline-block  "
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center gap-3">
            <button
              className="font-medium  relative cursor-pointer text-white flex items-center justify-between ring-white/20 rounded-sm ring-1 dm-mono uppercase hover:ring-[#23A9BD] hover:text-[#23A9BD] transition-all duration-300 pl-6 pr-10 py-2  text-sm md:text-md gap-2"
              onClick={handleDownload}
            >
              <div className="relative w-12 h-6 flex items-center justify-center">
                Resume
                <FaFilePdf
                  className={` ${isAnimate ? "animate-fileDrop z-0 " : ""}  absolute right-[-25px] `}
                />
                <FaFolderOpen
                  className={` ${isAnimate ? "visible scale-130 z-2" : "hidden"} duration-75 ease-in-out absolute right-[-25px] `}
                />
              </div>
            </button>
            <button
              className="md:hidden focus:outline-none cursor-pointer text-[#A5BBCB] hover:text-white transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6 mr-2">
                <span
                  className={`absolute h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${
                    isOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${
                    isOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ?
            "max-h-96 opacity-100 translate-y-0 border-t border-white/10"
          : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <ul className="backdrop-blur-xl bg-white/5 lora uppercase text-sm tracking-widest flex flex-col items-center gap-2 py-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className="w-[85%] text-center py-3 rounded-md text-gray-100 hover:bg-white/10 hover:text-[#23A9BD] transition-all duration-300 cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className="w-[85%] text-center py-3 rounded-md text-gray-100 hover:bg-white/10 hover:text-[#23A9BD] transition-all duration-300 cursor-pointer"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className="w-[85%] text-center py-3 rounded-md text-gray-100 hover:bg-white/10 hover:text-[#23A9BD] transition-all duration-300 cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="works"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className="w-[85%] text-center py-3 rounded-md text-gray-100 hover:bg-white/10 hover:text-[#23A9BD] transition-all duration-300 cursor-pointer"
          >
            Works
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => {
              handleRemove();
              setContactFocus((prev) => !prev);
            }}
            className="w-[85%] text-center py-3 rounded-md text-gray-100 hover:bg-white/10 hover:text-[#23A9BD] transition-all duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
