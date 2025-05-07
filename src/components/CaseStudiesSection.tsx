import React from 'react';

const CaseStudiesSection: React.FC = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Case <span className="text-blue-500">Studies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our expertise in IAM, cloud security, and compliance-driven strategies
              helps businesses safeguard their digital assets while improving
              operational efficiency.
            </p>
          </div>
          
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-full transition-colors duration-300">
            Explore All
          </a>
        </div>
        
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
    </section>
  );
};

export default CaseStudiesSection; 