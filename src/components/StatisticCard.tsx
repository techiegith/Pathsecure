import React from "react";

interface StatisticCardProps {
  percentage: string;
  description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ percentage, description }) => {
  return (
    <article className="flex flex-col gap-8 items-center w-full max-w-[300px]">
      <h3 className="text-6xl font-bold text-blue-600 max-md:text-5xl max-sm:text-4xl">
        {percentage}
      </h3>
      <p className="text-base text-center text-white text-opacity-70 max-md:text-sm max-sm:text-xs">
        {description}
      </p>
    </article>
  );
};

export default StatisticCard; 