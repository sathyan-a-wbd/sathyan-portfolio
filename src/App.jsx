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
import SkillCard from "./components/SkillCard";
import { Toaster } from "react-hot-toast";

function App() {
  const [contactFocus, setContactFocus] = useState(false);

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
    </>
  );
}

export default App;
