import React from 'react';
import { motion } from 'framer-motion';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.png';
import './Footer.css';

const Footer = () => {
  return (
    <motion.div 
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Code of Conduct</h3>
          <p>Our code of conduct ensures a safe, inclusive environment for all participants. Please follow the guidelines to ensure a positive experience for everyone.</p>
        </motion.div>

        <motion.div 
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Follow NSHM</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/nshmuniversity/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src={instagram} 
                alt="Instagram" 
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              />
            </a>
            <a href="https://www.facebook.com/nshm.university" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src={facebook} 
                alt="Facebook" 
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Meet Organizer</h3>
          <p>Get to know the talented organizers behind CodeNEST!</p>
        </motion.div>

        <motion.div 
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Contact Us</h3>
          <p>Email us at <a href="mailto:connectcodenest@gmail.com">connectcodenest@gmail.com</a></p>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Built with ❤️ by Team CodeNEST</p>
        <a href="https://codenestnshm.netlify.app/" className="footer-link">CodeNEST</a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
