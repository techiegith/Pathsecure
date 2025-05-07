"use client";
import React from "react";

interface QuoteIconProps {
  className?: string;
}

const QuoteIcon: React.FC<QuoteIconProps> = ({ className = "" }) => {
  return (
    <span className={`text-4xl font-serif leading-none ${className}`} aria-hidden="true">
      "
    </span>
  );
};

export default QuoteIcon; 