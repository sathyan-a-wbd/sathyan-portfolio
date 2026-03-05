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
  const [downloadMsg, setDownloadMsg] = useState(false);
  const [contactFocus, setContactFocus] = useState(false);

  setTimeout(() => {
    setDownloadMsg(false);
  }, 10000);
  return (
    <>
      <NavBar
        setDownloadMsg={setDownloadMsg}
        setContactFocus={setContactFocus}
      />

      <Element name="hero">
        <Hero setDownloadMsg={setDownloadMsg} />?
        <div
          className={`fixed top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2
  w-[70%] md:w-[40%]
  backdrop-blur-lg bg-white border border-white/30
  shadow-xl rounded-xl p-6
  transition-all duration-800
  flex flex-col gap-4
  ${
    downloadMsg
      ? "opacity-100 scale-100 visible"
      : "opacity-0 scale-95 invisible pointer-events-none"
  }
`}
        >
          <p className="text-black text-center tracking-wide text-shadow-md">
            Thank you for downloading my <b>Resume</b>. I look forward to
            discussing how I can contribute to your team.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setDownloadMsg((prev) => !prev)}
              className=" cursor-pointer text-white px-5 py-1 rounded-sm bg-[#222]"
            >
              OK
            </button>
          </div>
        </div>
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
