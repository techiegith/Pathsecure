import React, { useState, useRef, useEffect } from "react";

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  dropdownImageUrl?: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  hasDropdown = false,
  dropdownImageUrl,
  isActive = false,
  onClick,
  children
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (hasDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="relative inline-block"
      ref={dropdownRef}
      style={{ position: 'relative', zIndex: isDropdownOpen ? 9999 : 1 }}
    >
      <div 
        className={`flex gap-px items-center self-stretch my-auto ${!hasDropdown ? 'whitespace-nowrap' : ''} cursor-pointer`}
        onClick={handleClick}
      >
        <span 
          className={`self-stretch my-auto ${isActive ? 'text-blue-600' : 'text-neutral-100'}`}
        >
          {label}
        </span>
        {hasDropdown && (
          dropdownImageUrl ? (
            <img
              src={dropdownImageUrl}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
            />
          ) : (
            <svg 
              className="ml-1 w-[10px] h-[6px]"
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1L5 5L9 1" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )
        )}
      </div>
      
      {isDropdownOpen && hasDropdown && (
        <div 
          className="absolute left-0 mt-1 rounded-md shadow-lg z-[9999]"
          style={{
            width: '220px',
            top: '100%',
            border: '3px solid #3b82f6',
            backgroundColor: '#EBF5FF',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default NavItem; 