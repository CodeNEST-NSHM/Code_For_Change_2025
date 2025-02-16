import React from "react";
import "./timer.css";

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <div className="content-box">
        <h1>What is Code for Change</h1>

        {/* About Box */}
        <div className="about-box">
        <p>
            <strong>Code for Change</strong> is a <strong>24-hour offline hackathon</strong> by
            <strong> NSHM Knowledge Campus, Durgapur</strong>, in collaboration with the
            <strong> Open Source Student Development Club</strong>. It features two rounds: an online idea submission
            followed by an on-campus 24-hour coding challenge for the top 10 teams. Showcase creativity, collaborate,
            and solve real-world problems! 🚀
          </p>
        </div>

        {/* Time & Registration Box */}
        <div className="time-and-registration-box">
          <p className="event-date">📅 25-02-2025 to 05-04-2025</p>
          <button className="register-btn">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
