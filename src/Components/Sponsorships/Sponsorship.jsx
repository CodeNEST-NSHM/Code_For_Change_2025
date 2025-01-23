import React from 'react';
import { motion } from 'framer-motion';
import nshm from '../../assets/images/nshm.png';
import ossdc from '../../assets/images/ossdc.jpeg';
import './Sponsorship.css';

const sponsors = [
  { name: 'NSHM Knowledge Campus, Durgapur', logo: nshm, link: 'https://www.nshm.com/' },
  { name: 'Open Source Student Development Club', logo: ossdc, link: 'https://ossdc.in/' },
];

const Sponsorship = () => {
  return (
    <motion.div 
      className="sponsorship-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="sponsorship-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        Our Sponsors
      </motion.h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            className="sponsor-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <motion.img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="sponsor-logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              />
              <motion.p 
                className="sponsor-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {sponsor.name}
              </motion.p>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sponsorship;
