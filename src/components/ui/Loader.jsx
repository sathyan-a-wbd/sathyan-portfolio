import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const name = "WELCOME".toUpperCase().split("");

export default function Loader({ onComplete }) {
  useEffect(() => {
    let loading = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(loading);
  }, [onComplete]);

  return (
    <div className="bg-[#010310] flex items-center justify-center h-screen w-full">
      <ReactTyped
        strings={["WELCOME", "TO THE DEV WORLD"]}
        typeSpeed={60}
        backSpeed={20}
        className="syne font-extrabold text-xl md:text-2xl lg:text-4xl tracking-wide text-[#7a8570] md:text-[1.2rem]"
      />
    </div>
  );
}
