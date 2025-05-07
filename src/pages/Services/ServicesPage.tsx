import React, { useEffect, useState } from 'react';
import '../../components/components.css';
import './Services.css';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-learn-more">Learn More</button>
    </div>
  );
};

const ServicesPage: React.FC = () => {
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

  const services = [
    {
      title: "Identity & Access Management",
      description: "Secure and streamline access to your critical systems with our comprehensive IAM solutions.",
      icon: "/icons/iam-icon.svg"
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with our advanced cloud security services.",
      icon: "/icons/cloud-security-icon.svg"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement a Zero Trust security model to protect your organization from modern threats.",
      icon: "/icons/zero-trust-icon.svg"
    },
    {
      title: "Security Program Management",
      description: "Develop and manage comprehensive security programs tailored to your business needs.",
      icon: "/icons/security-program-icon.svg"
    }
  ];

  return (
    <div className="services-page-container">
      {/* Services Header with Background Image */}
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
          src={`${process.env.PUBLIC_URL}/Service/Global.png`}
          alt="Services Background"
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
          <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Our Services</h1>
          <p style={{ color: 'white', fontSize: '18px', maxWidth: '800px', lineHeight: 1.5 }}>
            Immediate communication of the firm's expertise in IAM, digital transformation, and cloud security.
          </p>
        </div>
      </div>
      
      {/* IAM Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '60px auto', 
        padding: '0 20px' 
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          color: '#0B0D54', 
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: 600
        }}>
          Identity & <span style={{ color: '#3182CE' }}>Access Management</span> (IAM)
        </h2>
        
        <p style={{ 
          color: '#4A5568', 
          fontSize: '18px', 
          lineHeight: '1.7', 
          marginBottom: '40px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          Identity & Access Management (IAM) is the backbone of secure digital environments. It ensures that the right individuals have the right access to the right resources at the right time.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          flexWrap: 'wrap',
          marginBottom: '40px',
          justifyContent: 'center'
        }}>
          <div style={{ 
            flex: '0 0 350px',
            maxWidth: '350px'
          }}>
            <img 
              src={`${process.env.PUBLIC_URL}/Service/Service.png`} 
              alt="IAM Illustration" 
              style={{ 
                width: '100%', 
                borderRadius: '0px',
                marginBottom: '0'
              }}
            />
          </div>
          
          <div style={{ 
            flex: '1 1 500px',
            maxWidth: '500px'
          }}>
            <p style={{ 
              marginBottom:'50px', 
              color: '#4A5568', 
              lineHeight: '1.7',
              fontSize: '18px'
            }}>
              By implementing robust IAM frameworks, organizations can control user identities, enforce access policies, and reduce the risk of unauthorized access. IAM encompasses user provisioning, authentication, single sign-on (SSO), and privileged access management.
            </p>
            
            <p style={{ 
              color: '#4A5568', 
              lineHeight: '1.7',
              fontSize: '18px'
            }}>
              It enhances operational efficiency, streamlines compliance, and strengthens overall security posture. In an increasingly hybrid and cloud-driven world, IAM is essential for protecting sensitive data and maintaining trust. At PathSecure, we design IAM solutions tailored to your business needs—scalable, secure, and future-ready.
            </p>
          </div>
        </div>
        
        <p style={{ 
          color: '#4A5568', 
          fontSize: '16px', 
          lineHeight: '1.7', 
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto 30px'
        }}>
          Identity & Access Management (IAM) is the backbone of secure digital environments. It ensures that the right individuals have the right access to the right resources at the right time. It enhances operational efficiency, streamlines compliance, and strengthens overall security posture. In an increasingly hybrid and cloud-driven world.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginTop: '20px' 
        }}>
          <button style={{
            backgroundColor: '#3182CE',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            Get a Quote
          </button>
        </div>
      </div>
      
      {/* Explore Other Services section */}
      <div style={{ 
        backgroundColor: '#f5f7fa',
        padding: '60px 20px',
        marginTop: '40px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            color: '#0B0D54', 
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: 600
          }}>
            Explore Other Services
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {/* PAM Service Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ marginBottom: '15px', height: '45px', display: 'flex', alignItems: 'center' }}>
                <img src="/icons/Frame 43 (1).png" alt="PAM Icon" style={{ height: '40px' }} />
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                color: '#0B0D54', 
                marginBottom: '12px',
                fontWeight: 600
              }}>
                Privileged Access Management (PAM)
              </h3>
              <p style={{ 
                fontSize: '14px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                Control privileged account credentials with granular access controls, monitoring & auditing
              </p>
            </div>
            
            {/* Regulatory Compliance Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ marginBottom: '15px', height: '45px', display: 'flex', alignItems: 'center' }}>
                <img src="/icons/Frame 43 (2).png" alt="Compliance Icon" style={{ height: '40px' }} />
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                color: '#0B0D54', 
                marginBottom: '12px',
                fontWeight: 600
              }}>
                Regulatory Compliance & Risk Management
              </h3>
              <p style={{ 
                fontSize: '14px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                Meet industry compliance regulations (GDPR, SOC2, HIPAA). Risk assessment & mitigation planning. Audit readiness & continuous compliance monitoring.
              </p>
            </div>
            
            {/* IAM Strategy Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ marginBottom: '15px', height: '45px', display: 'flex', alignItems: 'center' }}>
                <img src="/icons/Frame 43 (3).png" alt="IAM Strategy Icon" style={{ height: '40px' }} />
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                color: '#0B0D54', 
                marginBottom: '12px',
                fontWeight: 600
              }}>
                IAM Strategy & Advisory Services
              </h3>
              <p style={{ 
                fontSize: '14px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                IAM roadmap & implementation planning. Technology evaluation & integration consulting. Security posture assessment & enhancement.
              </p>
            </div>
            
            {/* SSO & Federation Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ marginBottom: '15px', height: '45px', display: 'flex', alignItems: 'center' }}>
                <img src="/icons/Frame (1).png" alt="SSO Icon" style={{ height: '40px' }} />
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                color: '#0B0D54', 
                marginBottom: '12px',
                fontWeight: 600
              }}>
                SSO & Federation Services
              </h3>
              <p style={{ 
                fontSize: '14px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                Enterprise-wide single sign-on solutions. Federated identity management (SAML, OAuth, OpenID). Seamless access across platforms & environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 