import React from 'react';
import ClientReviews from '../../components/ClientReviews';
import HeroSection from '../../components/HeroSection';
import StatisticsDisplay from '../../components/StatisticsDisplay';
import TrustedPartners from '../../components/TrustedPartners';
import ClientReviewsSection from '../../components/ClientReviewsSection';
import BlogsSection from '../../components/BlogsSection';
import CTASection from '../../components/CTASection';
import CaseStudiesSection from '../../components/CaseStudiesSection';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="main-content">
        <HeroSection />

        <section className="about-us-section">
          <div className="about-us-container">
            <div className="about-us-left">
              <p className="about-us-label">About Us</p>
              <h2 className="protecting-title">
                Protecting Digital<br />
                World with <span className="expertise-text">Expertise</span><br />
                & <span className="innovation-text">Innovation</span>
              </h2>
            </div>
            <div className="about-us-right">
              <p className="protecting-subtitle">
                At PathSecure IAM Consulting, we specialize in helping businesses navigate the complexities of identity and access management (IAM), cloud security, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        <section className="fingerprint-section">
          <div className="fingerprint-container">
            <img
              src="/thumb.png"
              alt="Security authentication with fingerprint scan"
              className="fingerprint-image"
            />
            <StatisticsDisplay />
          </div>
        </section>

        <div style={{ height: "40px" }}></div>

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

        <section className="partners-section">
          <div className="partners-container">
            <TrustedPartners />
          </div>
        </section>

        <CaseStudiesSection />

        <section className="team-section">
          <h2>Our Expert <span className="team-text">Team</span></h2>
          <p className="team-subtitle">
            Our expertise in IAM, cloud security, and compliance-driven strategies helps businesses safeguard their digital assets
          </p>
          
          <div className="team-slider-container">
            <div className="team-grid">
              <div className="team-card-container first-card">
                <button className="slider-arrow prev-arrow">
                  <img src="/icons/arrow-left.svg" alt="Previous" />
                </button>
                <div className="team-member group">
                  <div className="overflow-hidden rounded-lg relative" style={{ boxShadow: '15px 0px 35px rgba(0,0,0,0.25)' }}>
                    <img 
                      src="/team/team1.png" 
                      alt="Daniel Chen" 
                      className="team-image transform transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                  </div>
                  <h3 className="mt-4 font-bold text-lg">Daniel Chen</h3>
                  <p className="member-title text-gray-600">Chief Technology Officer</p>
                </div>
              </div>
              
              <div className="team-card-container">
                <div className="team-member group">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/team/team2.png" 
                      alt="Ava Morgan" 
                      className="team-image transform transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-lg">Ava Morgan</h3>
                  <p className="member-title text-gray-600">Founder & Chief Executive Officer</p>
                </div>
              </div>
              
              <div className="team-card-container last-card">
                <div className="team-member group">
                  <div className="overflow-hidden rounded-lg relative" style={{ boxShadow: '-15px 0px 35px rgba(0,0,0,0.25)' }}>
                    <img 
                      src="/team/team3.png" 
                      alt="Priya Nair" 
                      className="team-image transform transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                  </div>
                  <h3 className="mt-4 font-bold text-lg">Priya Nair</h3>
                  <p className="member-title text-gray-600">Director of IAM Strategy</p>
                </div>
                <button className="slider-arrow next-arrow">
                  <img src="/icons/arrow-right.svg" alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <ClientReviewsSection />

        <BlogsSection />
      </div>
      
      {/* CTA Section outside main content for full width */}
      <CTASection />
    </>
  );
};

export default HomePage; 