import React from 'react';
import './Resources.css';

interface BlogDetailPageProps {
  onBack?: () => void;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onBack }) => {
  // Sample blog data
  const blogData = {
    id: 5,
    title: "How a Healthcare Group Improved HIPAA Compliance with IAM",
    date: "Apr 10, 2024",
    categories: ["Blogs", "Health Care"],
    content: [
      "In an age where healthcare data breaches are increasingly common, one leading healthcare group took a proactive approach to securing sensitive patient information. Through a comprehensive Identity & Access Management (IAM) strategy, they not only enhanced security but also ensured full HIPAA compliance—without compromising user productivity.",
      "The healthcare provider operated across multiple facilities with over 5,000 employees. They faced:",
    ],
    challenges: [
      "Manual user provisioning and deprovisioning",
      "Excessive access permissions across departments",
      "Lack of visibility into who accessed what and when",
      "Difficulty meeting evolving HIPAA requirements"
    ],
    contentContinued: [
      "This created high compliance risks, audit failures, and data exposure vulnerabilities.",
      "Partnering with PathSecure IAM Consulting, the organization implemented a tailored IAM framework:"
    ],
    solutions: [
      { title: "Automated user provisioning", description: "integrated with their HR system" },
      { title: "Role-based access control (RBAC)", description: "to ensure least privilege access" },
      { title: "Multi-Factor Authentication (MFA)", description: "for all staff accessing patient data" },
      { title: "Comprehensive audit trails", description: "and real-time access reporting" }
    ],
    results: [
      "60% reduction in unauthorized access incidents",
      "Audit readiness achieved within 3 months",
      "User onboarding time reduced by 70%",
      "Improved staff productivity and user satisfaction"
    ],
    conclusion: [
      "Their IAM solution became a core pillar in protecting PHI (Protected Health Information) and maintaining ongoing compliance.",
      "For healthcare organizations, IAM is more than just an IT tool—it's a compliance enabler. By aligning security strategy with operational needs, healthcare providers can safeguard sensitive data, reduce manual workload, and stay ahead of regulations like HIPAA."
    ],
    relatedBlogs: [
      {
        id: 2,
        title: "The Future of Identity: Trends Shaping IAM in 2025",
        slug: "future-identity-trends-iam-2025",
        date: "Jul 02, 2024",
        category: "IAM",
        image: "/Blog/image(2).png"
      },
      {
        id: 3,
        title: "IAM vs. PAM: What's the Difference and Why It Matters",
        slug: "iam-vs-pam-differences",
        date: "Jul 02, 2024",
        category: "IAM",
        image: "/Blog/image(3).png"
      },
      {
        id: 4,
        title: "How IAM Strengthens Cloud Security in Hybrid Environments",
        slug: "iam-cloud-security-hybrid",
        date: "Jul 02, 2024",
        category: "Cloud Security",
        image: "/Blog/image(4).png"
      }
    ]
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="blog-detail-page">
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
          <span style={{ marginLeft: '8px' }}>Blog Detail</span>
        </a>
      </div>

      {/* Hero Image */}
      <div style={{ 
        width: '100%', 
        height: '400px', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src="/Blog/image19.png" 
          alt="Healthcare HIPAA Compliance" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Blog Content */}
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
            {blogData.date}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {blogData.categories.map((category, index) => (
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
          {blogData.title}
        </h1>

        {/* Main content */}
        <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
          {blogData.content.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
          ))}

          {/* Challenges list */}
          <ul style={{ margin: '20px 0', paddingLeft: '20px' }}>
            {blogData.challenges.map((challenge, index) => (
              <li key={index} style={{ marginBottom: '12px', position: 'relative', paddingLeft: '10px' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '-20px', 
                  color: '#6B7280'
                }}>•</span>
                {challenge}
              </li>
            ))}
          </ul>

          {/* Additional content */}
          {blogData.contentContinued.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
          ))}

          {/* Solutions list */}
          <ul style={{ margin: '20px 0', paddingLeft: '20px' }}>
            {blogData.solutions.map((solution, index) => (
              <li key={index} style={{ marginBottom: '12px', position: 'relative', paddingLeft: '10px' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '-20px', 
                  color: '#6B7280'
                }}>•</span>
                <strong>{solution.title}</strong> {solution.description}
              </li>
            ))}
          </ul>

          <p style={{ marginBottom: '20px' }}>After implementation, the healthcare group saw:</p>

          {/* Results list */}
          <ul style={{ margin: '20px 0', paddingLeft: '20px' }}>
            {blogData.results.map((result, index) => (
              <li key={index} style={{ 
                marginBottom: '12px', 
                position: 'relative', 
                paddingLeft: '10px',
                color: '#16A34A'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#16A34A',
                  color: 'white',
                  borderRadius: '50%',
                  textAlign: 'center',
                  lineHeight: '16px',
                  marginRight: '8px',
                  fontSize: '12px'
                }}>✓</span>
                {result}
              </li>
            ))}
          </ul>

          {/* Conclusion */}
          {blogData.conclusion.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Related Blogs Section */}
      <div style={{ 
        backgroundColor: '#F8FAFC', 
        padding: '60px 20px' 
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#111827',
            textAlign: 'center'
          }}>
            Related Blogs
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {blogData.relatedBlogs.map((blog) => (
              <div key={blog.id} className="resource-card" style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ height: '180px' }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>
                    {blog.date}
                  </div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    marginBottom: '12px',
                    color: '#111827'
                  }}>
                    {blog.title}
                  </h3>
                  <a 
                    href="#"
                    style={{ 
                      color: '#3B82F6', 
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage; 