import React from 'react';
import './Theme.css';

const HackathonTheme = () => {
  return (
    <div className="theme-container">
      <h1 className="theme-title">Hackathon Theme</h1>

      <div className="problem-statement">
        <h2>Healthcare Workers</h2>
        <div className="problem-list">
          <p><strong>Language Barriers:</strong> Communication challenges between healthcare providers and patients from diverse linguistic backgrounds.</p>
          <p><strong>Cultural Differences:</strong> Misunderstandings and ineffective care due to differing cultural values and beliefs.</p>
          <p><strong>Burnout:</strong> High stress levels and emotional exhaustion among healthcare professionals.</p>
          <p><strong>Mental Health:</strong> Limited access to mental health support for healthcare workers.</p>
        </div>
        <h3>Potential Solutions</h3>
        <div className="solution-list">
          <p><strong>Communication Tools:</strong> Language translation services, multilingual staff, culturally sensitive communication materials.</p>
          <p><strong>Cultural Training:</strong> Education and training programs to increase cultural awareness and sensitivity.</p>
          <p><strong>Mental Health Support Systems:</strong> Access to counseling, therapy, and support groups for healthcare workers.</p>
        </div>
      </div>

      <div className="problem-statement">
        <h2>Natural Disasters</h2>
        <div className="problem-list">
          <p><strong>Data Deficiencies:</strong> Lack of real-time data on the impact of disasters and the needs of affected populations.</p>
          <p><strong>Fragmented Coordination:</strong> Inefficient communication and coordination between different agencies and organizations involved in disaster response.</p>
        </div>
        <h3>Potential Solutions</h3>
        <div className="solution-list">
          <p><strong>Improved Data Collection Systems:</strong> Real-time data collection and analysis tools for disaster response.</p>
          <p><strong>Unified Response Frameworks:</strong> Standardized protocols and communication channels for coordinated disaster response.</p>
        </div>
      </div>

      <div className="problem-statement">
        <h2>Environmental Conservation</h2>
        <div className="problem-list">
          <p><strong>Unsustainable resource consumption:</strong> Overuse of natural resources leading to depletion and environmental degradation.</p>
          <p><strong>E-waste management:</strong> The growing challenge of electronic waste disposal and its environmental impact.</p>
        </div>
        <h3>Potential Solutions</h3>
        <div className="solution-list">
          <p><strong>Sustainable consumption practices:</strong> Promoting responsible consumption habits, reducing waste, and adopting eco-friendly alternatives.</p>
          <p><strong>AI-driven waste management:</strong> Utilizing AI and technology for efficient waste collection, sorting, and recycling.</p>
        </div>
      </div>
      <div className="problem-statement">
        <h2>Education</h2>
        <div className="problem-list">
          <p><strong/>Accessibility for disabled students, educational inequalities</p>
        </div>
        <h3>Potential Solutions</h3>
        <div className="solution-list">
          <p><strong>Sustainable consumption practices:</strong> Promoting responsible consumption habits, reducing waste, and adopting eco-friendly alternatives.</p>
          <p><strong>AI-driven waste management:</strong> Utilizing AI and technology for efficient waste collection, sorting, and recycling.</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonTheme;