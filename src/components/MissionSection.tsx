"use client";
import * as React from "react";

/**
 * MissionSection component displays the company's mission statement with an image
 */
const MissionSection: React.FC = () => {
  return (
    <section className="box-border flex flex-row gap-8 items-center p-4 mx-auto my-0 w-full max-w-[1250px] max-md:flex-col max-md:items-center max-md:max-w-[991px] max-sm:p-2.5 max-sm:max-w-screen-sm">
      <ImageContainer />
      <MissionContent />
    </section>
  );
};

/**
 * ImageContainer component handles the left side with the blue background and image
 */
const ImageContainer: React.FC = () => {
  return (
    <div className="relative shrink-0 h-[450px] w-[500px] max-md:w-full max-md:h-[400px]">
      <div className="absolute top-0 left-0 bg-blue-600 h-[450px] w-[350px]" />
      <div className="flex absolute justify-center items-center h-[350px] left-[120px] top-[50px] w-[380px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:left-0 max-sm:w-full max-sm:h-auto">
        <img
          src="/about/mission.png"
          className="object-cover h-[350px] w-[380px] max-sm:w-full max-sm:h-auto"
          alt="Mission Image"
        />
      </div>
    </div>
  );
};

/**
 * MissionContent component displays the mission text content
 */
const MissionContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 items-start w-[500px] max-md:w-full">
      <h2 className="text-3xl font-bold text-slate-900 max-sm:text-2xl">
        <span className="text-slate-900">Our </span>
        <span className="text-blue-600">Mission</span>
      </h2>
      <p className="text-xl leading-7 text-slate-900 text-opacity-60 max-sm:text-lg max-sm:leading-6">
        <span>
          At PathSecure, our mission is to secure the digital world through
          intelligent identity solutions. We help organizations manage
          access, protect data, and stay compliant in a fast-evolving
          landscape.{" "}
        </span>
        <span className="font-bold text-slate-900">
          Our team delivers scalable IAM strategies tailored to each
          client's unique needs. We prioritize trust, innovation, and
          long-term security in every engagement.
        </span>
      </p>
    </div>
  );
};

export default MissionSection; 