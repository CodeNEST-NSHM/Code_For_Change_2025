import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { date: "21 February - 14 March 2025", title: "Registration Phase", description: "Open for all participants" },
  { date: "15 March - 17 March 2025", title: "Hackathon Start", description: "Submit your Project" },
  { date: "18 March - 18 March 2025", title: "Selection Process", description: "Project evaluation" },
  { date: "21 Mar 2025", title: "Offline Presentation", description: "Final event days" },
];

const TimelineItem = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <div className="timeline-content">
          <span className="timeline-date">{event.date}</span>
          <h3 className="timeline-title">{event.title}</h3>
          <p className="timeline-description">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-heading">Timeline</h2>
      <div className="timeline-container">
        <div className="timeline-line-container">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        {timelineData.map((event, index) => (
          <TimelineItem 
            key={index}
            event={event}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;