"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full rounded-xl py-3.5 px-6 font-semibold text-sm tracking-wide text-white
        bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
        hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
        transform hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-200 shadow-lg hover:shadow-blue-500/30
        relative overflow-hidden group
      "
    >
      <span className="relative z-10">{label}</span>

      {/* Shine effect */}
      <div
        className="
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform -skew-x-12 -translate-x-full
          group-hover:translate-x-full transition-transform duration-1000
        "
      />
    </button>
  );
};

export default Button;
