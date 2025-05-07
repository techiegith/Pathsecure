import React from 'react';
import '../../components/components.css';
import './Resources.css';

interface WebinarDetailPageProps {
  webinarId: number | null;
  onBack: () => void;
}

const WebinarDetailPage: React.FC<WebinarDetailPageProps> = ({ webinarId, onBack }) => {
  return (
    <div className="webinar-detail-page">
      {/* Back Button */}
      <div style={{ 
        padding: '15px 0', 
        borderBottom: '1px solid #e2e8f0',
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
              fontSize: '20px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Webinar Detail
          </button>
        </div>
      </div>

      {/* Webinar Header Section */}
      <div style={{ 
        backgroundColor: '#0B0D54', 
        color: 'white',
        position: 'relative',
        padding: '30px 0 40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative' }}>
          {/* Tags */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              padding: '6px 14px', 
              borderRadius: '50px',
              fontSize: '14px'
            }}>
              Upcoming
            </span>
            <span style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              padding: '6px 14px', 
              borderRadius: '50px',
              fontSize: '14px'
            }}>
              Cloud Security
            </span>
          </div>

          {/* Webinar Title */}
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            marginBottom: '25px',
            maxWidth: '65%'
          }}>
            Cloud Security & Zero Trust Architecture
          </h1>

          {/* Key Points */}
          <ul style={{ 
            paddingLeft: '0', 
            listStyle: 'none', 
            marginBottom: '25px', 
            maxWidth: '65%'
          }}>
            <li style={{ 
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ 
                display: 'inline-block',
                width: '6px', 
                height: '6px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                marginRight: '15px' 
              }}></span>
              <span>Defining your "why" for modernization and aligning it with business objectives.</span>
            </li>
            <li style={{ 
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ 
                display: 'inline-block',
                width: '6px', 
                height: '6px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                marginRight: '15px' 
              }}></span>
              <span>Assessing your starting point and where you aim to go.</span>
            </li>
            <li style={{ 
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ 
                display: 'inline-block',
                width: '6px', 
                height: '6px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                marginRight: '15px' 
              }}></span>
              <span>Common pitfalls to avoid during this stage.</span>
            </li>
          </ul>

          {/* Date and Time */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '16px', 
            maxWidth: '65%' 
          }}>
            November 26, 2024 | 10:00 am EST | 1 Hour
          </div>
          
          {/* Registration Form - Positioned at the right side, overlapping with content below */}
          <div style={{ 
            width: '400px', 
            backgroundColor: 'white', 
            borderRadius: '10px',
            padding: '20px',
            color: 'rgb(0, 0, 0)',
            position: 'absolute',
            top: '150px',
            right: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 10
          }}>
            <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>
              Confirm Your Joining!!
            </h3>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                <div>
                  <label htmlFor="firstName" style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '4px' }}>First Name</label>
                  <input 
                    id="firstName"
                    type="text" 
                    placeholder="First Name" 
                    style={{ 
                      width: '100%', 
                      padding: '10px 15px', 
                      borderRadius: '5px', 
                      border: '1px solid #ddd',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '4px' }}>Last Name</label>
                  <input 
                    id="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    style={{ 
                      width: '100%', 
                      padding: '10px 15px', 
                      borderRadius: '5px', 
                      border: '1px solid #ddd',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="phone" style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '4px' }}>Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="Phone Number" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 15px', 
                    borderRadius: '5px', 
                    border: '1px solid #ddd',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '4px' }}>Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Email Address" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 15px', 
                    borderRadius: '5px', 
                    border: '1px solid #ddd',
                    fontSize: '14px'
                  }}
                />
              </div>
              <button 
                type="submit" 
                style={{
                  width: '100%',
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px' }}>
        {/* Overview Section */}
        <div style={{ marginBottom: '50px', maxWidth: '65%' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px', color: '#0B0D54' }}>
            Overview
          </h2>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            color: '#4A5568', 
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            Application modernization isn't just an IT upgrade. It's a strategic move that transforms the way your 
            organization operates. This exclusive webinar offers CIOs, CTOs, and senior decision-makers a 
            comprehensive look at a phased approach to modernization. You'll learn about the complexities 
            of planning and executing a modernization project to meet today's demands without 
            overwhelming your IT team or resources.
          </p>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            color: '#4A5568',
            fontWeight: '400'
          }}>
            Not just another webinar: We're not offering broad application modernization theories here. This 
            session focuses on practical examples of how a phased approach to application modernization 
            can improve processes and drive results that matter.
          </p>
        </div>

        {/* Speakers Section */}
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '30px', color: '#0B0D54' }}>
            Speakers
          </h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {/* Speaker 1 */}
            <div style={{ 
              width: '220px', 
              backgroundColor: '#f8f8f8', 
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/Webinars/team1.png" 
                  alt="Daniel Chen" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.currentTarget.src = 'https://via.placeholder.com/220x220?text=Daniel+Chen';
                  }}
                />
              </div>
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '5px' }}>Daniel Chen</h3>
                <p style={{ fontSize: '14px', color: '#3182CE' }}>Chief Technology Officer</p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div style={{ 
              width: '220px', 
              backgroundColor: '#f8f8f8', 
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/Webinars/team2.png" 
                  alt="Ava Morgan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.currentTarget.src = 'https://via.placeholder.com/220x220?text=Ava+Morgan';
                  }}
                />
              </div>
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '5px' }}>Ava Morgan</h3>
                <p style={{ fontSize: '14px', color: '#3182CE' }}>Founder & Chief Executive Officer</p>
              </div>
            </div>

            {/* Speaker 3 */}
            <div style={{ 
              width: '220px', 
              backgroundColor: '#f8f8f8', 
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/Webinars/team3.png" 
                  alt="Priya Nair" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.currentTarget.src = 'https://via.placeholder.com/220x220?text=Priya+Nair';
                  }}
                />
              </div>
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '5px' }}>Priya Nair</h3>
                <p style={{ fontSize: '14px', color: '#3182CE' }}>Director of IAM Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetailPage; 