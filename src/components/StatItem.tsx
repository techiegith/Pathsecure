"use client";

import React from "react";

interface StatItemProps {
  description: string;
  percentage: string;
}

const StatItem: React.FC<StatItemProps> = ({ description, percentage }) => {
  return (
    <article className="flex flex-col w-[240px] max-md:items-center max-md:w-full">
      <p className="text-sm leading-normal text-slate-600 mb-5 max-md:text-xs">
        {description}
      </p>
      <strong className="text-6xl font-bold text-slate-900 max-md:text-5xl max-sm:text-4xl">
        {percentage}
      </strong>
    </article>
  );
};

export default StatItem; 