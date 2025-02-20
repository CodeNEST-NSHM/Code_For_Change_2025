import React from 'react';
import { motion } from 'framer-motion';
import nshm from '../../assets/images/nshm.png';
import ossdc from '../../assets/images/ossdc.jpeg';
import devfolio from '../../assets/images/devfolio.webp';
import EthIndia from '../../assets/images/EthIndia.webp';
import polygon from '../../assets/images/polygon.jpg';
import './Sponsorship.css';

const platinumSponsors = [
  { name: 'NSHM Knowledge Campus, Durgapur', logo: nshm, link: 'https://www.nshm.com/' },
  { name: 'Open Source Student Development Club', logo: ossdc, link: 'https://ossdc.in/' },
];

const goldSponsors = [
  { name: 'Devfolio', logo: devfolio, link: 'http://devfolio.co',alt: 'DEVFOLIO LOGO' },
];

const silverSponsors = [
  { name: 'ETHIndia', logo: EthIndia, link: 'https://ethindia.co',alt: 'ETHINDIA LOGO' },
  { name: 'Polygon', logo: polygon, link: 'https://polygon.technology/',alt: 'POLYGON LOGO' },
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
      
      <div className="sponsor-category">
        <h2 className="category-title">Platinum Sponsors</h2>
        <div className="sponsor-grid">
          {platinumSponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} index={index} key={index} />
          ))}
        </div>
      </div>
      
      <div className="sponsor-category">
        <h2 className="category-title">Gold Sponsors</h2>
        <div className="sponsor-grid">
          {goldSponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} index={index} key={index} />
          ))}
        </div>
      </div>
      
      <div className="sponsor-category">
        <h2 className="category-title">Silver Sponsors</h2>
        <div className="sponsor-grid">
          {silverSponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} index={index} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SponsorCard = ({ sponsor, index }) => (
  <motion.div 
    className="sponsor-card"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-link">
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
);

export default Sponsorship;
