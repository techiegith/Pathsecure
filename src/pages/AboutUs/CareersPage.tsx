import React from 'react';

interface CareersPageProps {
  onNavigate?: (path: string) => void;
  currentPage?: string;
}

const CareersPage: React.FC<CareersPageProps> = () => {
  return (
    <div className="careers-page w-full">
      <div className="main-content w-full">
        {/* Hero Section */}
        <section className="hero-section bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Join Our Team</h1>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              PathSecure is always looking for talented individuals who are passionate about cybersecurity and identity management. Explore opportunities to grow your career with us.
            </p>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/about/careers-team.png" 
                  alt="Our Team Culture" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                />
              </div>
              
              <div className="space-y-6">
                <div className="benefit">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Innovative Environment</h3>
                  <p className="text-gray-700">
                    Work on cutting-edge IAM solutions that solve real security challenges for businesses across various industries.
                  </p>
                </div>
                
                <div className="benefit">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Professional Growth</h3>
                  <p className="text-gray-700">
                    Continuous learning opportunities, certification support, and clear career advancement paths to help you reach your full potential.
                  </p>
                </div>
                
                <div className="benefit">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Collaborative Culture</h3>
                  <p className="text-gray-700">
                    Join a diverse team of experts who work together to solve complex challenges in a supportive, inclusive environment.
                  </p>
                </div>
                
                <div className="benefit">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-700">
                    Flexible work arrangements, competitive benefits, and a culture that values well-being and personal time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Job Listing 1 */}
              <div className="job-card bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-blue-600">Senior IAM Consultant</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  We're looking for an experienced IAM consultant with deep expertise in identity governance, access management solutions, and enterprise implementations.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                  Apply Now
                </button>
              </div>
              
              {/* Job Listing 2 */}
              <div className="job-card bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-blue-600">Cloud Security Engineer</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Join our cloud security team to design and implement secure identity solutions for AWS, Azure, and GCP environments with a focus on Zero Trust architectures.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                  Apply Now
                </button>
              </div>
              
              {/* Job Listing 3 */}
              <div className="job-card bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-blue-600">Identity Solutions Architect</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Design comprehensive identity and access management solutions that address complex client requirements while ensuring security best practices and compliance.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-4">
                Don't see a position that matches your skills? We're always interested in talented individuals who are passionate about IAM.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                Send Us Your Resume
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage; 