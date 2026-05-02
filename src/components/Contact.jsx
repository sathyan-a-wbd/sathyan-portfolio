import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import ContactImage from "../assets/Contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Headings from "./small_compo/Headings";
import toast from "react-hot-toast";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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
        toast.success("Thank you! Your mail was sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.text || "Failed to send message");
      });
  };

  return (
    <section className="w-full my-3 flex flex-col lg:flex-col md:flex-col sm:flex-col items-center justify-center">
      <Headings value={"04"} title={"Contact Me "} />
      <div className="  w-full lg:w-[70%] shadow-md rounded-lg flex flex-col lg:flex-row relative ">
        <div className="w-full flex flex-col gap-8 justify-center">
          <form
            onSubmit={handleSubmit}
            className="form flex flex-col gap-7 px-5"
          >
            {/* bg-[url('./assets/Untitled.png')] */}
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-3">
              Get In<span className="text-[#00b7ff] ml-2">Touch</span>
            </h2>

            <span className="text-[14px] text-[#7a8570] lora font-poppins">
              Feel free to contact me!
            </span>

            <div className="input-field flex flex-col gap-6">
              {/* Name */}
              <input
                placeholder="Enter Your Name"
                type="text"
                value={name}
                className="px-4 py-4 rounded-md bg-white/10 border-white/20 border outline-none focus:border-[#23A9BD] text-white/60"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}

              {/* Email */}
              <input
                placeholder="Enter Your Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-4 rounded-md bg-white/10 border-white/20 border outline-none focus:border-[#23A9BD] text-white/60"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}

              {/* Message */}
              <textarea
                placeholder="Enter your Message"
                className="px-4 py-4 rounded-md bg-white/10 border-white/20 border outline-none focus:border-[#23A9BD] text-white/60"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="cursor-pointer py-4 bg-[#009cffff] uppercase dm-mono text-white  rounded-md hover:bg-[#008cffff] hover:-translate-y-2  hover:scale-105 duration-200 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side */}

        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 p-6 md:p-10">
          {/* Contact Details Card */}
          <div className="flex-1 w-full max-w-lg bg-[#08111f]/70 backdrop-blur-lg border border-[#1b2b45] rounded-3xl p-8 shadow-2xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-3">
              Let’s <span className="text-[#00b7ff]">Connect</span>
            </h2>

            <p className="text-gray-400 font-poppins text-sm md:text-base leading-relaxed mb-8">
              I’m currently open to Frontend Developer, React Developer, and
              Full Stack opportunities. Feel free to reach out for
              collaborations, freelance work, or job discussions.
            </p>

            {/* Email */}
            <a
              href="mailto:sathyana3011@gmail.com?subject=Job Opportunity&body=Hello Sathyan,"
              className="group flex items-center gap-4 mb-5"
            >
              <div className="p-4 rounded-2xl bg-[#00b7ff]/10 border border-[#00b7ff]/30 group-hover:bg-[#00b7ff] transition duration-300">
                <IoIosMail className="text-[#00b7ff] group-hover:text-white text-2xl hover:-translate-y-2  hover:scale-105 duration-200 transition-all" />
              </div>
              <div>
                <h4 className="text-white font-semibold font-poppins">Email</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  sathyana3011@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 mb-8 ">
              <div className="p-4 rounded-2xl bg-[#00b7ff]/10 border border-[#00b7ff]/30">
                <FaLocationDot className="text-[#00b7ff] text-2xl hover:-translate-y-2  hover:scale-105 duration-200 transition-all" />
              </div>
              <div>
                <h4 className="text-white font-semibold font-poppins">
                  Location
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Chennai, India
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/sathyan-sathya3011"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0e1a2d] border border-[#223552] hover:bg-[#00b7ff]  duration-300 hover:-translate-y-2  hover:scale-105 transition-all"
              >
                <FaLinkedinIn size={24} className="text-white" />
              </a>

              <a
                href="https://github.com/sathyan-a-wbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0e1a2d] border border-[#223552] hover:bg-[#00b7ff] hover:-translate-y-2  hover:scale-105 duration-200 transition-all"
              >
                <FaGithub size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
