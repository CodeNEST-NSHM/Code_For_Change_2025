import React, { useState } from "react";
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
import subhadip from "../../assets/images/team/shuvodip.jpg";
import anshua from "../../assets/images/team/anusha.jpg";
import akash from "../../assets/images/team/akash.jpg";
import nayab from "../../assets/images/team/nayab.jpg";
import atique from "../../assets/images/team/atique.jpg";
import dipankar from "../../assets/images/team/dipankar.jpg";
import linkedin from "../../assets/images/icon/linkedin.png";
import instagram from "../../assets/images/icon/instagram.png";

const teamMembers = [
  { name: "SOUMADITYA PAL", image: soumaditya, social: { linkedin: "https://www.linkedin.com/in/soumaditya-pal-109029309 ", instagram: "https://www.instagram.com/soumaditya.pal/" } },
  { name: "RONY", image: rony, social: { linkedin: "https://www.linkedin.com/in/mowazzem-uddin-ahmed-96689b276 ", instagram: "https://www.instagram.com/rony.op_/" } },
  { name: "AKASH LAHA", image: akash, social: { linkedin: "https://www.linkedin.com/in/akash-laha-799427244  ", instagram: "https://www.instagram.com/_akash_._laha_/" } },
  { name: "SAYAN GORAI", image: sayan, social: { linkedin: "https://www.linkedin.com/in/sayangarai ", instagram: "https://www.instagram.com/sayan_garai45" } },
  { name: "FAIZAN KHAN", image: faizn, social: { linkedin: "https://www.linkedin.com/in/faizan-khan-41002224b ", instagram: "https://www.instagram.com/_noisy_boi_khan_?igsh=MXAyeXJleTFuZnVnZg%3D%3D&utm_source=qr" } },
  { name: "MD NAYAB", image: nayab, social: { linkedin: "https://www.linkedin.com/in/nayab-jalal-0b3514256", instagram: "https://www.instagram.com/__nayabjalal__/" } },
  { name: "SUBHADIP HAZRA", image: subhadip, social: { linkedin: "#", instagram: "https://www.instagram.com/sahil_hazra?igsh=am1iZjhkZWJha3Zx" } },
  { name: "ANKITA CHOWDHURY", image: ankita, social: { linkedin: "https://www.linkedin.com/in/ankita-chowdhury-45a9b9250 ", instagram: "https://www.instagram.com/ankita.is.here?igsh=MWxlYng5MnR3eGltaA==" } },
  { name: "SAATHI PAUL", image: saathi, social: { linkedin: "https://www.linkedin.com/in/saathipaul ", instagram: "https://www.instagram.com/saathi_paul" } },
  { name: "RIYA", image: riya, social: { linkedin: "https://www.linkedin.com/in/riya-bhattacharjee-ba6329258 ", instagram: "https://www.instagram.com/riya_bhattacharya_01?igsh=MWYxcXdtazltbTRzcA==" } },
  { name: "ATIQUE", image: atique, social: { linkedin: "https://www.linkedin.com/in/atique-ahmed-7590b8284", instagram: "https://www.instagram.com/riya_bhattacharya_01?igsh=MWYxcXdtazltbTRzcA==" } },
  { name: "BAISHALI", image: baishali, social: { linkedin: "https://www.linkedin.com/in/baishali-mukherjee-211316284 ", instagram: "https://www.instagram.com/b.a.i.s.h.a.l.i_19?igsh=ajJuZjc5N2w0aWp4" } },
  { name: "PUJA", image: puja, social: { linkedin: "https://www.linkedin.com/in/puja-rakshit-b509292b1 ", instagram: "https://www.instagram.com/_poojarakshit_?igsh=NGY2c3hiaDJub2Y4" } },
  { name: "SOHALI", image: sohali, social: { linkedin: "https://www.linkedin.com/in/sohali-shyam-64426430b ", instagram: "https://www.instagram.com/sohali_shyam_19?igsh=c2J1YXZqZDVpMmR0" } },
  { name: "SHREYA", image: shreya, social: { linkedin: "https://www.linkedin.com/in/shreya-banerjee-591253293 ", instagram: "https://www.instagram.com/shreyabanerjee05?igsh=NXd1c2p3ZDQxZnRq" } },
  { name: "ANSHUA MITRA", image: anshua, social: { linkedin: "#", instagram: "https://www.instagram.com/_anushamitra?igsh=MXU0ZmhsY2l6eDAybg==" } },
  { name: "DIPANKAR", image: dipankar, social: { linkedin: "#", instagram: "https://www.instagram.com/_dipankar_bauri_?igsh=MXY2M2hwMDNybmFoeA==" } }
];

const Team = () => {
  const [activeTab, setActiveTab] = useState("teams");

  return (
    <div className="team-container">
      <div className="tab-buttons">
        <button className={`tab-button ${activeTab === "mentors" ? "active" : ""}`} onClick={() => setActiveTab("mentors")}>
          Mentors
        </button>
        <button className={`tab-button ${activeTab === "teams" ? "active" : ""}`} onClick={() => setActiveTab("teams")}>
          Teams
        </button>
      </div>
      <h2 className="team-title">THE <span className="highlight">OG</span> CREW</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card" style={{ zIndex: 1 }}>
            <div className="profile-image" style={{ position: "relative", zIndex: 2 }}>
              <img src={member.image} alt={member.name} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h3 className="team-name">{member.name}</h3>
         
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
