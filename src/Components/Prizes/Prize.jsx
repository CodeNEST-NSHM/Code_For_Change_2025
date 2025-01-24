import React from 'react';
import './Prize.css';
import { motion } from 'framer-motion';

const HackathonPrizes = () => {
  const prizeData = [
    {
      title: 'Winner',
      prize: '₹2000 Cash',
      swags: 'Exciting Swags Package',
      icon: '🥇',
      rank: 'first'
    },
    {
      title: 'Runner Up',
      prize: '₹1000 Cash',
      swags: 'Special Swag Collection',
      icon: '🥈',
      rank: 'second'
    },
    {
      title: 'Second Runner Up',
      prize: '₹500 Cash',
      swags: 'Participation Certificate',
      icon: '🥉',
      rank: 'third'
    }
  ];

  return (
    <div className="hackathon-prizes-container">
      <div className="prizes-wrapper">
        <h1 className="prizes-title">Hackathon Prizes</h1>
        
        <div className="prizes-grid">
          {prizeData.map((prize, index) => (
            <div key={index} className={`prize-card ${prize.rank}-place`}>
              <div className="prize-icon">{prize.icon}</div>
              <h2 className="prize-title">{prize.title}</h2>
              <div className="prize-amount">{prize.prize}</div>
              <p className="prize-swags">{prize.swags}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonPrizes;