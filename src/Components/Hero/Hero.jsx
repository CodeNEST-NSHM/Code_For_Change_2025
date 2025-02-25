import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="content">
        <motion.h1 
          className="title shadow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {"Code for Change 2025".split("      ").map((char, index) => (
            <motion.span 
              key={index} 
              className="animated-char shadow-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="subtitle presented-by shadow-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Presented by
        </motion.p>
        <motion.p 
          className="subtitle organizer shadow-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          OSSDC and NSHM Knowledge Campus, Durgapur
        </motion.p>

        {/* Apply with Devfolio Button */}
        <div
          className="apply-button"
          data-hackathon-slug="code-for-change-1"
          data-button-theme="light"
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
