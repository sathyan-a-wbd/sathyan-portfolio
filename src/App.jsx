import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import Works from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Element name="hero">
        <Hero />
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
        <Contact />
      </Element>
      <Footer/>
    </>
  );
}

export default App;
