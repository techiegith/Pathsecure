import React from 'react';
import CTASection from '../../components/CTASection';
import CaseStudiesSection from '../../components/CaseStudiesSection';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <div className="main-content">
        <div className="hero-section" style={{ 
          backgroundImage: 'url(/Industries/Industr1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            position: 'absolute',
            top: '0',
            left: '0'
          }}>
            <h1 className="text-4xl font-bold text-white text-center" style={{ 
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              Tailored IAM Solutions for Every
              <br />
              Industry
            </h1>
          </div>
        </div>

        {/* Finance & Banking */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold">
                <span className="text-blue-600">Finance</span> & Banking
              </h2>
            </div>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="text-gray-700">
                In the highly regulated world of finance and banking, identity security is not just a priority—it's a necessity. Financial institutions face growing cyber threats, complex compliance standards, and the demand for seamless digital experiences. At PathSecure, we deliver enterprise-grade IAM solutions that protect customer and employee identities, ensure data integrity, and help you meet global regulations without compromising agility.
              </p>
            </div>
          </div>
          
          {/* Finance Industry Section */}
          <div className="finance-section relative">
            {/* Full width image */}
            <div className="w-full overflow-hidden">
              <img 
                alt="Finance IAM Solutions"
                className="w-full h-auto relative z-10" 
                src="/Industries/Industr2.png"
              />
            </div>
            
            {/* Full width blue background that extends behind the bottom part of the image */}
            <div className="absolute w-full bg-blue-600" style={{ top: '70%', bottom: 0, left: 0, right: 0, zIndex: 0 }}></div>
            
            {/* Content section over the blue background */}
            <div className="relative z-20 w-full bg-blue-600 py-12">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Column - Problems */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-white ml-4">Problems</h3>
                    </div>
                    
                    <div className="text-white space-y-5 pl-4">
                      <p>Preventing account takeovers and credential theft</p>
                      <p>Managing complex user access across internal systems and third-party platforms</p>
                      <p>Enabling frictionless customer onboarding with security-first digital journeys</p>
                      <p>Ensuring regulatory compliance (PSD2, SOX, FFIEC, GLBA, GDPR)</p>
                    </div>
                  </div>
                  
                  {/* Right Column - Solutions */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-white ml-4">Our IAM Solutions for Finance</h3>
                    </div>
                    
                    <div className="text-white space-y-5 pl-4">
                      <p>Enable secure, seamless customer experiences with adaptive MFA, SSO, and risk-based authentication</p>
                      <p>Automate onboarding/offboarding, enforce least-privilege access, and streamline identity governance</p>
                      <p>Implement continuous authorization and real-time fraud detection</p>
                      <p>Secure APIs with zero-trust architecture and comprehensive audit trails</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Story Section */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div>
              <h2 className="text-3xl font-bold text-center mb-2">
                Success Story: Global Bank <span className="text-blue-600">Modernizes IAM</span>
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                A multinational bank with over 30 million users partnered with PathSecure to modernize its legacy IAM stack. We implemented a unified CIAM platform with adaptive MFA and biometric login, resulting in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-3">98%</div>
                  <p className="text-gray-600">reduction in fraud-related incidents</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-3">95%</div>
                  <p className="text-gray-600">Faster customer Platform onboarding</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-3">80%</div>
                  <p className="text-gray-600">PSD2 & GDPR compliance achieved within 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section - Reusing the component from Home */}
        <CaseStudiesSection />
      </div>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default IndustriesPage;
