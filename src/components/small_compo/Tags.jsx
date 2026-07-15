import React from "react";
import {
  BsArrowReturnLeft,
  BsArrow90DegLeft,
  BsArrow90DegRight,
  BsArrowReturnRight,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Tags = ({ dir, text, positions }) => {
  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },

    popup: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.4,
      },
    },

    floating: {
      y: [0, -5, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={tagVariants}
      initial="hidden"
      whileInView="popup"
      animate="floating"
      viewport={{ once: true, amount: 0.1 }}
      className={`absolute flex items-center gap-2 ${positions}`}
    >
      {dir === "right" && (
        <BsArrow90DegRight color="grey" className="text-gray-500" />
      )}
      {dir === "up" && (
        <BsArrowReturnRight color="grey" className="text-gray-500" />
      )}

      <span className="rounded-md bg-[#23A9BD] z-20 px-4 py-2 text-[10px] md:text-xs font-medium text-white shadow-lg whitespace-nowrap">
        {text}
      </span>

      {dir === "left" && (
        <BsArrow90DegLeft color="grey" className="text-gray-500" />
      )}
      {dir === "down" && (
        <BsArrowReturnLeft color="grey" className="text-gray-500" />
      )}
    </motion.div>
  );
};

export default Tags;
