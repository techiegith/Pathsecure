"use client";

import React from "react";
import VerticalNavMenu from "./VerticalNavMenu";

interface AboutDropdownProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({
  onNavigate,
  currentPage = "about"
}) => {
  const menuItems = [
    { 
      label: "Our Team", 
      isActive: currentPage === "team", 
      href: "#",
      onClick: () => onNavigate?.("team")
    },
    { 
      label: "Our Approach", 
      isActive: currentPage === "approach", 
      href: "#",
      onClick: () => onNavigate?.("approach")
    },
    { 
      label: "Careers", 
      isActive: currentPage === "careers", 
      href: "#",
      onClick: () => onNavigate?.("careers")
    }
  ];

  return (
    <div className="absolute top-full left-0 z-10" onClick={(e) => e.stopPropagation()}>
      <VerticalNavMenu items={menuItems} />
    </div>
  );
};

export default AboutDropdown; 