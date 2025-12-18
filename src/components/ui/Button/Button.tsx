import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base = `
    inline-flex items-center justify-center gap-1
    w-[200px] h-[48px]
    rounded-full
    font-quicksand font-semibold
    text-[14px] leading-[20px]
    transition-all duration-300
  `;

  const variants = {
    primary: `
      bg-[#FF623E]
      text-white
      shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)]
      hover:brightness-110
    `,
    outline: `
      border border-[#FF623E]
      text-[#FF623E]
      hover:bg-[#FF623E]
      hover:text-white
    `,
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
