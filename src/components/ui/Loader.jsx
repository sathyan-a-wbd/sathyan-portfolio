import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "SATHYAN".split("");

export default function Loader({ onComplete }) {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setZoom(true);
    }, 2600);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <motion.section
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[999]"
      animate={
        zoom ?
          {
            backgroundColor: "#ffffff",
          }
        : {}
      }
      transition={{
        duration: 0.8,
      }}
    >
      <motion.div
        animate={
          zoom ?
            {
              scale: 40,
            }
          : {}
        }
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="flex flex-col items-center"
      >
        <div className="flex">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                x: -1000,
                opacity: 0,
                skewX: -25,
              }}
              animate={{
                x: 0,
                opacity: 1,
                skewX: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 220,
                damping: 13,
              }}
              className="text-white font-black italic text-4xl md:text-8xl lg:text-8xl syne"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Line */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            delay: 1.4,
            duration: 0.6,
          }}
          className="h-[4px] bg-cyan-400 rounded-full mt-4"
        />

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.8,
            duration: 0.6,
          }}
          className="text-gray-300 mt-6 text-lg md:text-2xl tracking-[8px] uppercase"
        >
          Full Stack Developer
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
