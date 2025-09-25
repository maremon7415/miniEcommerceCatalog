// src/components/ui/Button.tsx
"use client";

import React from "react";

interface ButtonType {
  name: string;
}

interface ButtonProps {
  button: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ button }) => {
  return (
    <button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group">
      <span className="relative z-10">{button.name}</span>

      {/* Button shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
};

export default Button;
