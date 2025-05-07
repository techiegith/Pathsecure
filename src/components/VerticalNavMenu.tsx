"use client";

import * as React from "react";

type MenuItem = {
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
};

type VerticalNavMenuProps = {
  items?: MenuItem[];
};

const VerticalNavMenu: React.FC<VerticalNavMenuProps> = ({
  items = [
    { label: "Our Team", isActive: true, href: "#" },
    { label: "Our Approach", href: "#" },
    { label: "Careers", href: "#" }
  ]
}) => {
  return (
    <nav className="flex overflow-hidden flex-col items-start py-6 pl-2 text-lg font-semibold leading-none bg-white max-w-[214px] shadow-[0px_4px_44px_rgba(0,0,0,0.15)] text-slate-900">
      <ul className="w-full">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="w-full">
              <a
                href={item.href || "#"}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={`block gap-2.5 ml-3.5 ${item.isActive ? 'text-blue-600' : ''} w-[267px]`}
              >
                {item.label}
              </a>
            </li>
            {index < items.length - 1 && (
              <li className="shrink-0 self-stretch mt-5 h-px border border-solid border-slate-900 border-opacity-10" />
            )}
            {index < items.length - 1 && (
              <li className="mt-5"></li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNavMenu; 