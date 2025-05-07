"use client";
import * as React from "react";

/**
 * SuccessTimeline component displays company milestones in a vertical timeline
 */
const SuccessTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-400"></div>
      
      {/* Timeline years with content */}
      <div className="space-y-24">
        {/* 2017 - Modified to match even years layout */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h3 className="text-6xl font-bold text-white">2017</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h4 className="text-xl font-bold text-white mb-1">Founded</h4>
              <p className="text-blue-200 max-w-md">
                PathSecure IAM Consulting is established with a focus on delivering identity and access management solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* 2018 */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h4 className="text-xl font-bold text-white mb-1">First Enterprise IAM Deployment</h4>
              <p className="text-blue-200 max-w-md ml-auto">
                Successfully implemented a scalable IAM system for a Fortune 500 financial institution.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h3 className="text-6xl font-bold text-white">2018</h3>
            </div>
          </div>
        </div>
        
        {/* 2019 - Year on left, content on right */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h3 className="text-6xl font-bold text-white">2019</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h4 className="text-xl font-bold text-white mb-1">Expanded Into Cloud Security Services</h4>
              <p className="text-blue-200 max-w-md">
                Launched specialized services for cloud IAM and hybrid architecture scenarios.
              </p>
            </div>
          </div>
        </div>
        
        {/* 2020 */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h4 className="text-xl font-bold text-white mb-1">First Enterprise IAM Deployment</h4>
              <p className="text-blue-200 max-w-md ml-auto">
                Successfully implemented a scalable IAM solution for a major educational institution.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h3 className="text-6xl font-bold text-white">2020</h3>
            </div>
          </div>
        </div>
        
        {/* 2021 - Year on left, content on right */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h3 className="text-6xl font-bold text-white">2021</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h4 className="text-xl font-bold text-white mb-1">Global Client Reach</h4>
              <p className="text-blue-200 max-w-md">
                Expanded services across North America, Europe, and Asia-Pacific regions, serving clients in 15+ countries.
              </p>
            </div>
          </div>
        </div>
        
        {/* 2022 */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h4 className="text-xl font-bold text-white mb-1">Recognized as Top IAM Consultancy</h4>
              <p className="text-blue-200 max-w-md ml-auto">
                Named among the top 10 IAM consulting firms by Cybersecurity Review.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h3 className="text-6xl font-bold text-white">2022</h3>
            </div>
          </div>
        </div>
        
        {/* 2023 - Year on left, content on right */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h3 className="text-6xl font-bold text-white">2023</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h4 className="text-xl font-bold text-white mb-1">Launched Zero Trust Framework Offering</h4>
              <p className="text-blue-200 max-w-md">
                Introduced a full-stack zero trust IAM offering tailored for finance and healthcare sectors.
              </p>
            </div>
          </div>
        </div>
        
        {/* 2024 */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 text-right">
            <div className="mr-8">
              <h4 className="text-xl font-bold text-white mb-1">Integrated AI Into Identity Governance</h4>
              <p className="text-blue-200 max-w-md ml-auto">
                Deployed AI-driven anomaly detection for identity threats and advanced IAM analytics.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
          </div>
          <div className="col-span-2 text-left">
            <div className="ml-8">
              <h3 className="text-6xl font-bold text-white">2024</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessTimeline; 