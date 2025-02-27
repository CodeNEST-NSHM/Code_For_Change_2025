import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { date: "21 February - 14 March 2025", title: "Registration Phase", description: "Open for all participants" },
  { date: "15 March - 17 March 2025", title: "Hackathon Start", description: "Submit your Project" },
  { date: "18 March - 18 March 2025", title: "Selection Process", description: "Project evaluation" },
  { date: "21 Mar 2025", title: "Offline Presentation", description: "Final event days" },
];

const TimelineItem = ({ event, index, activeIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px", amount: 0.3 });
  const controls = useAnimation();

  // Only trigger animation when element comes into view
  // Don't animate out when scrolling away
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  // Calculate opacity based on active index - smoother transitions
  const opacity = index === activeIndex 
    ? 1 
    : index < activeIndex 
      ? 0.6 
      : 0.8;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    >
      <div className={`timeline-dot ${index === activeIndex ? 'active' : ''}`}></div>
      <motion.div 
        className="timeline-card"
        animate={{ opacity }}
        transition={{ duration: 0.5 }}
      >
        <div className="timeline-content">
          <span className="timeline-date">{event.date}</span>
          <h3 className="timeline-title">{event.title}</h3>
          <p className="timeline-description">{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollListenerActive = useRef(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Skip if we shouldn't process this scroll event
      if (!scrollListenerActive.current || !containerRef.current) return;
      
      // Throttle scroll updates
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;
      lastScrollY.current = currentScrollY;
      
      // Temporarily disable scroll listener to prevent re-entry
      scrollListenerActive.current = false;
      
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        if (!containerRef.current) return;
        
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerTop = window.scrollY + containerRect.top;
        const viewportMiddle = window.scrollY + (window.innerHeight / 2);
        
        // Get all timeline items
        const items = Array.from(containerRef.current.querySelectorAll('.timeline-item'));
        
        // Find the currently active item
        let newActiveIndex = 0;
        items.forEach((item, index) => {
          const itemTop = containerTop + item.offsetTop;
          const itemHeight = item.offsetHeight;
          const itemMiddle = itemTop + (itemHeight / 2);
          
          if (viewportMiddle >= itemMiddle) {
            newActiveIndex = index;
          }
        });
        
        // Only update if the active index changed
        if (newActiveIndex !== activeIndex) {
          setActiveIndex(newActiveIndex);
        }
        
        // Re-enable scroll listener
        setTimeout(() => {
          scrollListenerActive.current = true;
        }, 50); // Small delay to prevent too frequent updates
      });
    };
    
    // Initial calculation
    handleScroll();
    
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  // Calculate progress for the timeline line
  const progressRatio = activeIndex / (timelineData.length - 1);
  const lineProgress = Math.max(0, Math.min(1, progressRatio));

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-heading">Timeline</h2>
      <div ref={containerRef} className="timeline-container">
        <div className="timeline-line-container">
          <motion.div
            className="timeline-line"
            animate={{ 
              scaleY: lineProgress,
              transition: { duration: 0.3, ease: "easeOut" }
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