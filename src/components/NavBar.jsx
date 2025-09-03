import React, { useState } from "react";
import { IoCloudDownload } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaUserTie, FaCode, FaLaptopCode } from "react-icons/fa";
// #211F20
//text //#A5BBCB
//#9CAFBF
function NavBar() {
  let [ishover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SathyanAResume.pdf";
    link.download = "Sathyan-Front-Developer.pdf";
    link.click();
  };
  const handleRemove = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#211F20] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-1 justify-between w-38 cursor-pointer">
            <img  width="50" height="50" src="https://img.icons8.com/clouds/100/under-computer.png" alt="under-computer"/>
            <h3 className="text-xl work-sans tracking-wider font-bold text-gray-200 md:text-2xl">Sathyan.dev</h3>
          </div>
          <ul className="hidden justify-between items-center w-100 text-gray-100 md:flex">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#A5BBCB]"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#A5BBCB]"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#A5BBCB]"
            >
              Skills
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              offset={-80}
              className=" font-bold cursor-pointer hover:text-[#A5BBCB]"
            >
              Works
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" font-bold cursor-pointer hover:text-[#A5BBCB]"
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center gap-3">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="font-bold duration-200  cursor-pointer text-gray-100 flex items-center justify-between  rounded-sm bg-[#A5BBCB] px-3 py-1 text-sm md:text-md"
              onClick={handleDownload}
            >
              Resume
              {ishover ? (
                <IoCloudDownload className="ml-2 text-gray-100 duration-200" />
              ) : (
                <IoCloudDownloadOutline className="ml-2 text-gray-100  duration-200" />
              )}
            </button>
            <button
              className="md:hidden focus:outline-none cursor-pointer text-[#A5BBCB]"
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
