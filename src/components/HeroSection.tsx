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
      <div className="hero-image-container" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(35px)',
          zIndex: '0'
        }}></div>
        <img 
          src="/world_map.png" 
          alt="World map with digital elements" 
          className="hero-image"
          style={{ position: 'relative', zIndex: '1' }}
        />
      </div>
    </section>
  );
};

export default HeroSection; 