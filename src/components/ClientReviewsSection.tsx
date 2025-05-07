"use client";
import React from "react";
import ClientReview from "./ClientReview";
import QuoteIcon from "./QuoteIcon";

const ClientReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "John Matthews",
      title: "CTO, NovaBank Solutions",
      image: "/review/review1.png",
      content: "PathSecure transformed our identity management process. Their team was knowledgeable, responsive, and delivered a secure IAM solution ahead of schedule. We've seen a 90% drop in unauthorized access attempts.",
      isPrimary: true
    },
    {
      name: "Natalie Brooks",
      title: "IT Director, CityGov Digital Services",
      image: "/review/review2.png",
      content: "Reliable, professional, and technically brilliant. They modernized our legacy identity systems without disrupting public access—exactly what we needed."
    },
    {
      name: "Eric Tan",
      title: "VP of IT, Shoply Online Retail",
      image: "/review/review4.png",
      content: "The single sign-on and customer identity federation solution they implemented improved user experience and boosted customer retention. PathSecure is our go-to security partner now."
    },
    {
      name: "Lila Simmons",
      title: "CISO, MedCore Health Systems",
      image: "/review/review3.png",
      content: "From day one, the PathSecure team showed deep expertise in healthcare compliance. They helped us meet HIPAA standards with ease and improved our internal access controls significantly."
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Client <span className="text-blue-500">Reviews</span> About Us
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Our expertise in IAM, cloud security, and compliance-driven strategies helps businesses 
          safeguard their digital assets while improving operational efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left column - Natalie Brooks */}
          <div className="md:col-span-4 flex items-center">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="text-blue-500 mb-4">
                <QuoteIcon />
              </div>
              <p className="text-gray-700 mb-6">
                {reviews[1].content}
              </p>
              <div className="flex items-center">
                <img 
                  src={reviews[1].image} 
                  alt={reviews[1].name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium text-gray-900">{reviews[1].name}</h4>
                  <p className="text-gray-600 text-sm">{reviews[1].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center column - John Matthews (primary) & Eric Tan */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Primary testimonial - John Matthews */}
            <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="text-blue-300 mb-4">
                <QuoteIcon />
              </div>
              <p className="mb-6">
                {reviews[0].content}
              </p>
              <div className="flex items-center border-t border-indigo-800 pt-4 mt-2">
                <img 
                  src={reviews[0].image} 
                  alt={reviews[0].name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium">{reviews[0].name}</h4>
                  <p className="text-blue-300 text-sm">{reviews[0].title}</p>
                </div>
              </div>
            </div>
            
            {/* Eric Tan testimonial */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="text-blue-500 mb-4">
                <QuoteIcon />
              </div>
              <p className="text-gray-700 mb-6">
                {reviews[2].content}
              </p>
              <div className="flex items-center">
                <img 
                  src={reviews[2].image} 
                  alt={reviews[2].name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium text-gray-900">{reviews[2].name}</h4>
                  <p className="text-gray-600 text-sm">{reviews[2].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Lila Simmons */}
          <div className="md:col-span-4 flex items-center">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="text-blue-500 mb-4">
                <QuoteIcon />
              </div>
              <p className="text-gray-700 mb-6">
                {reviews[3].content}
              </p>
              <div className="flex items-center">
                <img 
                  src={reviews[3].image} 
                  alt={reviews[3].name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium text-gray-900">{reviews[3].name}</h4>
                  <p className="text-gray-600 text-sm">{reviews[3].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection; 