import React from 'react';
import CTASection from '../../components/CTASection';

interface OurApproachPageProps {
  onNavigate?: (path: string) => void;
  currentPage?: string;
}

const OurApproachPage: React.FC<OurApproachPageProps> = () => {
  // Steps data for our approach
  const steps = [
    {
      id: 1,
      title: "Understand the Mission",
      description: "We start by learning about your tech goals, objectives, and unique challenges. This helps us tailor the design to reflect your industry and clarity.",
      image: "/about/approach/Frame1.png"
    },
    {
      id: 2,
      title: "Define Structure & Flow",
      description: "We create a clear information architecture and user journey, making complex IAM topics easy to explore for potential clients and partners.",
      image: "/about/approach/Frame2.png"
    },
    {
      id: 3,
      title: "Wireframing & UX Design",
      description: "Low-fidelity wireframes help us map out user flows and page layouts, focusing on usability and logical structure before adding visual elements.",
      image: "/about/approach/Frame3.png"
    },
    {
      id: 4,
      title: "UI Design & Visual Identity",
      description: "We craft a clean, modern visual style that reflects your professionalism and builds consistency across touchpoints, visually appealing and aligned with your brand.",
      image: "/about/approach/Frame4.png"
    },
    {
      id: 5,
      title: "Prototyping & Interaction",
      description: "Interactive prototypes bring the design to life, allowing for realistic previews and user feedback before development begins.",
      image: "/about/approach/Frame5.png"
    },
    {
      id: 6,
      title: "Handoff & Support",
      description: "We deliver complete documentation, resources, and support for developers to ensure a smooth build-out. We remain available for QA and future enhancements.",
      image: "/about/approach/Frame6.png"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-white text-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-blue-600">Our Approach</h2>
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
            A Strategic Approach to Intelligent<br />IAM Design
          </h1>
          <p className="text-center text-base md:text-lg max-w-2xl mx-auto opacity-90 px-4 mb-10">
            We combine professional aesthetics with user-centered functionality to craft IAM
            websites that inspire trust and drive engagement. Every detail is designed to reflect
            expertise, clarity, and modern excellence.
          </p>
        </div>
      </section>

      {/* Approach Steps - Vertical Timeline Layout */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative pt-10 pb-20">
            {/* Vertical blue line with stronger gradient but thinner */}
            <div 
              className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #60A5FA, #3B82F6 30%, #1E40AF 50%, #3B82F6 70%, #60A5FA)'
              }}
            ></div>
            
            {/* Steps */}
            <div className="relative z-10">
              {steps.map((step) => (
                <div key={step.id} className="flex mb-16 md:mb-20 relative">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">
                    {step.id}
                  </div>
                  
                  {/* Content container */}
                  <div className="flex flex-col md:flex-row w-full pl-6 md:pl-10">
                    {/* Text Content */}
                    <div className="flex-1 md:pr-8 mb-5 md:mb-0">
                      <h3 className="text-md text-blue-500 font-semibold mb-1">Step {step.id.toString().padStart(2, '0')}</h3>
                      <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                      <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Image */}
                    <div className="flex-1 md:w-1/2">
                      <img 
                        src={step.image}
                        alt={`Step ${step.id}: ${step.title}`}
                        className="w-full h-auto rounded-lg shadow-sm md:max-w-md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default OurApproachPage; 