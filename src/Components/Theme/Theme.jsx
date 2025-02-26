import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Theme.css';

const ProblemCard = ({ title, problems }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className={`problem-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }} // Subtle jumping animation
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
    >
      <motion.div 
        className="card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="card-front">
          <h2>{title}</h2>
          <p className="click-hint" style={{ opacity: 0.6 }}>Click to flip</p>
        </div>
        <div className="card-back">
          <div className="problem-section">
            <h3>Challenges</h3>
            <ul>
              {problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HackathonTheme = () => {
  const cards = [
    {
      title: "Healthcare",
      problems: ["Access to Care", "Data Privacy", "Patient Experience"]
    },
    {
      title: "Education",
      problems: ["Remote Learning", "Digital Divide", "Student Engagement"]
    },
    {
      title: "Environment",
      problems: ["Climate Change", "Waste Management", "Energy Usage"]
    },
    {
      title: "Finance",
      problems: ["Financial Inclusion", "Security", "User Experience"]
    }
  ];

  return (
    <div className="hackathon-container">
      <div className="content-box">
        <h1>Hackathon Themes</h1>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <ProblemCard
              key={index}
              title={card.title}
              problems={card.problems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonTheme;
