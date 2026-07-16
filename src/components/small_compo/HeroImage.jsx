import React from "react";
import profile from "../../assets/sathyan-profile.webp";
import { motion } from "framer-motion";
import Tags from "./Tags";
import tags from "../../data/tags";
const HeroImage = () => {
  return (
    <>
      <div className="lg:absolute relative w-full h-screen sm:h-screen items-end flex justify-center overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: "true", amount: 0.2 }}
          className="flex flex-col md:mb-0 mb-4 items-center sm:items-end justify-center h-full w-full overflow-hidden"
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
                className=" w-[200px] sm:w-[350px] md:w-[350px] lg:w-[350px] h-auto"
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
            <div className=" w-[640px] h-[640px] md:w-[700px] md:h-[700px] rounded-full -bottom-140 absolute  bg-[#23A9BD] -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroImage;
