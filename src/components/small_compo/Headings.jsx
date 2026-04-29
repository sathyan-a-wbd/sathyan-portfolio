import React from "react";
import Sno from "./Sno";

const Headings = ({ value, title }) => {
  return (
    <>
      <div className="flex syne items-center gap-3 text-[#A5BBCB] w-[90%] md:w-[80%] text-4xl sm:text-5xl my-15 font-bold">
        <Sno value={value} />
        {title}
        <div className="mt-3 flex-1 h-[1.3px] opacity-40 bg-[#A5BBCB]"></div>{" "}
      </div>
    </>
  );
};

export default Headings;
