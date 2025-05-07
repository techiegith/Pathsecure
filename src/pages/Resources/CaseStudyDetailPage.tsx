import React from 'react';
import './Resources.css';

interface CaseStudyDetailPageProps {
  onBack?: () => void;
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ onBack }) => {
  // Sample case study data
  const caseStudyData = {
    id: 1,
    title: "Securing Customer Identity for a Global Digital Bank",
    date: "Apr 10, 2024",
    categories: ["Case Study", "Health Care"],
    client: "Global Digital Bank",
    servicesProvided: "IAM Strategy, Customer Identity (CIAM), Multi-Factor Authentication (MFA), Regulatory Compliance",
    duration: "6 Months",
    overview: "A leading digital-only bank operating in multiple countries needed to modernize its Customer Identity and Access Management (CIAM) system. With over 10 million users and growing, they faced increasing threats, regulatory pressure, and the need to deliver a seamless yet secure login experience across platforms. PathSecure partnered with the client to deploy a modern IAM solution tailored to financial compliance, user trust, and scalability.",
    challenges: [
      "Inconsistent customer login experience across mobile, web, and APIs",
      "No centralized identity system for customer onboarding and KYC compliance",
      "Security concerns around credential stuffing, phishing, and account takeover attacks",
      "Strict requirements under GDPR, PSD2, and Open Banking regulations"
    ],
    solutionTitle: "Solution Approach",
    solutionSubtitle: "IAM & CIAM Modernization Strategy",
    solutionPoints: [
      "Implemented a cloud-native CIAM solution with centralized user identity management",
      "Enabled progressive profiling and social login support",
      "Integrated adaptive MFA and risk-based authentication",
      "Built custom KYC flows with secure document verification",
      "Enabled full API protection for third-party fintech integrations"
    ],
    keyOutcomes: [
      "99.9% reduction in unauthorized access attempts through behavioral and MFA controls",
      "Improved user onboarding conversion by 40% via simplified registration",
      "Regulatory compliance achieved across GDPR, PSD2, and FFIEC",
      "Unified customer view across mobile, web, and partner ecosystems"
    ],
    technologyStack: [
      "ForgeRock CIAM Platform",
      "Azure Active Directory B2C",
      "Twilio Auth for MFA",
      "Custom-built KYC modules with AI-based document scanning"
    ],
    whatMadeItWork: [
      "Security + UX Balance: Security controls were layered invisibly behind a smooth experience",
      "Scalability First: Cloud-native infrastructure enabled scaling for millions of users",
      "Compliance-Focused: IAM architecture designed around evolving financial regulations"
    ],
    clientFeedback: {
      quote: "From day one, the PathSecure team showed deep expertise in financial services security. They helped us meet regulatory requirements with ease and significantly improved our customer login experience while enhancing security.",
      author: "David Reynolds",
      position: "CTO, Global Digital Bank"
    }
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="case-study-detail-page">
      {/* Back button */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <a 
          href="#" 
          onClick={handleBackClick}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#3B82F6', 
            fontSize: '16px',
            textDecoration: 'none',
            marginBottom: '20px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ marginLeft: '8px' }}>Case Studies Detail</span>
        </a>
      </div>

      {/* Hero Image */}
      <div style={{ 
        width: '100%', 
        height: '400px', 
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: 'url(/Details/image1.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </div>

      {/* Case Study Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Date and categories */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '20px',
          alignItems: 'center'
        }}>
          <span style={{ 
            color: '#6B7280', 
            fontSize: '14px', 
            fontWeight: '500' 
          }}>
            {caseStudyData.date}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {caseStudyData.categories.map((category, index) => (
              <a 
                key={index} 
                href="#"
                style={{ 
                  color: '#3B82F6', 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                  padding: '2px 10px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: '#111827',
          lineHeight: '1.2'
        }}>
          {caseStudyData.title}
        </h1>

        {/* Client Info */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ 
              minWidth: '120px', 
              fontWeight: '600', 
              color: '#4B5563' 
            }}>Client:</span>
            <span style={{ 
              color: '#111827',
              fontWeight: '700'
            }}>{caseStudyData.client}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ 
              minWidth: '120px', 
              fontWeight: '600', 
              color: '#4B5563' 
            }}>Services Provided:</span>
            <span style={{ 
              color: '#111827',
              fontWeight: '700'
            }}>{caseStudyData.servicesProvided}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ 
              minWidth: '120px', 
              fontWeight: '600', 
              color: '#4B5563' 
            }}>Duration:</span>
            <span style={{ 
              color: '#111827',
              fontWeight: '700'
            }}>{caseStudyData.duration}</span>
          </div>
        </div>

        {/* Overview */}
        <div style={{ 
          fontSize: '16px', 
          lineHeight: '1.6', 
          color: '#374151',
          marginBottom: '30px'
        }}>
          {caseStudyData.overview}
        </div>

        {/* Challenges Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            Challenges
          </h2>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {caseStudyData.challenges.map((challenge, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  position: 'relative',
                  color: '#4B5563',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#6B7280',
                  borderRadius: '50%'
                }}></span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Approach */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            {caseStudyData.solutionTitle}
          </h2>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            marginBottom: '15px',
            color: '#374151' 
          }}>
            {caseStudyData.solutionSubtitle}
          </h3>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {caseStudyData.solutionPoints.map((point, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  position: 'relative',
                  color: '#4B5563',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#6B7280',
                  borderRadius: '50%'
                }}></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Outcomes */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            Key Outcomes
          </h2>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {caseStudyData.keyOutcomes.map((outcome, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  paddingLeft: '25px',
                  position: 'relative',
                  color: '#16A34A',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#16A34A',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            Technology Stack
          </h2>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {caseStudyData.technologyStack.map((tech, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  position: 'relative',
                  color: '#4B5563',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#6B7280',
                  borderRadius: '50%'
                }}></span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* What Made It Work */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            What Made It Work
          </h2>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            {caseStudyData.whatMadeItWork.map((point, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  position: 'relative',
                  color: '#4B5563',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#6B7280',
                  borderRadius: '50%'
                }}></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Client Feedback */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#111827' 
          }}>
            Clienty FeedBack
          </h2>
          <div style={{ 
            backgroundColor: '#F3F4F6', 
            padding: '30px', 
            borderRadius: '0px', 
            position: 'relative',
            marginBottom: '40px',
            border: '1px solid #E5E7EB',
            borderLeft: '4px solid #3B82F6'
          }}>
            <div style={{ 
              fontSize: '40px', 
              fontWeight: 'bold', 
              color: '#3B82F6',
              position: 'absolute',
              top: '20px',
              left: '0',
              right: '0',
              textAlign: 'center',
              lineHeight: '1'
            }}>
              "
            </div>
            <div style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              color: '#4B5563',
              textAlign: 'center',
              margin: '10px 30px 20px',
              paddingTop: '15px'
            }}>
              {caseStudyData.clientFeedback.quote}
            </div>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                overflow: 'hidden',
                marginRight: '15px',
                backgroundColor: '#E5E7EB'
              }}>
                <img 
                  src="/Details/image2.png" 
                  alt={caseStudyData.clientFeedback.author} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div>
                <div style={{ 
                  color: '#111827', 
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                  {caseStudyData.clientFeedback.author}
                </div>
                <div style={{ 
                  color: '#6B7280',
                  fontSize: '14px'
                }}>
                  {caseStudyData.clientFeedback.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage; 