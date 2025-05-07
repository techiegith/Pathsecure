import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content text-center">
        <h1 className="hero-title" style={{ textAlign: 'center', margin: '0 auto' }}>
          <div>Empowering <span className="text-primary">Secure</span> Digital</div>
          <div style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: '10px' }}>Transformation</div>
        </h1>
        <p className="hero-subtitle">
          Immediate communication of the firm's expertise in IAM, digital<br />transformation, and cloud security.
        </p>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <button className="hero-button">Get a Consultation</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src="/world_map.png" 
          alt="World map with digital elements" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection; 