import React from "react";

const SkillCard = ({ heading, subheading, skills = [], isVisible, index }) => {
  return (
    <div
      className={`w-full transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-white/10 bg-[#ffffff0a] p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl">
        <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />

        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">
            {heading}
          </h2>
          <p className="text-[15px] font-medium text-white/80">{subheading}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="inline-block whitespace-nowrap rounded border border-blue-400/20 bg-blue-500/5 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-tighter text-blue-400 transition-all hover:bg-blue-500/15 hover:text-blue-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
