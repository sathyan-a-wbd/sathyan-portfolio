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
// #211F20
//text //#A5BBCB
//#9CAFBF
function NavBar({ setDownloadMsg, setContactFocus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleDownload = () => {
    setDownloadMsg(true);
    setIsAnimate(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Sathyan.pdf";
      link.download = "Sathyan-Frontend-Developer.pdf";
      link.click();
      setIsAnimate(false);
    }, 2000);
  };
  const handleRemove = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#211F20] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-1 justify-between w-38 cursor-pointer">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/clouds/100/under-computer.png"
              alt="under-computer"
            />
            <h3 className="text-xl work-sans tracking-wider font-bold text-gray-200 md:text-2xl">
              Sathyan.dev
            </h3>
          </div>
          <ul className="hidden justify-between items-center w-100 text-gray-100 md:flex">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#cde4f5] relative inline-block after:w-full after:block after:rounded-xl after:h-[3px] after:bg-[#A5BBCB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center "
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#cde4f5] relative inline-block after:w-full after:block after:rounded-xl after:h-[3px] after:bg-[#A5BBCB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center "
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#cde4f5] relative inline-block after:w-full after:block after:rounded-xl after:h-[3px] after:bg-[#A5BBCB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center "
            >
              Skills
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#cde4f5] relative inline-block after:w-full after:block after:rounded-xl after:h-[3px] after:bg-[#A5BBCB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center "
            >
              Works
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setContactFocus((prev) => !prev)}
              className=" font-bold cursor-pointer hover:text-[#cde4f5] relative inline-block after:w-full after:block after:rounded-xl after:h-[3px] after:bg-[#A5BBCB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center "
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center gap-3">
            <button
              className="font-bold duration-200 relative cursor-pointer text-gray-100 flex items-center justify-between  rounded-sm bg-[#A5BBCB] pl-3 pr-8 py-1 text-sm md:text-md gap-2"
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
              className="md:hidden focus:outline-none cursor-pointer text-[#A5BBCB] hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden font-roboto-tail mt-4 space-y-2 flex flex-col items-center gap-5 my-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className=" font-bold cursor-pointer hover:text-[#A5BBCB] text-gray-100"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className=" font-bold cursor-pointer hover:text-[#A5BBCB] text-gray-100"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className=" font-bold cursor-pointer hover:text-[#A5BBCB] text-gray-100"
          >
            Skills
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className=" font-bold cursor-pointer hover:text-[#A5BBCB] text-gray-100"
          >
            Works
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleRemove}
            className=" font-bold cursor-pointer hover:text-[#A5BBCB] text-gray-100"
          >
            Contact
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
