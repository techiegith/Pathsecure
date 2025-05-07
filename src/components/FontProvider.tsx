"use client";

import React from "react";

const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Raleway:wght@400;500&display=swap"
      />
      {children}
    </>
  );
};

export default FontProvider; 