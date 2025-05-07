import React from 'react';
import '../../components/components.css';
import './Services.css';

const IAMPage: React.FC = () => {
  return (
    <div className="services-page-container">
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
      
      {/* IAM Services section */}
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
            Our IAM Services
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
      
      {/* Benefits of IAM Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '60px auto', 
        padding: '0 20px' 
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          color: '#0B0D54', 
          marginBottom: '40px',
          textAlign: 'center',
          fontWeight: 600
        }}>
          Benefits of Our IAM Solutions
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Benefit 1 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: '#EBF8FF', 
              borderRadius: '50%', 
              width: '80px', 
              height: '80px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '20px', 
              color: '#0B0D54', 
              marginBottom: '12px',
              fontWeight: 600
            }}>Enhanced Security</h3>
            <p style={{ 
              fontSize: '16px',
              color: '#4A5568',
              lineHeight: '1.6'
            }}>
              Reduce unauthorized access and minimize security breaches with robust authentication and authorization controls.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: '#EBF8FF', 
              borderRadius: '50%', 
              width: '80px', 
              height: '80px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '20px', 
              color: '#0B0D54', 
              marginBottom: '12px',
              fontWeight: 600
            }}>Operational Efficiency</h3>
            <p style={{ 
              fontSize: '16px',
              color: '#4A5568',
              lineHeight: '1.6'
            }}>
              Streamline user management processes, reduce IT overhead, and enable faster access provisioning and deprovisioning.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: '#EBF8FF', 
              borderRadius: '50%', 
              width: '80px', 
              height: '80px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" 
                stroke="#3182CE" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '20px', 
              color: '#0B0D54', 
              marginBottom: '12px',
              fontWeight: 600
            }}>Regulatory Compliance</h3>
            <p style={{ 
              fontSize: '16px',
              color: '#4A5568',
              lineHeight: '1.6'
            }}>
              Meet compliance requirements with comprehensive access controls, audit trails, and reporting capabilities.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div style={{ 
        backgroundColor: '#0B0D54',
        padding: '60px 20px',
        marginTop: '60px'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            color: 'white', 
            marginBottom: '20px',
            fontWeight: 600
          }}>
            Ready to Secure Your Digital Identity?
          </h2>
          
          <p style={{ 
            color: 'white', 
            fontSize: '18px', 
            lineHeight: '1.7', 
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Let our IAM experts help you design and implement a comprehensive identity solution tailored to your organization's needs.
          </p>
          
          <button style={{
            backgroundColor: '#3182CE',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#2C5282';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#3182CE';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default IAMPage; 