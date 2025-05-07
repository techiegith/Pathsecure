"use client";
import * as React from "react";

/**
 * VisionSection component displays the company's vision statement with an image
 */
const VisionSection: React.FC = () => {
  return (
    <section className="box-border flex flex-row-reverse gap-8 items-center p-4 mx-auto my-0 w-full max-w-[1250px] max-md:flex-col max-md:items-center max-md:max-w-[991px] max-sm:p-2.5 max-sm:max-w-screen-sm">
      <ImageContainer />
      <VisionContent />
    </section>
  );
};

/**
 * ImageContainer component handles the right side with the blue background and image
 */
const ImageContainer: React.FC = () => {
  return (
    <div className="relative shrink-0 h-[450px] w-[500px] max-md:w-full max-md:h-[400px]">
      <div className="absolute top-0 right-0 bg-blue-600 h-[450px] w-[350px]" />
      <div className="flex absolute justify-center items-center h-[350px] right-[120px] top-[50px] w-[380px] max-md:right-2/4 max-md:translate-x-2/4 max-sm:right-0 max-sm:w-full max-sm:h-auto">
        <img
          src="/about/vision.png"
          className="object-cover h-[350px] w-[380px] max-sm:w-full max-sm:h-auto"
          alt="Vision Image"
        />
      </div>
    </div>
  );
};

/**
 * VisionContent component displays the vision text content
 */
const VisionContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 items-start w-[500px] max-md:w-full">
      <h2 className="text-3xl font-bold text-slate-900 max-sm:text-2xl">
        <span className="text-slate-900">Our </span>
        <span className="text-blue-600">Vision</span>
      </h2>
      <p className="text-xl leading-7 text-slate-900 text-opacity-60 max-sm:text-lg max-sm:leading-6">
        <span>
          To be a global leader in identity and access management solutions.
          We envision a future where digital access is seamless, smart, and trusted.{" "}
        </span>
        <span className="font-bold text-slate-900">
          Through innovation and expertise, we aim to redefine how organizations 
          protect identities. Empowering businesses to thrive securely in an 
          increasingly connected world.
        </span>
      </p>
    </div>
  );
};

export default VisionSection; 