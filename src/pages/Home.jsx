import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Element } from "react-scroll";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ui/ScrollToTop";
const Home = ({ setContactFocus, contactFocus }) => {
  return (
    <>
      <NavBar setContactFocus={setContactFocus} />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Element name="hero">
        <Hero />?
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>
      <Element name="works">
        <Works />
      </Element>
      <Element name="contact">
        <Contact contactFocus={contactFocus} />
      </Element>

      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Home;
