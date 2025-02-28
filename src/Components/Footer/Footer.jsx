import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

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
            <a href="https://www.linkedin.com/company/codenest-osdc/ " target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/codenest_osdc/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
            </a>
            <a href="https://discord.gg/uj39vnq9JP" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" className="social-icon" />
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