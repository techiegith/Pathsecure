"use client";
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const BlogsSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Why Identity is the New Perimeter in Cybersecurity",
      date: "Apr 10, 2024",
      description: "Explore how modern organizations must shift focus from network-based security to identity-centric strategies in a cloud-first world...",
      image: "/Blogs/image (1).png"
    },
    {
      id: 2,
      title: "Top 5 IAM Best Practices for 2025",
      date: "Apr 10, 2024",
      description: "A quick guide on securing user access, minimizing risks, and improving IAM efficiency across organizations.",
      image: "/Blogs/image(2).png"
    },
    {
      id: 3,
      title: "Top 5 IAM Best Practices for 2025",
      date: "Apr 10, 2024",
      description: "A quick guide on securing user access, minimizing risks, and improving IAM efficiency across organizations.",
      image: "/Blogs/image(3).png"
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Our <span className="text-blue-500">Blogs & Articles</span>
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Our expertise in IAM, cloud security, and compliance-driven strategies helps businesses 
          safeguard their digital assets while improving operational efficiency.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left blog - large featured post */}
          <div className="md:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-md relative">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title}
              className="w-full h-full object-cover" 
            />
            {/* Gradient covering entire image but fading to transparent at top */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-sm text-white/90 mb-3">
                {blogPosts[0].date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{blogPosts[0].title}</h3>
              <p className="text-white/80 text-sm mb-4 max-w-sm">
                {blogPosts[0].description}
              </p>
              <a href="#" className="text-blue-300 hover:text-white border-b border-blue-300 pb-0.5">Read More</a>
            </div>
          </div>

          {/* Right column with two blog cards stacked */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {blogPosts.slice(1, 3).map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-3xl overflow-hidden shadow-md flex">
                <div className="w-2/5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-3/5 p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {post.description}
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 border-b border-blue-500 pb-0.5">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection; 