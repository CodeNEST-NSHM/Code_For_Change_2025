// Hero.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { Share2, X, Calendar, Users, Clock, MapPin } from 'lucide-react';
import instagrm from '../../assets/images/instagram.svg';
import github from '../../assets/images/github.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import './Hero.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date('2025-02-20T00:00:00');
      const difference = hackathonDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-item">
          <span className="countdown-value">{value.toString().padStart(2, '0')}</span>
          <span className="countdown-label">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const AnnouncementBanner = ({ onClose }) => (
  <div className="announcement-banner">
    <div className="announcement-content">
      <span>🎉 Early bird registration is now open! Get 20% off until January 31st.</span>
      <button onClick={onClose} className="close-button" aria-label="Close announcement">
        <X size={18} />
      </button>
    </div>
  </div>
);

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Register for Code for Change 2025</h2>
        <form className="registration-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="College/University" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="">Select Your Role</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
          <button type="submit" className="submit-btn">Complete Registration</button>
        </form>
      </div>
    </div>
  );
};

const SocialLinks = () => (
  <div className="social-links">
    {[
      { icon: "github", url: "#", label: "GitHub", imgSrc: github },
      { icon: "twitter", url: "#", label: "Twitter", imgSrc: twitter },
      { icon: "linkedin", url: "#", label: "LinkedIn", imgSrc: linkedin },
      { icon: "instagram", url: "#", label: "Instagram", imgSrc: instagrm }
    ].map(social => (
      <a 
        key={social.icon} 
        href={social.url} 
        className={`social-icon ${social.icon}`}
        aria-label={social.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src = {social.imgSrc} alt="" srcset="" />
        <span className="sr-only">{social.label}</span>
      </a>
    ))}
  </div>
);
const HeroSection = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBanner, setShowBanner] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Handle share button click
  const handleShare = async () => {
    const eventUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(eventUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle star click for shooting star effect
  const createShootingStar = useCallback((e) => {
    const newStar = {
      left: `${(e.clientX / window.innerWidth) * 100}%`,
      top: `${(e.clientY / window.innerHeight) * 100}%`,
      size: 3,
      duration: 20,
      delay: 0,
      opacity: 1,
      isShootingStar: true
    };

    setStars(prev => [...prev, newStar]);
    setTimeout(() => {
      setStars(prev => prev.filter(star => star !== newStar));
    }, 1000);
  }, []);

  return (
    <div className="hero-container" onClick={createShootingStar}>
      <div className="background-grid"></div>
      <div 
        className="star-field"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {stars.map((star, index) => (
          <div
            key={index}
            className={`star ${star.isShootingStar ? 'shooting' : ''}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: star.isShootingStar 
                ? 'shooting-star 1s linear forwards'
                : `shooting-star ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
      </div>

      <div className="content">
        <h1 className="title">
          {"Code for Change 2025".split('').map((char, index) => (
            <span 
              key={index} 
              className="animated-char"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                marginLeft: char === ' ' ? '0.3em' : '0'
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="subtitle presented-by">Presented by</p>
        <p className="subtitle organizer">OSSDC and NSHM Knowledge Campus, Durgapur</p>

        {showBanner && <AnnouncementBanner onClose={() => setShowBanner(false)} />}
        
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={20} />
            <span>20 Feb - 20 Mar 2025</span>
          </div>
          <div className="detail-item">
            <MapPin size={20} />
            <span>NSHM Knowledge Campus, Durgapur</span>
          </div>
          <div className="detail-item">
            <Clock size={20} />
            <span>24 Hours Hackathon</span>
          </div>
          <div className="detail-item">
            <Users size={20} />
            <span>500+ Participants Expected</span>
          </div>
        </div>

        <CountdownTimer />
        
        <div className="button-container">
          <button className="register-btn" onClick={() => setIsModalOpen(true)}>
            <svg className="register-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 7h-8v6h8V7zm2-2v10H5V5h16zm0-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
            Register Now
          </button>
          <button className="discord-btn">
            <svg className="discord-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord
          </button>
          <button 
            className={`share-btn ${copied ? 'copied' : ''}`} 
            onClick={handleShare}
          >
            <Share2 size={20} />
            {copied ? 'Copied!' : 'Share Event'}
          </button>
        </div>
        <SocialLinks />
      </div>
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default HeroSection;