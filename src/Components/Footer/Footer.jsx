import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <p>Email: codenest@ossdc.in</p>
        </div>

        <div className="footer-section">
          <h3>Stay Updated by following us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Built with ❤️ by {" "}
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