import React, { useState } from 'react';
import '../../components/components.css';
import './Resources.css';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

interface BlogsPageProps {
  onBlogClick?: (slug: string) => void;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ onBlogClick }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Why Identity is the New Perimeter in Cybersecurity",
      slug: "identity-new-perimeter-cybersecurity",
      date: "Apr 10, 2024",
      category: "Identity Security",
      excerpt: "Explore how modern organizations must shift focus from network-based security to identity-centric strategies in a cloud-first world.",
      image: "/Blog/image(1).png"
    },
    {
      id: 2,
      title: "The Future of Identity: Trends Shaping IAM in 2025",
      slug: "future-identity-trends-iam-2025",
      date: "Jul 02, 2024",
      category: "IAM Trends",
      excerpt: "Discover the emerging technologies and strategies that will define identity and access management in the coming year.",
      image: "/Blog/image(2).png"
    },
    {
      id: 3,
      title: "IAM vs. PAM: What's the Difference and Why it Matters",
      slug: "iam-vs-pam-differences",
      date: "Jul 02, 2024",
      category: "IAM Fundamentals",
      excerpt: "Understanding the key distinctions between Identity Access Management and Privileged Access Management, and when to use each approach.",
      image: "/Blog/image(3).png"
    },
    {
      id: 4,
      title: "How IAM Strengthens Cloud Security in Hybrid Environments",
      slug: "iam-cloud-security-hybrid",
      date: "Jul 02, 2024",
      category: "Cloud Security",
      excerpt: "Implementing identity solutions that bridge on-premises and cloud infrastructures to maintain consistent security controls.",
      image: "/Blog/image(4).png"
    },
    {
      id: 5,
      title: "How a Healthcare Group Improved HIPAA Compliance with IAM",
      slug: "healthcare-hipaa-compliance-iam",
      date: "Jul 02, 2024",
      category: "Healthcare",
      excerpt: "Case study on implementing identity governance to meet strict regulatory requirements while enhancing operational efficiency.",
      image: "/Blog/image(5).png"
    },
    {
      id: 6,
      title: "Top 10 IAM Mistakes Organizations Make (and How to Avoid Them)",
      slug: "top-iam-mistakes-organizations",
      date: "Jul 02, 2024",
      category: "Best Practices",
      excerpt: "Common pitfalls in identity strategy implementation and practical guidance to ensure successful outcomes.",
      image: "/Blog/image(6).png"
    },
    {
      id: 7,
      title: "Zero Trust Architecture: A Step-by-Step Guide for Implementation",
      slug: "zero-trust-implementation-guide",
      date: "Jul 02, 2024",
      category: "Zero Trust",
      excerpt: "Breaking down the components of a zero trust model and providing actionable steps for progressive adoption.",
      image: "/Blog/image(7).png"
    },
    {
      id: 8,
      title: "Building a Scalable IAM Framework for Rapidly Growing Organizations",
      slug: "scalable-iam-framework-growing-organizations",
      date: "Jul 02, 2024",
      category: "IAM Strategy",
      excerpt: "Designing flexible identity systems that can adapt to changing business needs without sacrificing security.",
      image: "/Blog/image(8).png"
    },
    {
      id: 9,
      title: "The Role of AI and Automation in Modern IAM Systems",
      slug: "ai-automation-modern-iam",
      date: "Jul 02, 2024",
      category: "Technology",
      excerpt: "How machine learning and automated workflows are transforming identity management efficiency and accuracy.",
      image: "/Blog/image(9).png"
    },
    {
      id: 10,
      title: "IAM Compliance Checklist for Financial Institutions",
      slug: "iam-compliance-financial-institutions",
      date: "Jul 02, 2024",
      category: "Finance",
      excerpt: "Essential identity controls and governance practices for meeting regulatory requirements in banking and finance.",
      image: "/Blog/image(10).png"
    }
  ];

  // Filter blog posts based on active filter
  const filteredBlogPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  // Pagination logic
  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentPosts = filteredBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogPosts.length / blogsPerPage);

  // Page change handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

  // Handle blog click
  const handleBlogClick = (slug: string) => {
    if (onBlogClick) {
      onBlogClick(slug);
    }
  };

  // Featured blog post (first one)
  const featuredPost = blogPosts[0];

  return (
    <div className="blogs-page" style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
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
            The Blogs
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
            Explore Our Latest News & Blocks!!
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
            The Latest industry news, interviews, techynoplogies and resources.
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
              HealthCare
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#3182CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Featured Blog Post */}
        <div className="featured-blog-post" style={{ 
          marginBottom: '40px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            position: 'relative',
            height: '400px',
            width: '100%'
          }}>
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '30px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              color: 'white'
            }}>
              <div style={{ fontSize: '14px', marginBottom: '8px' }}>{featuredPost.date}</div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '14px' }}>{featuredPost.title}</h2>
              <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6' }}>{featuredPost.excerpt}</p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleBlogClick(featuredPost.slug);
                }}
                style={{
                  display: 'inline-block',
                  color: 'white',
                  borderBottom: '1px solid white',
                  paddingBottom: '2px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Skip the first post since it's already displayed as the featured post */}
          {currentPosts.filter(post => post.id !== featuredPost.id).map(post => (
            <div key={post.id} style={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }}>
              <div style={{ 
                height: '200px',
                overflow: 'hidden'
              }}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#718096', 
                  marginBottom: '8px' 
                }}>
                  {post.date}
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  color: '#2D3748', 
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#4A5568', 
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                </p>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleBlogClick(post.slug);
                  }}
                  style={{
                    display: 'inline-block',
                    color: '#3182CE',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '15px'
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special display for the Financial Institutions post */}
        {!currentPosts.some(post => post.id === 10) && (
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '50px'
          }}>
            <div 
              style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
              }}
              onClick={() => handleBlogClick(blogPosts[9].slug)}
            >
              <div style={{ 
                height: '200px',
                overflow: 'hidden'
              }}>
                <img 
                  src={blogPosts[9].image} 
                  alt={blogPosts[9].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#718096', 
                  marginBottom: '8px' 
                }}>
                  {blogPosts[9].date}
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  color: '#2D3748', 
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {blogPosts[9].title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#4A5568', 
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {blogPosts[9].excerpt.length > 100 ? `${blogPosts[9].excerpt.substring(0, 100)}...` : blogPosts[9].excerpt}
                </p>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleBlogClick(blogPosts[9].slug);
                  }}
                  style={{
                    display: 'inline-block',
                    color: '#3182CE',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '15px'
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '40px',
          gap: '5px',
          marginBottom: '40px'
        }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#f1f5f9',
              color: currentPage === 1 ? '#CBD5E0' : '#4A5568',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            Prev
          </button>
          
          <button
            onClick={() => handlePageChange(1)}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: currentPage === 1 ? 'none' : '1px solid #E2E8F0',
              backgroundColor: currentPage === 1 ? '#3B82F6' : 'white',
              color: currentPage === 1 ? 'white' : '#4A5568',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            1
          </button>
          
          <button
            onClick={() => handlePageChange(2)}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: currentPage === 2 ? 'none' : '1px solid #E2E8F0',
              backgroundColor: currentPage === 2 ? '#3B82F6' : 'white',
              color: currentPage === 2 ? 'white' : '#4A5568',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            2
          </button>
          
          <button
            onClick={() => handlePageChange(3)}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: currentPage === 3 ? 'none' : '1px solid #E2E8F0',
              backgroundColor: currentPage === 3 ? '#3B82F6' : 'white',
              color: currentPage === 3 ? 'white' : '#4A5568',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            3
          </button>
          
          <span style={{ 
            alignSelf: 'center', 
            color: '#4A5568', 
            fontSize: '20px',
            fontWeight: '600',
            padding: '0 10px'
          }}>.....</span>
          
          <button
            onClick={() => handlePageChange(7)}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: currentPage === 7 ? 'none' : '1px solid #E2E8F0',
              backgroundColor: currentPage === 7 ? '#3B82F6' : 'white',
              color: currentPage === 7 ? 'white' : '#4A5568',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            7
          </button>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#3B82F6',
              color: 'white',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage; 