import React from 'react';
import '../../components/components.css';
import './Resources.css';

interface WebinarCardProps {
  id: number;
  imageSrc: string;
  title: string;
  speakerName?: string;
  speakerTitle?: string;
  speakerCompany?: string;
  date?: string;
  time?: string;
  description: string;
  onClick: (id: number) => void;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ 
  id,
  imageSrc, 
  title, 
  speakerName,
  speakerTitle,
  speakerCompany,
  date, 
  time, 
  description,
  onClick
}) => {
  // Determine which style variant to use based on the image
  // This helps us match the different card styles in the screenshot
  const variant = imageSrc.includes('Image1.png') ? 'westermo' : 
                  imageSrc.includes('Image2.png') ? 'sia' :
                  imageSrc.includes('Image3.png') ? 'purple' :
                  imageSrc.includes('Image4.png') ? 'thinkcurity' :
                  imageSrc.includes('Image5.png') ? 'between2' : 'drone';
  
  // Get background color based on variant
  const getBgColor = () => {
    switch(variant) {
      case 'westermo': return '#38a8ba'; // Teal
      case 'sia': return '#071d3e'; // Dark blue
      case 'purple': return '#7e3db8'; // Purple
      case 'thinkcurity': return '#031d54'; // Navy blue
      case 'between2': return '#06324f'; // Dark teal
      case 'drone': return '#091e54'; // Navy blue
      default: return '#031d54';
    }
  };
  
  return (
    <div 
      className="webinar-card"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        border: '1px solid #e2e8f0',
        padding: '0',
        height: '320px'
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
      {/* Webinar Card Header - Image Container */}
      <div style={{ 
        position: 'relative',
        height: '220px',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Image */}
        <img 
          src={imageSrc} 
          alt={title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Webinar Title */}
      <div style={{ padding: '18px 15px 10px' }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 700, 
          color: '#000000', 
          marginBottom: '8px',
          lineHeight: 1.3
        }}>
          {title}
        </h3>
      </div>
    </div>
  );
};

interface WebinarsPageProps {
  onWebinarClick: (id: number) => void;
}

const WebinarsPage: React.FC<WebinarsPageProps> = ({ onWebinarClick }) => {
  // Sample webinar data - in a real application, this would come from an API or CMS
  const webinars = [
    {
      id: 1,
      imageSrc: '/Webinars/Image1.png',
      title: 'AI Adoption for Long-Term Impact',
      speakerName: 'Juan Gaytan, Jr.',
      speakerTitle: 'Institute Board Strategist',
      speakerCompany: 'Analyzing Security Connections, Inc',
      date: 'Nov 8, 2023',
      time: '10:00 AM EST',
      description: 'Explore how to effectively implement AI in your cybersecurity strategy for sustainable long-term benefits.'
    },
    {
      id: 2,
      imageSrc: '/Webinars/Image2.png',
      title: 'A Phased Approach to Application Modernization',
      speakerName: 'Michael Roberts',
      speakerTitle: 'Chief Technology Officer',
      speakerCompany: 'SecureState Technologies',
      date: 'Oct 25, 2023',
      time: '2:00 PM EST',
      description: 'Learn strategies for modernizing legacy applications while maintaining security and business continuity.'
    },
    {
      id: 3,
      imageSrc: '/Webinars/Image3.png',
      title: "Navigating AI's Complexity To Improve Business Functions",
      speakerName: 'Sophia Chen',
      speakerTitle: 'AI Security Researcher',
      speakerCompany: 'DataGuard Solutions',
      date: 'Oct 12, 2023',
      time: '11:00 AM EST',
      description: 'Discover how AI can enhance security operations and streamline business processes.'
    },
    {
      id: 4,
      imageSrc: '/Webinars/Image4.png',
      title: 'AI Adoption for Long-Term Impact',
      speakerName: 'Juan Gaytan, Jr.',
      speakerTitle: 'Institute Board Strategist',
      speakerCompany: 'Analyzing Security Connections, Inc',
      date: 'Sep 28, 2023',
      time: '1:00 PM EST',
      description: 'Explore emerging career paths and skills required in the evolving security technology landscape.'
    },
    {
      id: 5,
      imageSrc: '/Webinars/Image5.png',
      title: 'A Phased Approach to Application Modernization',
      speakerName: 'David Williams',
      speakerTitle: 'Chief Innovation Officer',
      speakerCompany: 'Between Two Checkpoints',
      date: 'Sep 15, 2023',
      time: '3:00 PM EST',
      description: 'Learn about the latest drone security measures and implementation strategies for comprehensive protection.'
    },
    {
      id: 6,
      imageSrc: '/Webinars/Image6.png',
      title: 'Navigating AI\'s Complexity To Improve Business Functions',
      speakerName: 'Sophia Chen',
      speakerTitle: 'AI Security Researcher',
      speakerCompany: 'DataGuard Solutions',
      date: 'Sep 5, 2023',
      time: '10:00 AM EST',
      description: "Discover how to leverage cutting-edge technologies to enhance your security company's capabilities."
    }
  ];

  return (
    <div className="webinars-page" style={{ backgroundColor: '#f5f5f7' }}>
      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '60px 20px 40px',
        backgroundColor: '#f5f5f7'
      }}>
        {/* Heading Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#3182CE', fontSize: '22px', marginBottom: '10px', fontWeight: 500 }}>Webinars</div>
          <h2 style={{ 
            fontSize: '42px', 
            color: '#0B0D54', 
            fontWeight: 600, 
            marginBottom: '16px',
            position: 'relative',
            display: 'inline-block'
          }}>
            Bringing Visual Live Experiences
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
            Webinars are complimentary virtual experiences, available live or on demand. These 
            sessions provide actionable insights through presentations and discussions with 
            industry experts.
          </p>
        </div>

        {/* Webinars Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {webinars.map(webinar => (
            <WebinarCard 
              key={webinar.id}
              id={webinar.id}
              imageSrc={webinar.imageSrc}
              title={webinar.title}
              speakerName={webinar.speakerName}
              speakerTitle={webinar.speakerTitle}
              speakerCompany={webinar.speakerCompany}
              date={webinar.date}
              time={webinar.time}
              description={webinar.description}
              onClick={onWebinarClick}
            />
          ))}
        </div>

        {/* Webinar Detail Box - Now placed at the bottom */}
        <div style={{ textAlign: 'center' }}>
          <div 
            onClick={() => onWebinarClick(1)} // Using the first webinar by default
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
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8L16 12L10 16V8Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '18px', fontWeight: '600' }}>
              Webinar Detail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage; 