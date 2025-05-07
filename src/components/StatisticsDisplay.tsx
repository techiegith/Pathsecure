"use client";

import React from "react";
import FontProvider from "./FontProvider";
import StatisticsSection from "./StatisticsSection";

const StatisticsDisplay: React.FC = () => {
  return (
    <FontProvider>
      <StatisticsSection />
    </FontProvider>
  );
};

export default StatisticsDisplay; 