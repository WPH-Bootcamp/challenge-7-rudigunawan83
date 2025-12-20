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
    whitespace-nowrap

    transition-all duration-300 ease-out
    active:scale-[0.97]
  `;

  const variants = {
    primary: `
      text-white

      bg-gradient-to-r
      from-[#FF7A4D]
      to-[#FF623E]

      hover:bg-[#FF623E]
      hover:from-[#FF623E]
      hover:to-[#FF623E]

      shadow-[0_6px_16px_rgba(255,98,62,0.35)]
      hover:shadow-[0_8px_20px_rgba(255,98,62,0.45)]
    `,
    outline: `
      border border-[#FF623E]
      text-[#FF623E]

      hover:bg-[#FF623E]
      hover:text-white

      transition-colors
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
