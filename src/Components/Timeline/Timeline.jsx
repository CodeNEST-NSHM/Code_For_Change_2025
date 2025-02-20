import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Timeline.css';

const timelineData = [
  { date: "21 March - 14 March 2025", title: "Registration Phase", description: "Open for all participants" },
  { date: "15 March - 17 March 2025", title: "Project Submission", description: "Submit your Project" },
  { date: "18 March - 18 March 2025", title: "Selection Process", description: "Project evaluation" },
  { date: "21 Mar 2025", title: "Hackathon Event", description: "Final event days" },
];

const TimelineItem = ({ event, index, activeIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
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
      transition: { duration: 0.1 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{
        opacity: activeIndex === index ? 1 : activeIndex > index ? 0.3 : 1
      }}
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('.timeline-item');
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      items.forEach((item, index) => {
        const itemTop = item.offsetTop + containerTop;
        if (scrollPosition > itemTop) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-heading">Timeline</h2> {/* Added heading */}
      <div ref={containerRef} className="timeline-container">
        <div className="timeline-line-container">
          <motion.div 
            className="timeline-line"
            style={{
              scaleY: activeIndex / (timelineData.length - .8)
            }}
          />
        </div>
        
        {timelineData.map((event, index) => (
          <TimelineItem 
            key={index}
            event={event}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;