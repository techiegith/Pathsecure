"use client";
import * as React from "react";

/**
 * TrustedPartners component displays a section with partner logos
 * and a heading highlighting trusted partnerships
 */
const TrustedPartners: React.FC = () => {
  return (
    <section className="flex flex-col">
      <h2 className="self-center text-6xl font-bold text-center text-slate-900 w-[899px] max-md:max-w-full max-md:text-4xl">
        Our <span className="text-[#2962ff]">Trusted Partners</span> Whom we <br />
        have worked with
      </h2>
      <div className="flex flex-col items-center px-16 mt-6 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1440px] max-md:max-w-full">
          <img
            src="/images/Logo 1.png"
            alt="Dental Services"
            className="object-contain shrink-0 self-stretch my-auto bg-blend-normal aspect-[0.89] w-[87px]"
          />
          <img
            src="/images/Logo 2.png"
            alt="Proclean - Waste Disposal Management"
            className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-normal aspect-[4.15] w-[303px]"
          />
          <img
            src="/images/Logo 3.png"
            alt="ProtectMe - Health Insurance"
            className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-normal aspect-[3.13] w-[307px]"
          />
          <img
            src="/images/Logo 4.png"
            alt="Peduli - Charity Foundation"
            className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-normal aspect-[3.11] w-[304px]"
          />
          <img
            src="/images/Logo 5.png"
            alt="PC Business Solutions"
            className="object-contain shrink-0 self-stretch max-w-full bg-blend-normal aspect-[0.8] w-[101px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners; 