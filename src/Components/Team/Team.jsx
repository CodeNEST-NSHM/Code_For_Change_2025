import React from "react";
import "./Team.css";
import rony from "../../assets/images/team/rony.png";
import baishali from "../../assets/images/team/Baishali.png";
import soumaditya from "../../assets/images/team/soumaditya.png";
import sayan from "../../assets/images/team/sayan.png";
import puja from "../../assets/images/team/puja.png";
import ankita from "../../assets/images/team/ankita.jpg";
import saathi from "../../assets/images/team/saathi.png";
import riya from "../../assets/images/team/riya.png";
import sohali from "../../assets/images/team/sohali.jpg";
import shreya from "../../assets/images/team/shreya.jpg";
import faizn from "../../assets/images/team/faizan.jpg";
import linkedin from "../../assets/images/icon/linkedin.png";
import instagram from "../../assets/images/icon/instagram.png";

// Sample data for the OG Crew
const teamMembers = [
  {
    name: "SOUMADITYA PAL",
    image: soumaditya,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
  },
  {
    name: "RONY",
    image: rony,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
  },
  {
    name: "AASHISH PRASAD",
    image: "https://via.placeholder.com/150",
    social: {
      linkedin: linkedin,
      instagram:instagram,
    },
  },
  {
    name: "SAYAN GORAI",
    image: sayan,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
  },
  {
    name: "FAIZAN KHAN",
    image: faizn,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
  },
  {
    name: "ANKITA CHOWDHURY",
    image: ankita,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
  },
  {
    name: "SAATHI PAUL",
    image: saathi,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
  },
  {
    name: "RIYA",
    image: riya,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
  },
  {
    name: "BAISHALI",
    image: baishali,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
  },
  {
    name: "PUJA",
    image: puja,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
    
  },
  {
    name: "SOHALI",
    image: sohali,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
    
  },
  {
    name: "SHEREYA",
    image: shreya,
    social: {
      linkedin: linkedin,
      instagram: instagram,
    },
    
    
  },
  
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">
        THE <span className="highlight">OG</span> CREW
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="profile-image">
              <img src={member.image} alt={member.name} />
              <div className="image-overlay"></div>
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="social-icons">
              {member.social.linkedin !== "#" && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="social-icon linkedin-icon" />
                </a>
              )}
              {member.social.instagram !== "#" && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" className="social-icon instagram-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
