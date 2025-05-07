import React from "react";
import StatisticCard from "./StatisticCard";

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      percentage: "98%",
      description: "Successful IAM Implementations Enhancing Security & Compliance"
    },
    {
      percentage: "95%",
      description: "Reduction in Security Breaches with Our Innovative & Best Solutions"
    },
    {
      percentage: "80%",
      description: "Faster Deployment of IAM Strategies Compared to Industry Standards"
    }
  ];

  return (
    <section className="box-border flex flex-col justify-center items-center py-24 w-full text-white">
      <div className="w-full px-5">
        <p className="mb-20 text-lg font-medium leading-normal max-md:text-base max-sm:text-sm text-center">
          At PathSecure IAM Consulting, we specialize in helping businesses
          navigate the complexities of identity and access management (IAM),
          cloud security, and digital transformation.
        </p>
        <div className="flex flex-row justify-between w-full max-md:justify-center max-md:gap-16 max-sm:flex-col max-sm:items-center max-sm:gap-10">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              percentage={stat.percentage}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection; 