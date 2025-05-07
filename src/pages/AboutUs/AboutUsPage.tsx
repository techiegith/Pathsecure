import React from 'react';
import StatisticsSection from '../../components/StatisticsSection';
import TrustedPartners from '../../components/TrustedPartners';
import MissionSection from '../../components/MissionSection';
import VisionSection from '../../components/VisionSection';
import SuccessTimeline from '../../components/SuccessTimeline';
import ClientReviewsSection from '../../components/ClientReviewsSection';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page w-full">
      <div className="main-content w-full">
        {/* Hero Section with blue background at the bottom */}
        <section className="about-hero-section relative w-full" style={{ minHeight: '500px' }}>
          {/* Blue background at the bottom part of the hero section */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#1a2b62] z-0"></div>
          
          <div className="hero-top-section relative h-full">
            <div className="hero-content">
              <div className="hero-title">
                <h1>We are Revolutionizing The<br/>Way Business Through <span className="text-primary">Power</span><br/><span className="text-primary">of Technology</span></h1>
                <div className="blue-circle-container">
                  <img src="/about/blue-circle.png" alt="Blue Circle" className="blue-circle-icon" />
                </div>
              </div>
            </div>
            <div className="digital-transformation-container relative z-10 flex justify-center items-end" style={{ marginBottom: 0, height: '400px' }}>
              <img 
                src="/about/transformation.png" 
                alt="Digital Transformation" 
                className="transformation-image relative z-10" 
                style={{ 
                  marginBottom: 0, 
                  display: 'block',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  position: 'relative'
                }} 
              />
            </div>
          </div>
        </section>
            
        {/* Blue background continues from the hero section */}
        <div className="bg-[#1a2b62] w-full" style={{ marginTop: '-1px' }}>
          <div className="flex flex-row justify-between w-full px-16 py-24 max-md:justify-center max-md:gap-16 max-md:flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-10">
            <div className="flex flex-col items-center w-full">
              <p className="text-center text-white text-lg font-medium leading-normal max-w-4xl mx-auto mb-16 px-5">
                At PathSecure IAM Consulting, we specialize in helping businesses
                navigate the complexities of identity and access management (IAM),
                cloud security, and digital transformation.
              </p>
              
              <div className="flex flex-row justify-center gap-20 w-full max-w-5xl mx-auto max-md:justify-center max-md:gap-16 max-md:flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-10">
                <div className="flex flex-col w-full max-w-[250px]">
                  <h3 className="text-6xl font-bold text-blue-400 mb-2 max-md:text-5xl max-sm:text-4xl">98%</h3>
                  <p className="text-sm text-left text-white text-opacity-70 max-md:text-sm max-sm:text-xs">
                    Successful IAM Implementations Enhancing Security & Compliance
                  </p>
                </div>
                
                <div className="flex flex-col w-full max-w-[250px]">
                  <h3 className="text-6xl font-bold text-blue-400 mb-2 max-md:text-5xl max-sm:text-4xl">95%</h3>
                  <p className="text-sm text-left text-white text-opacity-70 max-md:text-sm max-sm:text-xs">
                    Reduction in Security Breaches with Our Innovative & Best Solutions
                  </p>
                </div>
                
                <div className="flex flex-col w-full max-w-[250px]">
                  <h3 className="text-6xl font-bold text-blue-400 mb-2 max-md:text-5xl max-sm:text-4xl">80%</h3>
                  <p className="text-sm text-left text-white text-opacity-70 max-md:text-sm max-sm:text-xs">
                    Faster Deployment of IAM Strategies Compared to Industry Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <section className="partners-section py-24">
          <div className="partners-container">
            <TrustedPartners />
          </div>
        </section>

        {/* Mission and Vision Sections */}
        <MissionSection />
        <VisionSection />

        {/* Success Stories Timeline - New Design */}
        <section className="w-full bg-[#101656] py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-14">Our Success Stories</h2>
            <SuccessTimeline />
          </div>
        </section>

        {/* Solutions Section - Copied from HomePage */}
        <section className="solutions-section">
          <div className="solutions-container">
            <p className="services-label">Services</p>
            <h2>What Solutions We Offers?</h2>
            <p className="solutions-subtitle">
              Our expertise in IAM, cloud security, and compliance-driven strategies helps businesses<br />
              safeguard their digital assets while improving operational efficiency.
            </p>
            <button className="explore-more-button">Explore More</button>
            
            <div className="solutions-grid">
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame.png" alt="Identity & Access Management" />
                </div>
                <h3>Identity & Access Management (IAM)</h3>
                <p>Centralized identity governance & administration</p>
                <p>Role-based & attribute-based access control</p>
                <p>Single sign-on (SSO) & multi-factor authentication (MFA)</p>
                <p>Privileged-sign-on (SSO)</p>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame (1).png" alt="Privileged Access Management" />
                </div>
                <h3>Privileged Access Management (PAM)</h3>
                <p>Secure privileged account credentials</p>
                <p>Just-in-time access controls</p>
                <p>Session monitoring & auditing</p>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame 43.png" alt="Cloud Security" />
                </div>
                <h3>Cloud Security & Zero Trust Architecture</h3>
                <p>Cloud identity security solutions</p>
                <p>Infrastructure as code security scanning</p>
                <p>Cloud access security broker (CASB) integration</p>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame 43 (1).png" alt="Regulatory Compliance" />
                </div>
                <h3>Regulatory Compliance & Risk Management</h3>
                <p>IAM strategies aligned with industry regulations (GDPR, SOC2, HIPAA)</p>
                <p>Risk assessment & mitigation planning</p>
                <p>Audit readiness & continuous compliance monitoring</p>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame 43 (2).png" alt="IAM Strategy" />
                </div>
                <h3>IAM Strategy & Advisory Services</h3>
                <p>IAM roadmap & implementation planning</p>
                <p>Technology evaluation & integration consulting</p>
                <p>Security posture assessment & enhancement</p>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">
                  <img src="/icons/Frame 43 (3).png" alt="SSO & Federation Services" />
                </div>
                <h3>SSO & Federation Services</h3>
                <p>Enterprise-wide single sign-on solutions</p>
                <p>Federated identity management (SAML, OAuth, OpenID)</p>
                <p>Seamless access across cloud & on-prem environments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section - Copied from HomePage */}
        <ClientReviewsSection />

        {/* CTA Section - Updated design */}
        <section className="relative w-full bg-[#1a2b62] py-16">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src="/back.png" 
              alt="Background Pattern" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Secure Your Digital Future Today!!
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Protect your business with cutting-edge IAM solutions that enhance security, ensure compliance, 
              and streamline access management.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Get a Free Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage; 