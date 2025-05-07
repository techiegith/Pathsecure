import * as React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="gap-2.5 self-stretch px-2.5 py-3 my-auto text-lg bg-blue-600 rounded-[60px] w-[143px] text-center"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button; 