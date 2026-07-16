import React from "react";

const Button = ({
  children,
  onClick,
  icon,
  variant = "secondary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-[#23A9BD] text-black border border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(35,169,189,0.4)]",

    secondary:
      "border border-white/15 text-white hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400",
  };

  return (
    <button
      onClick={onClick}
      className={`
        dm-mono
        flex
        items-center
        justify-center
        gap-3
        rounded-md
        md:px-6
        md:py-4
        px-4
        py-2
        text-[8px]
        sm:text-sm
        font-medium
        uppercase
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/40
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}

      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </button>
  );
};

export default Button;
