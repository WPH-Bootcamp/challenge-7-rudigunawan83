import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) => {
  const base =
    "rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-orange-500 text-black hover:bg-orange-400",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
