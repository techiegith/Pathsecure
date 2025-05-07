"use client";
import React from "react";

interface ClientReviewProps {
  name: string;
  title: string;
  image: string;
  content: string;
  isPrimary?: boolean;
}

const ClientReview: React.FC<ClientReviewProps> = ({ name, title, image, content, isPrimary = false }) => {
  return (
    <div 
      className={`
        flex flex-col 
        h-[280px] 
        ${isPrimary ? 'bg-[#192b5e] text-white' : 'bg-white border border-gray-200'} 
        p-6 
        rounded-md 
        shadow-sm
      `}
    >
      <div className="text-left mb-2">
        <span className={`text-[#3b82f6] text-3xl font-serif leading-none ${isPrimary ? 'opacity-90' : ''}`}>
          "
        </span>
      </div>
      
      <div className="mb-auto">
        <p className={`text-left text-sm leading-relaxed ${isPrimary ? 'text-white' : 'text-gray-700'}`}>
          {content}
        </p>
      </div>
      
      <div className="flex items-center mt-4 pt-3 border-t border-gray-200 border-opacity-20">
        <img 
          src={image} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover mr-3" 
        />
        <div>
          <h4 className={`font-medium text-sm ${isPrimary ? 'text-white' : 'text-gray-800'}`}>{name}</h4>
          <p className={`text-xs ${isPrimary ? 'text-blue-200 opacity-80' : 'text-gray-600'}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview; 