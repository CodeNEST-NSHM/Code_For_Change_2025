import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a community of tech enthusiasts at NSHM Durgapur, striving to
            create impactful tech solutions.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@nshmkcdgp.com</p>
          <p>Phone: +91-12345-67890</p>
        </div>

        <div className="footer-section">
          <h3>Follow CodeNEST, NSHM, OSSDC</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="facebook-icon.png"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="twitter-icon.png"
                alt="Twitter"
                className="social-icon"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="instagram-icon.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Built with ❤️ by{" "}
          <a
            href="https://codenestnshm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            CodeNEST Open Source Development Club of NSHM Knowledge Campus, Durgapur
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
