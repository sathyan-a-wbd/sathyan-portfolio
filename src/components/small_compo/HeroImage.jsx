import React from "react";
import profile from "../../assets/sathyan-profile.webp";
import { motion } from "framer-motion";
import Tags from "./Tags";
import tags from "../../data/tags";
const HeroImage = () => {
  return (
    <>
      <div className="lg:absolute relative w-full h-screen order-1 items-end  flex justify-center overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: "true", amount: 0.2 }}
          className="flex flex-col items-center justify-center h-full w-full overflow-hidden"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="h-full w-full flex items-end justify-center"
          >
            <div className="relative ">
              <img
                src={profile}
                alt="Profile"
                style={{ marginBottom: "-20px" }}
                className=" w-[200px] sm:w-[300px] lg:w-[350px] h-auto"
              />
              {tags.map((prop, i) => (
                <Tags
                  key={i}
                  dir={prop?.dir}
                  text={prop?.text}
                  positions={prop?.position}
                />
              ))}
            </div>
          </motion.div>
          <div className="w-[700px] h-[700px] rounded-full absolute bottom-[-90%] md:bottom-[-50%] md:top-120 bg-[#23A9BD] -z-10"></div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroImage;
