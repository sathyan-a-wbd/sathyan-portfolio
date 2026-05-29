import React, { useState, useEffect, useRef, useCallback, memo } from "react";

import emailjs from "@emailjs/browser";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { IoIosMail } from "react-icons/io";

import toast from "react-hot-toast";

import Headings from "./small_compo/Headings";

function Contact() {
  const sectionRef = useRef(null);

  const [animate, setAnimate] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
        threshold: 0.15,
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validate()) return;

      setLoading(true);

      try {
        await emailjs.send(
          "service_yta4mga",
          "template_9kc7ujg",
          {
            from_name: formData.name,
            from_email: formData.email,
            to_name: "Sathyan",
            message: formData.message,
          },
          "ZXKlh-yhq8a17keA_",
        );

        toast.success("Thank you! Your message was sent successfully.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setErrors({});
      } catch (error) {
        console.log(error);

        toast.error("Failed to send message");
      } finally {
        setLoading(false);
      }
    },
    [formData],
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="my-10 flex w-full flex-col items-center justify-center overflow-hidden px-5"
    >
      <Headings value={"04"} title={"Contact Me"} />

      <div className="mt-10 flex w-full max-w-6xl flex-col gap-8 lg:flex-row">
        {/* Form */}

        <div
          className={`w-full rounded-3xl border border-white/10 bg-[#08111f]/60 p-7 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-1000

          ${animate ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
          `}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <h2
                id="contact-heading"
                className="text-3xl font-bold text-white md:text-4xl"
              >
                Get In
                <span className="ml-2 text-[#00b7ff]">Touch</span>
              </h2>

              <p className="mt-3 text-sm text-[#7a8570]">
                Feel free to contact me anytime.
              </p>
            </div>

            {/* Name */}

            <div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}

            <div>
              <textarea
                rows={6}
                name="message"
                placeholder="Enter your Message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-cyan-400"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="dm-mono rounded-xl bg-[#009cff] py-4 text-sm uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#008ae6] hover:shadow-[0_0_25px_rgba(0,156,255,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Card */}

        <div
          className={`flex w-full items-center justify-center transition-all delay-200 duration-1000

          ${animate ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
          `}
        >
          <div className="w-full rounded-3xl border border-[#1b2b45] bg-[#08111f]/70 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let’s
              <span className="ml-2 text-[#00b7ff]">Connect</span>
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              I’m currently open to Frontend Developer, React Developer, and
              Full Stack opportunities. Feel free to reach out for
              collaborations, freelance work, or job discussions.
            </p>

            {/* Email */}

            <a
              href="mailto:sathyana3011@gmail.com"
              className="group mt-10 flex items-center gap-4"
            >
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 transition-all duration-300 group-hover:bg-cyan-400">
                <IoIosMail className="text-2xl text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Email</h4>

                <p className="text-sm text-gray-400 md:text-base">
                  sathyana3011@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}

            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <FaLocationDot className="text-2xl text-cyan-400 transition-all duration-300 hover:scale-110" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Location</h4>

                <p className="text-sm text-gray-400 md:text-base">
                  Chennai, India
                </p>
              </div>
            </div>

            {/* Social */}

            <div className="mt-10 flex gap-5">
              <a
                href="https://www.linkedin.com/in/sathyan-sathya3011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-2xl border border-[#223552] bg-[#0e1a2d] p-4 transition-all duration-300 hover:-translate-y-1 md:hover:bg-[#00b7ff]"
              >
                <FaLinkedinIn size={24} className="text-white" />
              </a>

              <a
                href="https://github.com/sathyan-a-wbd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="rounded-2xl border border-[#223552] bg-[#0e1a2d] p-4 transition-all duration-300 hover:-translate-y-1 md:hover:bg-[#00b7ff]"
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

export default memo(Contact);
