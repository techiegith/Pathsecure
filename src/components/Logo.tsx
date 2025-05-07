import * as React from "react";

interface LogoProps {
  logoSrc?: string;
  logoAlt?: string;
}

const Logo: React.FC<LogoProps> = ({
  logoSrc = "/path-secure-logo.png",
  logoAlt = "Pathsecure Logo"
}) => {
  return (
    <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-60">
        {logoSrc && (
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-12 w-auto object-contain"
          />
        )}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl">
            Pathsecure
          </h1>
          <p className="mt-2.5 text-sm">
            ...your trusted path to secure access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo; 