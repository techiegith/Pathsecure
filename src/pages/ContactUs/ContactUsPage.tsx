import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-us-page">
      <div className="main-content">
        {/* Header Section */}
        <section className="contact-us-header-section">
          <div className="contact-us-header-container">
            <h2 className="contact-us-title">Contact Us</h2>
            <h1 className="contact-us-heading">
              We'd Love To Hear From You
              <div className="arrow-container">
                <img src="/Vector.png" alt="Arrow down" className="arrow-down" />
              </div>
            </h1>
            <p className="contact-us-subtitle">Let's chat about how we can help.</p>
          </div>
        </section>

        {/* World Map Section */}
        <section className="contact-us-map-section">
          <img src="/worldmap_white.png" alt="World Map" className="dotted-world-map" />
          <div className="location-dot"></div>
        </section>
        
        {/* Spacer */}
        <div style={{ height: "20px", background: "white" }}></div>
        
        {/* Contact Cards Section */}
        <section className="contact-cards-section">
          <div className="contact-cards-container">
            {/* Support Card */}
            <div className="contact-card">
              <div className="contact-card-icon support-icon">
                <img src="/icons/support-icon.svg" alt="Support" />
              </div>
              <h3>Support</h3>
              <p>Our Friendly team is here to help to you in your journey</p>
              <a href="mailto:pathsecuresupport@gmail.com" className="contact-email">
                pathsecuresupport@gmail.com
              </a>
            </div>

            {/* Request Consultation Card */}
            <div className="contact-card">
              <div className="contact-card-icon consultation-icon">
                <img src="/icons/consultation-icon.svg" alt="Consultation" />
              </div>
              <h3>Request Consultation</h3>
              <p>Want to get consultation for specific service?? Contact Us At</p>
              <a href="mailto:pathsecuresales@gmail.com" className="contact-email">
                pathsecuresales@gmail.com
              </a>
            </div>

            {/* Visit Us Card */}
            <div className="contact-card">
              <div className="contact-card-icon location-icon">
                <img src="/icons/location-icon.svg" alt="Location" />
              </div>
              <h3>Visit Us At</h3>
              <p>Visit Our Office At</p>
              <address className="office-address">
                29 South view, Austerfield Doncaster<br />
                South Yorkshire, DN10QR
              </address>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section" style={{ backgroundImage: 'url(/background.png)' }}>
          <div className="contact-form-container">
            <div className="contact-form-content">
              <h2 className="get-in-touch">
                Get In <span className="touch-text">Touch</span>
              </h2>
              <p className="form-subtitle">
                Have questions or feedback? We're here to help.
              </p>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <div className="select-wrapper">
                    <select id="service" className="form-control">
                      <option value="">Select</option>
                      <option value="iam">Identity & Access Management</option>
                      <option value="pam">Privileged Access Management</option>
                      <option value="cloud">Cloud Security</option>
                      <option value="compliance">Regulatory Compliance</option>
                    </select>
                    <div className="select-arrow"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us your query..."
                    className="form-control"
                    rows={4}
                  ></textarea>
                </div>

                <button type="submit" className="send-message-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage; 