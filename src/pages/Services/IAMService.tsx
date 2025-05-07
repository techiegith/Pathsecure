import React, { useEffect, useState } from 'react';
import '../../components/components.css';
import './Services.css';
import './IAMService.css';

const IAMService: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(400);

  // Responsive header height
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setHeaderHeight(250);
      } else if (width < 768) {
        setHeaderHeight(300);
      } else {
        setHeaderHeight(400);
      }
    };

    // Set initial height
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="services-page-container">
      {/* IAM Service Header with Background Image */}
      <div 
        className="services-header-custom" 
        style={{ 
          position: 'relative',
          width: '100%',
          height: `${headerHeight}px`,
          overflow: 'hidden'
        }}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/Service/Service.png`}
          alt="IAM Service Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        >
          <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Identity & Access Management
          </h1>
          <p style={{ color: 'white', fontSize: '18px', maxWidth: '800px', lineHeight: 1.5 }}>
            Secure and streamline access to your systems with comprehensive IAM solutions
          </p>
        </div>
      </div>
      
      <div className="iam-overview">
        <h2>What is IAM?</h2>
        <p>
          Identity and Access Management (IAM) is a framework of business processes, policies, and technologies 
          that facilitates the management of electronic or digital identities. With IAM, IT managers can control 
          user access to critical information within their organizations.
        </p>
        
        <div className="iam-benefits">
          <h3>Key Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={`${process.env.PUBLIC_URL}/icons/security-icon.svg`} alt="Enhanced Security" />
              </div>
              <h4>Enhanced Security</h4>
              <p>Protect sensitive data with robust authentication and authorization protocols</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={`${process.env.PUBLIC_URL}/icons/compliance-icon.svg`} alt="Regulatory Compliance" />
              </div>
              <h4>Regulatory Compliance</h4>
              <p>Meet industry standards and regulations with comprehensive audit trails</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={`${process.env.PUBLIC_URL}/icons/productivity-icon.svg`} alt="Increased Productivity" />
              </div>
              <h4>Increased Productivity</h4>
              <p>Streamline access to systems and applications with single sign-on capabilities</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={`${process.env.PUBLIC_URL}/icons/cost-icon.svg`} alt="Cost Reduction" />
              </div>
              <h4>Cost Reduction</h4>
              <p>Decrease IT operational costs with automated identity management processes</p>
            </div>
          </div>
        </div>
        
        <div className="iam-services">
          <h3>Our IAM Services</h3>
          <div className="services-list">
            <div className="service-item">
              <h4>IAM Strategy & Implementation</h4>
              <p>Develop a comprehensive IAM strategy aligned with your business objectives and implement tailored solutions</p>
            </div>
            <div className="service-item">
              <h4>Multi-Factor Authentication</h4>
              <p>Enhance security with MFA solutions that verify user identities through multiple authentication methods</p>
            </div>
            <div className="service-item">
              <h4>Privileged Access Management</h4>
              <p>Secure, manage, and monitor privileged accounts and access to critical systems</p>
            </div>
            <div className="service-item">
              <h4>Identity Governance</h4>
              <p>Implement controls for identity and access lifecycle management with automated workflows</p>
            </div>
            <div className="service-item">
              <h4>Zero Trust Architecture</h4>
              <p>Design and implement Zero Trust frameworks that verify every user and every access attempt</p>
            </div>
            <div className="service-item">
              <h4>Directory Services</h4>
              <p>Optimize and secure your directory infrastructure for efficient identity management</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h3>Ready to secure your digital identities?</h3>
          <p>Let our experts help you build a robust IAM solution tailored to your organization's needs.</p>
          <button className="cta-button">Schedule a Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default IAMService; 