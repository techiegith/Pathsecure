"use client";
import * as React from "react";
import NavBar from "./NavBar";

interface PathsecureNavigationProps {
  logoSrc?: string;
  logoAlt?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const PathsecureNavigation: React.FC<PathsecureNavigationProps> = ({
  logoSrc,
  logoAlt,
  onNavigate,
  currentPage
}) => {
  return <NavBar 
    logoSrc={logoSrc} 
    logoAlt={logoAlt} 
    onNavigate={onNavigate}
    currentPage={currentPage}
  />;
};

export default PathsecureNavigation; 