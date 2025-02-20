import React, { useState } from 'react';
import './Theme.css';

const ProblemCard = ({ title, problems }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`problem-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <h2>{title}</h2>
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
      </div>
    </div>
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
