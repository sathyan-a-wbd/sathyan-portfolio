import React from "react";
import Sno from "./Sno";

const Headings = ({ value, title, cSize }) => {
  return (
    <div
      style={{ fontSize: cSize || "" }}
      className={`
        flex items-center gap-3 
        text-[#A5BBCB] italic 
        w-[90%] md:w-[80%] 
        my-15 font-extrabold syne
        flex-nowrap whitespace-nowrap
        text-xl sm:text-4xl md:text-5xl
      `}
    >
      <div className="mb-4">
        <Sno value={value} />
      </div>

      <span
        style={{
          fontSize: cSize || "clamp(1.25rem, 5vw, 2.5rem)",
          whiteSpace: "nowrap",
        }}
        className="flex-shrink-0 tracking-tight syne font-extrabold"
      >
        {title}
      </span>

      <div className="h-[1.2px] flex-1 opacity-30 bg-[#A5BBCB] min-w-[20px]"></div>
    </div>
  );
};

export default Headings;
