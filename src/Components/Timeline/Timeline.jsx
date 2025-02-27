import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { date: "21 February - 14 March 2025", title: "Registration Phase", description: "Open for all participants" },
  { date: "15 March - 17 March 2025", title: "Hackathon Start", description: "Submit your Project" },
  { date: "18 March - 18 March 2025", title: "Selection Process", description: "Project evaluation" },
  { date: "21 Mar 2025", title: "Offline Presentation", description: "Final event days" },
];

const TimelineItem = ({ event, index, activeIndex }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (index === activeIndex) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0.5, y: 50, scale: 0.9 });
    }
  }, [activeIndex, index, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    >
      <div className={`timeline-dot ${index === activeIndex ? 'active' : ''}`}></div>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null); // Prevent frequent updates

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        requestAnimationFrame(() => {
          const items = containerRef.current.querySelectorAll('.timeline-item');
          const viewportMiddle = window.innerHeight / 2;
          let newIndex = 0;

          items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const itemMiddle = rect.top + rect.height / 2;
            if (itemMiddle < viewportMiddle) {
              newIndex = index;
            }
          });

          // Prevent unnecessary updates
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        });
      }, 100); // Smooth delay
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [activeIndex]);

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-heading">Timeline</h2>
      <div ref={containerRef} className="timeline-container">
        <div className="timeline-line-container">
          <motion.div
            className="timeline-line"
            animate={{ scaleY: (activeIndex + 1) / timelineData.length }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        {timelineData.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} activeIndex={activeIndex} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
