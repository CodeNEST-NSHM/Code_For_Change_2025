import React, { useState, useEffect } from "react";
import "./Team.css"; // Import CSS
import linkedin from "../../assets/images/icon/linkedin.png";
import instagram from "../../assets/images/icon/instagram.png";

const Team = () => {
  const [activeTab, setActiveTab] = useState("teams");
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;

  useEffect(() => {
    if (activeTab === "teams") {
      const loadTeamData = async () => {
        setLoading(true);

        const imageImports = [
          import("../../assets/images/team/soumaditya.png"),
          import("../../assets/images/team/rony.png"),
          import("../../assets/images/team/aashish.jpg"),
          import("../../assets/images/team/akash.jpg"),
          import("../../assets/images/team/sayan.png"),
          import("../../assets/images/team/faizan.jpg"),
          import("../../assets/images/team/nayab.jpg"),
          import("../../assets/images/team/shuvodip.jpg"),
          import("../../assets/images/team/ankita.jpg"),
          import("../../assets/images/team/saathi.png"),
          import("../../assets/images/team/riya.png"),
          import("../../assets/images/team/Baishali.png"),
          import("../../assets/images/team/puja.jpg"),
          import("../../assets/images/team/sohali.jpg"),
          import("../../assets/images/team/shreya.jpg"),
          import("../../assets/images/team/anusha.jpg"),
          import("../../assets/images/team/richa.jpg"),
          import("../../assets/images/team/smriti.jpg"),
          import("../../assets/images/team/dipankar.jpg"),
        ];

        try {
          const importedImages = await Promise.all(imageImports);

          const members = [
            { name: "SOUMADITYA PAL", image: importedImages[0].default, social: { linkedin: "#", instagram: "#" } },
            { name: "RONY", image: importedImages[1].default, social: { linkedin: "#", instagram: "#" } },
            { name: "AASHISH PRASAD", image: importedImages[2].default, social: { linkedin: "#", instagram: "#" } },
            { name: "AKASH LAHA", image: importedImages[3].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SAYAN GORAI", image: importedImages[4].default, social: { linkedin: "#", instagram: "#" } },
            { name: "FAIZAN KHAN", image: importedImages[5].default, social: { linkedin: "#", instagram: "#" } },
            { name: "MD NAYAB", image: importedImages[6].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SUBHADIP HAZRA", image: importedImages[7].default, social: { linkedin: "#", instagram: "#" } },
            { name: "ANKITA CHOWDHURY", image: importedImages[8].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SAATHI PAUL", image: importedImages[9].default, social: { linkedin: "#", instagram: "#" } },
            { name: "RIYA BHATTACHARYA", image: importedImages[10].default, social: { linkedin: "#", instagram: "#" } },
            { name: "BAISHALI", image: importedImages[11].default, social: { linkedin: "#", instagram: "#" } },
            { name: "PUJA RAKSHIT", image: importedImages[12].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SOHALI SHYAM", image: importedImages[13].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SHREYA BANERJEE", image: importedImages[14].default, social: { linkedin: "#", instagram: "#" } },
            { name: "ANSHUA MITRA", image: importedImages[15].default, social: { linkedin: "#", instagram: "#" } },
            { name: "RICHA SINGHA DEB", image: importedImages[16].default, social: { linkedin: "#", instagram: "#" } },
            { name: "SMRITI PRADHAN", image: importedImages[17].default, social: { linkedin: "#", instagram: "#" } },
            { name: "DIPANKAR", image: importedImages[18].default, social: { linkedin: "#", instagram: "#" } },
          ];

          setTeamMembers(members);
          setLoading(false);
        } catch (error) {
          console.error("Error loading team images:", error);
          setLoading(false);
        }
      };

      loadTeamData();
    }
  }, [activeTab]);

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="team-container">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button className={`tab-button ${activeTab === "mentors" ? "active" : ""}`} onClick={() => setActiveTab("mentors")}>
          Mentors
        </button>
        <button className={`tab-button ${activeTab === "teams" ? "active" : ""}`} onClick={() => setActiveTab("teams")}>
          Teams
        </button>
      </div>

      <h2 className="team-title">
        {activeTab === "mentors" ? "MENTORS" : "THE"} <span className="highlight">{activeTab === "mentors" ? "SECTION" : "OG"}</span> {activeTab === "mentors" ? "COMING SOON" : "CREW"}
      </h2>

      {activeTab === "mentors" ? (
        <div className="coming-soon">
          <h3>🚀 Coming Soon 🚀</h3>
        </div>
      ) : loading ? (
        <div className="loading-spinner">Loading team members...</div>
      ) : (
        <>
          <div className="team-grid">
            {currentMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="profile-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
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

          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="page-button">
              ⬅ Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => paginate(i + 1)} className={`page-button ${currentPage === i + 1 ? "active" : ""}`}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="page-button">
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
