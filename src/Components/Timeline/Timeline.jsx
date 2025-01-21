import React from 'react';
import './Timeline.css';

const TimelineTree = () => {
  return (
    <div className="hero-container">
      <div className="timeline-wrapper">
        <div className="curved-timeline">
          {[
            {
              date: '01 Feb - 15 Feb 2025',
              title: 'Registration Phase',
              description: 'Open for all participants',
            },
            {
              date: '16 Feb - 30 Feb 2025',
              title: 'Idea Submission',
              description: 'Submit your ideas',
            },
            {
              date: '01 Mar - 05 Mar 2025',
              title: 'Selection Process',
              description: 'Project evaluation',
            },
            {
              date: '10 Mar - 11 Mar 2025',
              title: 'Hackathon Event',
              description: 'Final event days',
            },
          ].map((item, index) => (
            <div key={index} className="timeline-section">
              <div className="leaf-node">
                <div className="leaf-content">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="content-box">
                <div className="date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineTree;
