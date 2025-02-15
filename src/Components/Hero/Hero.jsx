import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {"Code for Change 2025".split('      ').map((char, index) => (
            <motion.span 
              key={index} 
              className="animated-char"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="subtitle presented-by"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Presented by
        </motion.p>
        <motion.p 
          className="subtitle organizer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          OSSDC and NSHM Knowledge Campus, Durgapur
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
