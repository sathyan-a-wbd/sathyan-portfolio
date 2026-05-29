import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            fixed bottom-6 right-6 z-[100]
            w-14 h-14 rounded-full
            bg-cyan-400 text-black
            shadow-lg shadow-cyan-500/30
            flex items-center justify-center

            transform-gpu will-change-transform
          "
          aria-label="Scroll to top"
        >
          <FaAngleUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
