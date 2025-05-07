"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

type TestimonialData = {
  text: string;
  name: string;
  position: string;
  imageSrc: string;
  variant: "light" | "dark";
};

const ClientReviews = () => {
  const testimonials: TestimonialData[] = [
    {
      text: "Reliable, professional, and technically brilliant. They modernized our legacy identity systems without disrupting public access—exactly what we needed.",
      name: "Natalie Brooks",
      position: "IT Director, CityGov Digital Services",
      imageSrc: "/review/review1.png",
      variant: "light"
    },
    {
      text: "PathSecure transformed our identity management process. Their team was knowledgeable, responsive, and delivered a secure IAM solution ahead of schedule. We've seen a 90% drop in unauthorized access attempts.",
      name: "John Matthews",
      position: "CTO, NovaBank Solutions",
      imageSrc: "/review/review2.png",
      variant: "dark"
    },
    {
      text: "The single sign-on and customer identity federation solution they implemented improved user experience and boosted customer retention. PathSecure is our go-to security partner now.",
      name: "Eric Tan",
      position: "VP of IT, Shoply Online Retail",
      imageSrc: "/review/review1.png",
      variant: "light"
    },
    {
      text: "From day one, the PathSecure team showed deep expertise in healthcare compliance. They helped us meet HIPAA standards with ease and improved our internal access controls significantly.",
      name: "Lila Simmons",
      position: "CISO, MedCore Health Systems",
      imageSrc: "/review/review2.png",
      variant: "light"
    }
  ];

  return (
    <section style={{ padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Client <span style={{ color: '#2962ff' }}>Reviews</span> About Us
        </h2>
        <p style={{ fontSize: '1.25rem', marginTop: '20px', maxWidth: '800px', margin: '20px auto 0' }}>
          Our expertise in IAM, cloud security, and compliance-driven strategies
          helps businesses safeguard their digital assets while improving
          operational efficiency.
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px', 
        maxWidth: '1000px', 
        margin: '0 auto'
      }}>
        <div style={{ gridColumn: '1 / 2', gridRow: '1', alignSelf: 'center' }}>
          <div style={{ 
            padding: '25px', 
            backgroundColor: '#f8f8f8', 
            borderRadius: '12px', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '220px', 
            width: '280px',
            border: '1px solid #e0e0e0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={{ fontSize: '3rem', color: '#2962ff', position: 'absolute', top: '10px', left: '15px' }}>❝</div>
            <p style={{ marginTop: '30px', marginBottom: '30px', fontSize: '15px', lineHeight: '1.5', textAlign: 'left' }}>{testimonials[0].text}</p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: 'auto', 
              position: 'absolute', 
              bottom: '15px', 
              left: '25px'
            }}>
              <img 
                src={testimonials[0].imageSrc} 
                alt={testimonials[0].name} 
                style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px', objectFit: 'cover' }} 
              />
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>{testimonials[0].name}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{testimonials[0].position}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ gridColumn: '2 / 3', gridRow: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ 
            padding: '25px', 
            backgroundColor: '#1e3a8a', 
            color: 'white', 
            borderRadius: '12px', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '220px', 
            width: '280px',
            border: '1px solid #1a3378',
            marginBottom: '0px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={{ fontSize: '3rem', color: '#2962ff', position: 'absolute', top: '10px', left: '15px' }}>❝</div>
            <p style={{ marginTop: '30px', marginBottom: '75px', fontSize: '15px', lineHeight: '1.5', textAlign: 'left' }}>{testimonials[1].text}</p>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: 'auto', 
              position: 'absolute', 
              bottom: '25px', 
              left: '30px' 
            }}>
              <img 
                src={testimonials[1].imageSrc} 
                alt={testimonials[1].name} 
                style={{ 
                  width: '55px', 
                  height: '55px', 
                  borderRadius: '50%', 
                  marginRight: '12px', 
                  objectFit: 'cover',
                  border: '2px solid white'
                }} 
              />
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '2px', color: 'white' }}>{testimonials[1].name}</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{testimonials[1].position}</p>
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '25px', 
            backgroundColor: '#f8f8f8', 
            borderRadius: '12px', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '220px', 
            width: '280px',
            border: '1px solid #e0e0e0',
            marginTop: '0px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={{ fontSize: '3rem', color: '#2962ff', position: 'absolute', top: '10px', left: '15px' }}>❝</div>
            <p style={{ marginTop: '30px', marginBottom: '30px', fontSize: '15px', lineHeight: '1.5', textAlign: 'left' }}>{testimonials[2].text}</p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: 'auto', 
              position: 'absolute', 
              bottom: '15px', 
              left: '25px'
            }}>
              <img 
                src={testimonials[2].imageSrc} 
                alt={testimonials[2].name} 
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '12px', objectFit: 'cover' }} 
              />
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '2px' }}>{testimonials[2].name}</h4>
                <p style={{ fontSize: '14px', color: '#555' }}>{testimonials[2].position}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ gridColumn: '3 / 4', gridRow: '1', alignSelf: 'center' }}>
          <div style={{ 
            padding: '25px', 
            backgroundColor: '#f8f8f8', 
            borderRadius: '12px', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '220px', 
            width: '280px',
            border: '1px solid #e0e0e0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={{ fontSize: '3rem', color: '#2962ff', position: 'absolute', top: '10px', left: '15px' }}>❝</div>
            <p style={{ marginTop: '30px', marginBottom: '30px', fontSize: '15px', lineHeight: '1.5', textAlign: 'left' }}>{testimonials[3].text}</p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: 'auto', 
              position: 'absolute', 
              bottom: '15px', 
              left: '25px'
            }}>
              <img 
                src={testimonials[3].imageSrc} 
                alt={testimonials[3].name} 
                style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px', objectFit: 'cover' }} 
              />
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>{testimonials[3].name}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{testimonials[3].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews; 