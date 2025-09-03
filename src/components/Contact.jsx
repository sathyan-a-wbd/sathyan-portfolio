import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import ContactImage from "../assets/Contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { IoIosMail } from "react-icons/io";
import {FaGithub } from "react-icons/fa";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation Schema
  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // stop if validation fails

    const serviceID = "service_yta4mga";
    const tempID = "template_9kc7ujg";
    const publicKey = "ZXKlh-yhq8a17keA_";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sathyan",
      message: message,
    };

    emailjs
      .send(serviceID, tempID, templateParams, publicKey)
      .then(() => {
        alert("✅ Thank you! Your mail was sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="w-full my-3 flex flex-col lg:flex-col md:flex-row items-center justify-center">
    <h1 className="text-center work-sans mb-8 text-[#A5BBCB] text-4xl font-bold inter">
       Contact Me
      </h1>
      <div className=" bg-[url('./assets/Untitled.png')] bg-cover bg-center w-[80%] md:w-[70%] shadow-md rounded-lg flex flex-col md:flex-row relative ">
        <div className="w-full flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="form flex flex-col gap-7 px-10">
            <h2 className="text-gray-100 text-3xl md:text-5xl">
              Get In Touch <br />
              <span className="text-[18px] font-poppins">
                Feel free to contact me!
              </span>
            </h2>

            <div className="input-field flex flex-col gap-6">
              {/* Name */}
              <input
                placeholder="Enter Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`p-2 rounded-md border ${errors.name ? "border-red-500" : "border-gray-400"}`}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

              {/* Email */}
              <input
                placeholder="Enter Your Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`p-2 rounded-md border ${errors.email ? "border-red-500" : "border-gray-400"}`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

              {/* Message */}
              <textarea
                placeholder="Enter your Message"
                className={`p-2 rounded-md border bg-gray-500 ${errors.message ? "border-red-500" : "border-gray-400"}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

              {/* Submit */}
              <button
                type="submit"
                className="cursor-pointer bg-[#008cffff] text-white py-2 rounded-md hover:bg-[#006bbf]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="w-full flex items-center flex-col h-full justify-between space-y-11">
          <div>
            <img src={ContactImage} alt="contact" className="hidden lg:flex md:flex sm:flex" />
          </div>
          <div className="grid gap-3">
            <a
              className="flex gap-3 font-semibold text-sm md:text-md text-[#008cffff] font-poppins items-center"
              href="mailto:sathyana3011@gmail.com?subject=Job Application&body=Hello, I would like to apply for the job..."
            >
              <div className={`border-2 border-[#008cffff] rounded-full p-3 bg-[#008cffff] shadow-inner`}>
                <IoIosMail className="text-[20px] text-[#fff]" />
              </div>
              sathyana3011@gmail.com
            </a>
            <div className="flex gap-3 font-semibold text-sm md:text-md  text-[#008cffff] font-poppins items-center">
              <div className={`border-2 border-[#008cffff] bg-[#008cffff] rounded-full p-3`}>
                <FaLocationDot className="text-[20px] text-[#fff]" />
              </div>
              Chennai
            </div>
          </div>
          <div className="flex-1 flex justify-end rounded-tl-lg rounded-br-lg w-full">
            <div className="flex px-3 py-3 items-center gap-3 rounded-tl-3xl rounded-br-lg bg-[#008cffff] text-gray-100">
              <a
                href="https://www.linkedin.com/in/sathyan-sathya3011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn role="button" size={30} className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/sathyan-a-wbd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub role="button" size={30} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
