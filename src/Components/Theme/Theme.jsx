import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Theme.css';

const ProblemCard = ({ title, problems, solutions }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`problem-card ${isExpanded ? 'expanded' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="problem-header">
        <h2>{title}</h2>
      </div>

      {!isExpanded && (
        <div className="tap-to-reveal">
          <span>Tap to Reveal</span>
        </div>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="problem-content"
          >
            <div className="problem-section">
              <h3>Challenges</h3>
              {problems.map((problem, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {problem}
                </motion.p>
              ))}
            </div>

            <div className="solution-section">
              <h3>Potential Solutions</h3>
              {solutions.map((solution, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {solution}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HackathonTheme = () => {
  const themeData = [
    {
      title: "Healthcare Workers",
      problems: [
        "Language Barriers",
        "Cultural Differences",
        "Burnout",
        "Mental Health Challenges"
      ],
      solutions: [
        "Communication Tools",
        "Cultural Training",
        "Mental Health Support Systems"
      ]
    },
    {
      title: "Natural Disasters",
      problems: [
        "Data Deficiencies",
        "Fragmented Coordination"
      ],
      solutions: [
        "Improved Data Collection Systems",
        "Unified Response Frameworks"
      ]
    },
    {
      title: "Environmental Conservation",
      problems: [
        "Unsustainable Resource Consumption",
        "E-waste Management"
      ],
      solutions: [
        "Sustainable Consumption Practices",
        "AI-driven Waste Management"
      ]
    },
    {
      title: "Education",
      problems: [
        "Accessibility for Disabled Students",
        "Educational Inequalities"
      ],
      solutions: [
        "Inclusive Learning Technologies",
        "Personalized Educational Support"
      ]
    }
  ];

  return (
    <motion.div
      className="hackathon-theme-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="theme-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Hackathon Challenge Areas
      </motion.h1>

      <div className="problem-grid">
        {themeData.map((theme, index) => (
          <ProblemCard
            key={index}
            title={theme.title}
            problems={theme.problems}
            solutions={theme.solutions}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HackathonTheme;