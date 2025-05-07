"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Button from "./Button";

interface NavBarProps {
  logoSrc?: string;
  logoAlt?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  logoSrc,
  logoAlt,
  onNavigate,
  currentPage = 'home'
}) => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  
  const aboutButtonRef = useRef<HTMLDivElement>(null);
  const aboutArrowRef = useRef<HTMLImageElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const industriesButtonRef = useRef<HTMLDivElement>(null);
  const industriesArrowRef = useRef<HTMLImageElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const servicesArrowRef = useRef<HTMLImageElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesButtonRef = useRef<HTMLDivElement>(null);
  const resourcesArrowRef = useRef<HTMLImageElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      // Check if the click is outside both the dropdown and the About Us button
      if (
        aboutDropdownOpen && 
        aboutButtonRef.current && 
        aboutDropdownRef.current &&
        !aboutButtonRef.current.contains(event.target as Node) &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      
      // Check if the click is outside both the dropdown and the Industries button
      if (
        industriesDropdownOpen && 
        industriesButtonRef.current && 
        industriesDropdownRef.current &&
        !industriesButtonRef.current.contains(event.target as Node) &&
        !industriesDropdownRef.current.contains(event.target as Node)
      ) {
        setIndustriesDropdownOpen(false);
      }
      
      // Check if the click is outside both the dropdown and the Services button
      if (
        servicesDropdownOpen && 
        servicesButtonRef.current && 
        servicesDropdownRef.current &&
        !servicesButtonRef.current.contains(event.target as Node) &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      
      // Check if the click is outside both the dropdown and the Resources button
      if (
        resourcesDropdownOpen && 
        resourcesButtonRef.current && 
        resourcesDropdownRef.current &&
        !resourcesButtonRef.current.contains(event.target as Node) &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    };
    
    // Add event listener for mousedown
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdownOpen, industriesDropdownOpen, servicesDropdownOpen, resourcesDropdownOpen]);

  // Handle Industries arrow click
  const handleIndustriesArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent
    setIndustriesDropdownOpen(!industriesDropdownOpen);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  };
  
  // Handle About Us arrow click
  const handleAboutArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent
    setAboutDropdownOpen(!aboutDropdownOpen);
    setIndustriesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  // Handle Services arrow click
  const handleServicesArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent
    setServicesDropdownOpen(!servicesDropdownOpen);
    setIndustriesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  // Handle Resources arrow click
  const handleResourcesArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent
    setResourcesDropdownOpen(!resourcesDropdownOpen);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  // Dropdown item style
  const dropdownItemStyle = {
    color: '#333333',
    padding: '8px 30px',
    cursor: 'pointer',
    fontWeight: 500 as const,
    borderBottom: '1px solid #f0f0f0',
    fontSize: '15px',
    display: 'block',
    textAlign: 'left' as const,
    position: 'relative' as const,
    zIndex: 1,
    width: '100%'
  };
  
  const lastItemStyle = {
    ...dropdownItemStyle,
    borderBottom: 'none',
  };

  // Shared dropdown container style
  const dropdownContainerStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    borderRadius: '8px',
    zIndex: 9999,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
    border: '1px solid #e2e8f0',
    marginTop: '8px',
    overflow: 'visible',
    display: 'block',
    pointerEvents: 'auto' as const,
    opacity: 1,
    minWidth: '220px'
  };

  return (
    <header className="flex overflow-visible flex-col justify-center items-center px-16 py-10 font-medium text-white bg-blue-950 max-md:px-5" style={{ position: 'relative', zIndex: 10 }}>
      <nav className="flex flex-wrap gap-10 items-center max-md:max-w-full" style={{ position: 'relative' }}>
          <Logo logoSrc={logoSrc} logoAlt={logoAlt} />
        <div className="flex flex-wrap gap-6 items-center self-stretch my-auto text-lg min-w-60 max-md:max-w-full" style={{ position: 'relative' }}>
          <div 
            className="cursor-pointer"
            style={{ color: currentPage === 'home' ? '#3b82f6' : 'white' }}
            onClick={() => handleNavClick('home')}
          >
            Home
          </div>
          <div 
            ref={servicesButtonRef}
            className="flex items-center gap-1 relative"
            style={{ 
              color: currentPage === 'services' ? '#3b82f6' : 'white',
              position: 'relative',
              zIndex: 50
            }}
          >
            <div 
              className="cursor-pointer"
              onClick={() => handleNavClick('services')}
            >
              Services
            </div>
            <img
              ref={servicesArrowRef}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/85bb25697867efb0adb89c52c8c5359d9add02cc?placeholderIfAbsent=true"
              alt=""
              className="object-contain w-[25px] cursor-pointer"
              onClick={handleServicesArrowClick}
            />
            {servicesDropdownOpen && (
              <div 
                ref={servicesDropdownRef}
                style={{
                  ...dropdownContainerStyle,
                  width: '320px',
                }}
                className="services-dropdown"
              >
                <div className="service-item active">
                  <div 
                    style={{
                      ...dropdownItemStyle,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 20px',
                    }}
                    onClick={() => {
                      handleNavClick('iam');
                      setServicesDropdownOpen(false);
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="16" r="1" fill="#3182CE"/>
                      </svg>
                      Identity & Access Management
                    </div>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L10 8L6 12" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{ paddingLeft: '46px', paddingBottom: '12px' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#3182CE', fontWeight: 500 }}>IAM Strategy & Implementation</li>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#4A5568' }}>Multi Factor Authentication</li>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#4A5568' }}>Privileged Access Management</li>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#4A5568' }}>Identity Governance</li>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#4A5568' }}>Zero Trust Architecture</li>
                      <li style={{ padding: '5px 0', fontSize: '14px', color: '#4A5568' }}>Directory Services</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 20px',
                  }}
                  onClick={() => {
                    handleNavClick('cloud-security');
                    setServicesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 19H9C6.79086 19 5 17.2091 5 15C5 12.7909 6.79086 11 9 11C9.12501 11 9.24924 11.0049 9.37235 11.0147C9.86733 9.26097 11.509 8 13.5 8C16.0383 8 18.1 10.0118 18.1 12.5C18.1 12.671 18.0891 12.8395 18.0677 13.0051C18.3293 13.0175 18.5848 13.0613 18.831 13.1355C19.872 13.4365 20.7681 14.1061 21.3739 15H18.1C18.0338 15 17.9683 15.0058 17.9037 15.0171C17.6621 13.6243 16.4396 12.5 15 12.5C13.3475 12.5 12.0117 13.8733 12.0117 15.5625C12.0117 17.2517 13.3475 18.625 15 18.625C16.0713 18.625 17.0012 18.0451 17.5 17.1982V19ZM15.0483 17C14.2159 17 13.5414 16.3287 13.5414 15.5C13.5414 14.6713 14.2159 14 15.0483 14C15.8807 14 16.5552 14.6713 16.5552 15.5C16.5552 16.3287 15.8807 17 15.0483 17Z" fill="#3182CE"/>
                    </svg>
                    Cloud Security & Zero Trust
                  </div>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div
                  style={{
                    ...lastItemStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 20px',
                  }}
                  onClick={() => {
                    handleNavClick('security-program');
                    setServicesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M20.618 5.984C18.4539 5.99362 16.3016 5.67408 14.233 5.035C13.1635 4.70028 12.0401 4.52185 10.909 4.507C9.77797 4.49183 8.64969 4.64379 7.567 4.957C7.1402 5.0877 6.7426 5.30224 6.40015 5.58938C6.0577 5.87652 5.77741 6.23075 5.57693 6.62775C5.37644 7.02475 5.25997 7.45628 5.23479 7.9C5.20961 8.34373 5.27619 8.78823 5.432 9.208L8.692 19.482C8.8863 19.9978 9.19052 20.4669 9.58677 20.852C9.98302 21.2371 10.462 21.5283 10.988 21.7031C11.514 21.8779 12.0735 21.9319 12.6246 21.8611C13.1757 21.7903 13.7023 21.5966 14.166 21.296C14.7567 20.917 15.2581 20.416 15.634 19.827L19.544 12.942C19.7533 12.6004 19.9324 12.2465 20.078 11.884C20.5249 10.8171 20.7382 9.6635 20.7043 8.50361C20.6703 7.34372 20.3899 6.20295 19.881 5.166C19.8636 5.1314 19.8369 5.10228 19.8041 5.08213C19.7713 5.06198 19.7336 5.05153 19.695 5.053L20.618 5.984Z" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Security Program Management
                  </div>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div 
            ref={industriesButtonRef}
            className="flex items-center gap-1 relative"
            style={{ 
              color: currentPage === 'industries' ? '#3b82f6' : 'white',
              position: 'relative',
              zIndex: 50
            }}
          >
            <div 
              className="cursor-pointer"
              onClick={() => handleNavClick('industries')}
            >
              Industries
            </div>
            <img
              ref={industriesArrowRef}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da125d51ac6f3a59e33830f26764a5b0c37452d7?placeholderIfAbsent=true"
              alt=""
              className="object-contain w-[25px] cursor-pointer"
              onClick={handleIndustriesArrowClick}
            />
            {industriesDropdownOpen && (
              <div
                ref={industriesDropdownRef}
                style={{
                  ...dropdownContainerStyle,
                  width: '280px',
                }}
                className="industries-dropdown"
              >
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Finance & Banking
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Healthcare & Life Sciences
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Retail & E-commerce
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Government & Public Sector
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Education & Academia
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Energy & Utilities
                </div>
                <div
                  style={{
                    ...lastItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('industries');
                    setIndustriesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Telecommunications
                </div>
              </div>
            )}
          </div>
          <div 
            ref={resourcesButtonRef}
            className="flex items-center gap-1 relative"
            style={{ 
              color: ['resources', 'blogs', 'case-studies', 'white-papers', 'webinars', 'security-tools'].includes(currentPage || '') ? '#3b82f6' : 'white',
              position: 'relative',
              zIndex: 50
            }}
          >
            <div 
              className="cursor-pointer"
              onClick={() => handleNavClick('resources')}
            >
              Resources
            </div>
            <img
              ref={resourcesArrowRef}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/462ee547ffcebcdf1027af52de165db5fd64fb7e?placeholderIfAbsent=true"
              alt=""
              className="object-contain w-[25px] cursor-pointer"
              onClick={handleResourcesArrowClick}
            />
            {resourcesDropdownOpen && (
              <div
                ref={resourcesDropdownRef}
                style={{
                  ...dropdownContainerStyle,
                  width: '240px',
                }}
              >
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('blogs');
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Blogs & Articles
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('case-studies');
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Case Studies
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('white-papers');
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  White Papers
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('webinars');
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Webinars
                </div>
                <div
                  style={{
                    ...lastItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('security-tools');
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Security Assessment Tools
                </div>
              </div>
            )}
          </div>
          <div 
            ref={aboutButtonRef}
            className="flex items-center gap-1 relative"
            style={{ 
              color: ['about', 'team', 'approach', 'careers'].includes(currentPage || '') ? '#3b82f6' : 'white',
              position: 'relative',
              zIndex: 50
            }}
          >
            <div 
              className="cursor-pointer"
              onClick={() => handleNavClick('about')}
            >
              About Us
            </div>
            <img
              ref={aboutArrowRef}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7192b11f6e9f73074cf2e0b4a8a0c6b1ec30788?placeholderIfAbsent=true"
              alt=""
              className="object-contain w-[25px] cursor-pointer"
              onClick={handleAboutArrowClick}
            />
            {aboutDropdownOpen && (
              <div
                ref={aboutDropdownRef}
                style={{
                  ...dropdownContainerStyle,
                  width: '240px',
                }}
              >
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('team');
                    setAboutDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Our Team
                </div>
                <div
                  style={{
                    ...dropdownItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('approach');
                    setAboutDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Our Approach
                </div>
                <div
                  style={{
                    ...lastItemStyle,
                    background: 'white',
                    display: 'block'
                  }}
                  onClick={() => {
                    handleNavClick('careers');
                    setAboutDropdownOpen(false);
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f8fa'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Careers
                </div>
              </div>
            )}
          </div>
          <div 
            className="cursor-pointer"
            style={{ color: currentPage === 'contact' ? '#3b82f6' : 'white' }}
            onClick={() => handleNavClick('contact')}
          >
            Contact Us
          </div>
        </div>
        <Button 
          label="Get Started" 
          onClick={() => handleNavClick('home')}
        />
      </nav>
    </header>
  );
};

export default NavBar; 