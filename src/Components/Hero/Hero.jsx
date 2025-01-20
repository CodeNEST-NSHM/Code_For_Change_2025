import React, { useEffect, useState } from 'react';
import './Hero.css';

const HeroSection = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 300; i++) {
        newStars.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 60 + 30,
          delay: Math.random() * -50,
          opacity: Math.random() * 0.7 + 0.3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="hero-container">
      <div className="star-field">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `shooting-star ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
      </div>

      <div className="content">
        <h1 className="title">
          {'Code for Change 2025'.split('     ').map((char, index) => (
            <span key={index} className="animated-char" style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </h1>
        
        <p className="subtitle presented-by">Presented by</p>
        <p className="subtitle organizer">OSSDC and NSHM Knowledge Campus, Durgapur</p>
        <p className="subtitle date">20 February 2025 - 20 March 2025</p>
        <p className="subtitle description">A 24 Hours Offline Hackathon</p>
        
        <div className="button-container">
          <button className="register-btn">Register Now</button>
          <button className="discord-btn">Join Discord</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;