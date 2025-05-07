import React, { useState, useEffect } from 'react';
import '../../components/components.css';
import './Resources.css';

interface WhitePaperCardProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  onClick: (id: number) => void;
}

const WhitePaperCard: React.FC<WhitePaperCardProps> = ({ 
  id,
  imageSrc, 
  title, 
  description,
  onClick
}) => {
  return (
    <div 
      className="whitepaper-card"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        border: '1px solid #e2e8f0',
        padding: '0',
        height: '370px',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => onClick(id)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* White Paper Card Header - Image Container */}
      <div style={{ 
        position: 'relative',
        height: '260px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Image */}
        <img 
          src={imageSrc} 
          alt={title} 
          style={{
            maxWidth: '85%',
            maxHeight: '85%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* White Paper Title */}
      <div style={{ padding: '18px 15px 10px', flex: 1 }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 700, 
          color: '#000000', 
          marginBottom: '8px',
          lineHeight: 1.3
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#4A5568', 
          marginTop: '5px',
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

// White Paper Detail component
const WhitePaperDetail: React.FC<{
  whitePaper: {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
  };
  onBack: () => void;
}> = ({ whitePaper, onBack }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Top navigation with "White Paper Detail" text and back button */}
      <div style={{ 
        padding: '18px 0', 
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <button 
            onClick={onBack}
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              color: '#000000',
              backgroundColor: 'transparent',
              border: 'none',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
              <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            White Paper Detail
          </button>
        </div>
      </div>

      {/* Main container with relative positioning */}
      <div style={{ position: 'relative' }}>
        {/* Dark blue header with title */}
        <div style={{ 
          backgroundColor: '#0B0D54', 
          color: 'white',
          padding: '80px 0 260px',
          borderRadius: '0'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 20px'
          }}>
            {/* Title */}
            <h1 style={{
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.3,
              margin: '0',
              maxWidth: '800px',
              letterSpacing: '0.5px'
            }}>
              Generative AI in Business Operations: C-Suite Strategies for AI Adoption
            </h1>
          </div>
        </div>

        {/* Gray box with image - absolutely positioned */}
        <div style={{
          position: 'absolute',
          top: '220px',
          left: '170px',
          backgroundColor: '#e5e5e5',
          width: '380px',
          height: '410px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 10
        }}>
          <div style={{
            border: 'none',
            width: '95%',
            height: '95%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={whitePaper.imageSrc}
              alt={whitePaper.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Content area with proper spacing */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {/* Left column - text content */}
          <div style={{ 
            flex: '1 1 600px', 
            paddingLeft: '0', /* No need for extra padding */
            marginBottom: '40px',
            paddingRight: '40px'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.7,
              marginBottom: '28px',
              marginTop: '220px', /* Reduced from 420px to move text higher */
              letterSpacing: '0.2px',
              fontWeight: '400'
            }}>
              Generative AI (GenAI) is transforming business operations, but without a clear strategy, enterprises risk inefficiencies, compliance hurdles, and missed opportunities. This whitepaper provides a comprehensive, structured guide to AI adoption, helping executives transform their organization with AI.
            </p>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '18px',
              color: '#000',
              letterSpacing: '0.3px'
            }}>
              Transform Your Business with AI-Driven Innovation
            </h2>
            
            <p style={{ 
              fontSize: '16px', 
              color: '#444', 
              lineHeight: 1.7,
              marginBottom: '24px',
              letterSpacing: '0.2px',
              fontWeight: '400'
            }}>
              The impact of Generative AI on business is undeniable. According to McKinsey, AI has the potential to generate $4.4 trillion annually across industries. By 2025, over 80% of enterprises will leverage GenAI for strategic decision-making. This paper examines how businesses navigate AI adoption, C-suite considerations and metrics of readiness, data governance frameworks, and proven ethical AI implementations.
            </p>
            
            <p style={{ 
              fontSize: '16px', 
              color: '#444', 
              lineHeight: 1.7,
              marginBottom: '28px',
              letterSpacing: '0.2px',
              fontWeight: '400'
            }}>
              For executive leaders with a step-by-step guide to implementing Generative AI strategically, ensuring measurable impact and responsible adoption.
            </p>
            
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '18px',
              color: '#000',
              letterSpacing: '0.3px'
            }}>
              How to Implement Generative AI Effectively
            </h2>
            
            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: '600', 
                marginBottom: '6px', 
                color: '#000',
                letterSpacing: '0.2px' 
              }}>
                • Assess & Readiness:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#444', 
                lineHeight: 1.7, 
                marginLeft: '18px',
                letterSpacing: '0.2px',
                fontWeight: '400'
              }}>
                Ensure your data infrastructure, workflows, and governance are ready.
              </p>
            </div>
            
            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: '600', 
                marginBottom: '6px', 
                color: '#000',
                letterSpacing: '0.2px' 
              }}>
                • Align AI with Business Goals:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#444', 
                lineHeight: 1.7, 
                marginLeft: '18px',
                letterSpacing: '0.2px',
                fontWeight: '400'
              }}>
                Identify high-opportunity processes where AI can deliver measurable value.
              </p>
            </div>
            
            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: '600', 
                marginBottom: '6px', 
                color: '#000',
                letterSpacing: '0.2px' 
              }}>
                • Build Governance & Compliance:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#444', 
                lineHeight: 1.7, 
                marginLeft: '18px',
                letterSpacing: '0.2px',
                fontWeight: '400'
              }}>
                Implement security protocols and ethical AI frameworks to mitigate risks.
              </p>
            </div>
            
            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: '600', 
                marginBottom: '6px', 
                color: '#000',
                letterSpacing: '0.2px' 
              }}>
                • Upskill Teams & Adapt to AI Workflows:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#444', 
                lineHeight: 1.7, 
                marginLeft: '18px',
                letterSpacing: '0.2px',
                fontWeight: '400'
              }}>
                Foster a culture of AI adoption with ongoing training programs.
              </p>
            </div>
            
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: '600', 
                marginBottom: '6px', 
                color: '#000',
                letterSpacing: '0.2px' 
              }}>
                • Scale AI for Enterprise-Wide Transformation:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#444', 
                lineHeight: 1.7, 
                marginLeft: '18px',
                letterSpacing: '0.2px',
                fontWeight: '400'
              }}>
                Start with pilot projects, track KPIs, and expand to adjacent business functions.
              </p>
            </div>
            
            <p style={{ 
              fontSize: '16px', 
              color: '#444', 
              lineHeight: 1.7, 
              fontStyle: 'italic',
              letterSpacing: '0.2px',
              fontWeight: '400'
            }}>
              With our expert guidance, you'll gain the insights needed to integrate Generative AI capabilities, staying competitive in an AI-powered future.
            </p>
          </div>

          {/* Right column - Overview box */}
          <div style={{
            flex: '0 0 370px',
            marginTop: '220px'  /* Adjust margin top to match the text */
          }}>
            <div style={{
              backgroundColor: '#0B0D54',
              color: 'white',
              borderRadius: '8px',
              padding: '20px 18px',
              height: 'fit-content',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                marginTop: '0',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                Overview. What's Inside:
              </h3>

              <div style={{ fontSize: '16px', lineHeight: 1.5 }}>
                <ul style={{ 
                  listStyle: 'disc',
                  paddingLeft: '22px', 
                  marginTop: '0',
                  marginBottom: '25px',
                  color: 'white'
                }}>
                  <li style={{ marginBottom: '12px' }}>
                    How Generative AI is reshaping marketing, sales, IT, HR, supply chain, and service operations.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    A structured guide to AI adoption, from assessing readiness to enterprise-wide scaling.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    Building an AI-ready infrastructure, ensuring data governance, security, and seamless integration.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    Upskilling the workforce and adapting to AI-driven workflows.
                  </li>
                  <li style={{ marginBottom: '0' }}>
                    Ensuring AI governance and ethical compliance for sustainable implementation.
                  </li>
                </ul>
                
                <div style={{ marginTop: '25px' }}>
                  <input 
                    type="email" 
                    placeholder="Enter Email Address" 
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '6px',
                      marginBottom: '12px',
                      fontSize: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                  />
                  
                  <button style={{
                    backgroundColor: '#2563EB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563EB';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    Download Full WhitePaper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WhitePapersPageProps {
  onWhitePaperClick: (id: number) => void;
  initialSelectedId?: number;
  initialShowDetailPage?: boolean;
}

const WhitePapersPage: React.FC<WhitePapersPageProps> = ({ 
  onWhitePaperClick,
  initialSelectedId,
  initialShowDetailPage = false
}) => {
  // State for showing the white paper detail page
  const [showDetailPage, setShowDetailPage] = useState(initialShowDetailPage);
  const [selectedPaperId, setSelectedPaperId] = useState<number | null>(initialSelectedId || null);

  // Update state when props change
  useEffect(() => {
    if (initialShowDetailPage !== undefined) {
      setShowDetailPage(initialShowDetailPage);
    }
    if (initialSelectedId !== undefined) {
      setSelectedPaperId(initialSelectedId);
    }
  }, [initialShowDetailPage, initialSelectedId]);

  // Sample white paper data - in a real application, this would come from an API or CMS
  const whitepapers = [
    {
      id: 1,
      imageSrc: '/White/Paper1.png',
      title: 'Generative AI in Business Operations: C-Suite Strategies for AI Adoption',
      description: 'Generative AI (GenAI) is transforming business operations, but without a clear strategy, enterprises risk inefficiencies, compliance hurdles, and missed opportunities.'
    },
    {
      id: 2,
      imageSrc: '/White/Paper2.png',
      title: 'Building Resilient Cybersecurity Frameworks for Critical Infrastructure',
      description: 'Learn how to develop robust cybersecurity frameworks that protect critical infrastructure from evolving threats and vulnerabilities.'
    },
    {
      id: 3,
      imageSrc: '/White/Paper3.png',
      title: 'Data Governance in the Cloud: Best Practices for Enterprise Security',
      description: 'This white paper outlines comprehensive strategies for maintaining data governance and security in cloud-based enterprise environments.'
    }
  ];

  // Handler for white paper click
  const handleWhitePaperClick = (id: number) => {
    setSelectedPaperId(id);
    setShowDetailPage(true);
    // Still call the original onWhitePaperClick for routing purposes
    onWhitePaperClick(id);
  };

  // Get the selected white paper
  const selectedWhitePaper = whitepapers.find(paper => paper.id === selectedPaperId) || whitepapers[0];

  // If detail page is shown, render the detail view
  if (showDetailPage) {
    return (
      <WhitePaperDetail 
        whitePaper={selectedWhitePaper}
        onBack={() => setShowDetailPage(false)}
      />
    );
  }

  // Otherwise, render the white papers listing
  return (
    <div className="whitepapers-page" style={{ backgroundColor: '#f5f5f7' }}>
      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto', 
        padding: '60px 20px 40px',
        backgroundColor: '#f5f5f7'
      }}>
        {/* Heading Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#3182CE', fontSize: '22px', marginBottom: '10px', fontWeight: 500 }}>White Papers</div>
          <h2 style={{ 
            fontSize: '42px', 
            color: '#0B0D54', 
            fontWeight: 600, 
            marginBottom: '16px',
            position: 'relative',
            display: 'inline-block'
          }}>
            Bringing Vision To Life
            <svg 
              width="40" 
              height="30" 
              viewBox="0 0 40 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                position: 'absolute',
                top: '5px',
                right: '-50px'
              }}
            >
              {/* Curvy arrow icon - simplified version matching the image */}
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
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#4A5568', 
            maxWidth: '800px', 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            We are committed to offer tailor-made solutions well-aligned with your goals.
          </p>
        </div>

        {/* White Papers Custom Layout - 2 on top, 1 below */}
        <div style={{ marginBottom: '50px' }}>
          {/* Top row - 2 cards side by side */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '30px'
          }}>
            <div style={{ maxWidth: '400px', width: '100%', justifySelf: 'end' }}>
              <WhitePaperCard 
                key={whitepapers[0].id}
                id={whitepapers[0].id}
                imageSrc={whitepapers[0].imageSrc}
                title={whitepapers[0].title}
                description={whitepapers[0].description}
                onClick={handleWhitePaperClick}
              />
            </div>
            <div style={{ maxWidth: '400px', width: '100%', justifySelf: 'start' }}>
              <WhitePaperCard 
                key={whitepapers[1].id}
                id={whitepapers[1].id}
                imageSrc={whitepapers[1].imageSrc}
                title={whitepapers[1].title}
                description={whitepapers[1].description}
                onClick={handleWhitePaperClick}
              />
            </div>
          </div>
          
          {/* Bottom row - 1 card centered */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{ maxWidth: '400px', width: '100%' }}>
              <WhitePaperCard 
                key={whitepapers[2].id}
                id={whitepapers[2].id}
                imageSrc={whitepapers[2].imageSrc}
                title={whitepapers[2].title}
                description={whitepapers[2].description}
                onClick={handleWhitePaperClick}
              />
            </div>
          </div>
        </div>

        {/* White Paper Detail Button */}
        <div style={{ textAlign: 'center' }}>
          <div 
            onClick={() => handleWhitePaperClick(1)} // Using the first white paper by default
            style={{
              backgroundColor: '#0B0D54',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ marginRight: '12px' }}
            >
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '18px', fontWeight: '600' }}>
              White Paper Detail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePapersPage; 