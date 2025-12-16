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
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-orange-500 text-black hover:bg-orange-400",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black",
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
