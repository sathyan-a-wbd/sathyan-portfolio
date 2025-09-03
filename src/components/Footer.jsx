import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import {MdCopyright} from "react-icons/md";
function Footer(){
	
return(

	<section className="w-full shadow-xl shadow-[#fff] mt-10">
	<div className="flex justify-center items-center">
		<div className="flex-col flex md:flex-row w-[80%] gap-4 items-center justify-between text-gray-100 text-sm py-4">
			<div>
				<p className="text-[15px] font-extrabold poppins-regular-italic tracking-wider text-gray-400">"Building Learning Improving"</p>
			</div>
		 <div>
		
           		<ul className="flex items-center gap-3 inter">
           			<h2 className="text-gray-300 font-bold">Quick Links :</h2>
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
			</div>
			<div className="flex items-center gap-3">
			
			     <a
              className="flex gap-3 font-semibold text-md  font-poppins items-center"
              href="mailto:sathyana3011@gmail.com?subject=Job Application&body=Hello, I would like to apply for the job..."
            >
             <MdAlternateEmail role="button" size={30} className="cursor-pointer hover:text-gray-400"/> 
            </a>
				    <a
                href="https://www.linkedin.com/in/sathyan-sathya3011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn role="button" size={30} className="cursor-pointer hover:text-gray-400" />
              </a>
              <a
                href="https://github.com/sathyan-a-wbd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub role="button" size={30} className="cursor-pointer hover:text-gray-400" />
              </a>
			</div>
		</div>
		
	</div>
	<h2 className="text-gray-100 text-center text-xs font-bold tracking-wider poppins-regular">© 2025 Sathyan.dev  All Rights Reserved</h2>
	</section>
);
}
export default Footer;