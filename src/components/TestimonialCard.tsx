"use client";
import React from "react";
import QuoteIcon from "./QuoteIcon";

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  position: string;
  imageSrc: string;
  variant?: "light" | "dark";
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  position,
  imageSrc,
  variant = "light",
  className = "",
}) => {
  const isDark = variant === "dark";

  return (
    <figure
      className={`
        flex overflow-hidden flex-col items-start px-6 pt-14 pb-7
        border border-solid border-slate-900 border-opacity-10
        rounded-[32px] min-w-60 w-[318px] grow shrink
        ${isDark ? 'bg-blue-950' : 'bg-neutral-100'}
        ${className}
        max-md:px-5
      `}
    >
      <QuoteIcon className={`z-10 text-8xl font-medium leading-none text-blue-600 max-md:text-4xl`} />

      <blockquote className={`
        self-stretch text-xl font-medium leading-7
        ${isDark ? 'text-white' : 'text-slate-900'}
      `}>
        {testimonial}
      </blockquote>

      <figcaption className="flex gap-2.5 items-center mt-14 max-md:mt-10">
        <div className="flex overflow-hidden relative flex-col items-center self-stretch my-auto aspect-square h-[70px] rounded-[130px] w-[70px]">
          <img
            src={imageSrc}
            alt={`${name}'s profile`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="self-stretch my-auto w-[202px]">
          <h3 className={`
            text-2xl font-semibold leading-none
            ${isDark ? 'text-white' : 'text-black'}
          `}>
            {name}
          </h3>
          <p className={`
            mt-1.5 text-lg font-medium leading-7
            ${isDark ? 'text-white' : 'text-slate-900'}
          `}>
            {position}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard; 