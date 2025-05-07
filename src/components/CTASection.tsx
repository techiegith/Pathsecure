"use client";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 w-full overflow-hidden">
      {/* Background Image without any overlays */}
      <div className="absolute inset-0 w-full h-full" style={{ overflow: 'hidden' }}>
        <img 
          src="/back.png" 
          alt="Digital security background" 
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          Secure Your Digital Future<br />Today!!
        </h2>
        <p 
          className="text-white/90 text-lg max-w-3xl mx-auto mb-10"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
        >
          Protect your business with cutting-edge IAM solutions that enhance security,
          ensure compliance, and streamline access management.
        </p>
        <a 
          href="#" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTASection; 