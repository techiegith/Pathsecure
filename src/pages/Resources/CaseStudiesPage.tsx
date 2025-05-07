import React from 'react';
import '../../components/components.css';
import './Resources.css';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Securing Customer Identity for a Global Digital Bank",
      category: "Finance & Banking",
      description: "Implemented a robust IAM system with MFA and real-time fraud monitoring, reducing unauthorized access incidents by 90% and improving onboarding speed by 60%.",
      image: "/Case Studies/Image1.png"
    },
    {
      id: 2,
      title: "HIPAA-Compliant IAM for a Regional Hospital Network",
      category: "Healthcare",
      description: "Deployed identity lifecycle management and access controls for 5000+ users across multiple facilities, ensuring full HIPAA compliance and improving EHR access response time.",
      image: "/Case Studies/Image2.png"
    },
    {
      id: 3,
      title: "Scalable IAM for a Growing Online Retailer",
      category: "Retail & eCommerce",
      description: "Enabled secure customer identity federation and single sign-on (SSO) across mobile and web apps, enhancing user experience and increasing repeat logins by 40%.",
      image: "/Case Studies/Image3.png"
    },
    {
      id: 4,
      title: "Modernizing IAM for a Government Digital Portal",
      category: "Government & Public Sector",
      description: "Implemented centralized access control for students and faculty across multiple campuses, enabling secure remote access and integrating with cloud-based learning tools.",
      image: "/Case Studies/Image4.png"
    }
  ];

  return (
    <div className="case-studies-page" style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#3182CE', 
            fontSize: '18px', 
            marginBottom: '12px', 
            fontWeight: '500',
            letterSpacing: '0.3px'
          }}>
            Case Studies
          </div>
          <h1 style={{ 
            fontSize: '40px', 
            color: '#000000', 
            fontWeight: 'bold', 
            marginBottom: '18px',
            position: 'relative',
            display: 'inline-block',
            letterSpacing: '0.5px',
            lineHeight: '1.2'
          }}>
            Explore Our Latest Case Studies
            <svg 
              width="40" 
              height="30" 
              viewBox="0 0 40 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                position: 'absolute',
                top: '5px',
                right: '-45px'
              }}
            >
              <path 
                d="M2 22C10 22 18 28 28 12" 
                stroke="#3182CE" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M28 12L22 10" 
                stroke="#3182CE" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M28 12L26 18" 
                stroke="#3182CE" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p style={{ 
            fontSize: '17px', 
            color: '#4A5568', 
            maxWidth: '650px', 
            margin: '0 auto', 
            lineHeight: '1.6',
            fontWeight: '400',
            letterSpacing: '0.1px'
          }}>
            The Latest industry news, interviews, technologies and resources.
          </p>
        </div>

        {/* Filter dropdown */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '40px' 
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F7FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '6px 16px',
            cursor: 'pointer'
          }}>
            <span style={{ 
              color: '#3182CE', 
              fontSize: '14px',
              fontWeight: '500',
              marginRight: '8px'
            }}>
              Healthcare
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#3182CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow-sm ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-2/5">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-center bg-gray-100">
                <span className="inline-block px-6 py-1.5 text-sm text-blue-600 bg-blue-50 border border-blue-300 rounded-full mb-10 w-[230px] text-center">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 