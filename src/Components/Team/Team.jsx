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
          import("../../assets/images/team/sayan.jpg"),
          import("../../assets/images/team/faizan.jpg"),
          import("../../assets/images/team/nayab.png"),
          import("../../assets/images/team/shuvodip.jpg"),
          import("../../assets/images/team/nachiketa.jpg"),
          import("../../assets/images/team/subhankar.jpg"),
          import("../../assets/images/team/ankita.jpg"),
          import("../../assets/images/team/saathi.png"),
          import("../../assets/images/team/riya.png"), 
          import("../../assets/images/team/Baishali.png"),
          import("../../assets/images/team/puja.jpg"),
          import("../../assets/images/team/sohali.jpg"),
          import("../../assets/images/team/shreya.jpg"),
          import("../../assets/images/team/supriti.jpg"),
          import("../../assets/images/team/anusha.jpg"),
          import("../../assets/images/team/richa.jpg"),
          import("../../assets/images/team/smriti.jpg"),
          import("../../assets/images/team/dipankar.jpg"),
          import("../../assets/images/team/amisha.jpg"),
          import("../../assets/images/team/ali.jpg"),
          import("../../assets/images/team/sumitLaha.jpg"),
          import("../../assets/images/team/vivek.jpg"),
          import("../../assets/images/team/sumit.jpg"),
          import("../../assets/images/team/vivek.jpg"),
        ];

        try {
          const importedImages = await Promise.all(imageImports);

          const members = [
            { name: "SOUMADITYA PAL", image: importedImages[0].default, social: { linkedin: "https://www.linkedin.com/in/soumaditya-pal-109029309/", instagram: "https://www.instagram.com/soumaditya.pal/" } },
            { name: "MU AHMED", image: importedImages[1].default, social: { linkedin: "https://www.linkedin.com/in/mowazzem-uddin-ahmed-96689b276/", instagram: "https://www.instagram.com/rony.op_/" } },
            { name: "AASHISH PRASAD", image: importedImages[2].default, social: { linkedin: "https://www.linkedin.com/in/aashishprasad65/", instagram: "https://www.instagram.com/aashishprasad65/" } },
            { name: "AKASH LAHA", image: importedImages[3].default, social: { linkedin: "https://www.linkedin.com/in/akash-laha-799427244/", instagram: "https://www.instagram.com/_akash_._laha_/" } },
            { name: "SAYAN GORAI", image: importedImages[4].default, social: { linkedin: "https://www.linkedin.com/in/sayangarai/", instagram: "https://www.instagram.com/sayan_garai45/" } },
            { name: "FAIZAN KHAN", image: importedImages[5].default, social: { linkedin: "https://www.linkedin.com/in/faizan-khan-41002224b/", instagram: "https://www.instagram.com/_noisy_boi_khan_/" } },
            { name: "MD NAYAB", image: importedImages[6].default, social: { linkedin: "https://www.linkedin.com/in/nayab-jalal-0b3514256/", instagram: "https://www.instagram.com/__nayabjalal__/" } },
            { name: "SHUVODIP HAZRA", image: importedImages[7].default, social: { linkedin: "https://www.linkedin.com/in/shuvodip-hazra-570a72320/", instagram: "https://www.instagram.com/sahil_hazra/" } },
            { name: "NACHIKETA PAHARI", image: importedImages[8].default, social: { linkedin: "https://www.linkedin.com/in/nachiketa-pahari-6b1028257/", instagram: "https://www.instagram.com/pahari_624/" } },
            { name: "SHUBHANKAR SAKET", image: importedImages[9].default, social: { linkedin: "https://www.linkedin.com/in/nachiketa-pahari-6b1028257/", instagram: "https://www.instagram.com/pahari_624/" } },
            { name: "ANKITA CHOWDHURY", image: importedImages[10].default, social: { linkedin: "https://www.linkedin.com/in/shubhankar-saket-3a106a257/", instagram: "https://www.instagram.com/_bae_rozgaar/" } },
            { name: "SAATHI PAUL", image: importedImages[11].default, social: { linkedin: "https://www.linkedin.com/in/saathipaul/", instagram: "https://www.instagram.com/saathi_paul/" } },
            { name: "RIYA BHATTACHARYA", image: importedImages[12].default, social: { linkedin: "https://www.linkedin.com/in/riya-bhattacharya-783285256/", instagram: "https://www.instagram.com/riya_bhattacharya_01/" } },
            { name: "BAISHALI MUKHERJEE", image: importedImages[13].default, social: { linkedin: "https://www.linkedin.com/in/baishali-mukherjee-211316284/", instagram: "https://www.instagram.com/b.a.i.s.h.a.l.i_19/" } },
            { name: "PUJA RAKSHIT", image: importedImages[14].default, social: { linkedin: "https://www.linkedin.com/in/puja-rakshit-b509292b1/", instagram: "https://www.instagram.com/_poojarakshit_/" } },
            { name: "SOHALI SHYAM", image: importedImages[15].default, social: { linkedin: "https://www.linkedin.com/in/sohali-shyam-64426430b/", instagram: "https://www.instagram.com/sohali_shyam_19/" } },
            { name: "SHREYA BANERJEE", image: importedImages[16].default, social: { linkedin: "https://www.linkedin.com/in/shreya-banerjee-591253293/", instagram: "https://www.instagram.com/shreyabanerjee05/" } },
            { name: "SUPRITI SAHOO", image: importedImages[17].default, social: { linkedin: "https://www.linkedin.com/in/supriti-sahoo-5233b1293/", instagram: "https://www.instagram.com/n_n_tinyrex_._d/" } },
            { name: "ANSHUA MITRA", image: importedImages[18].default, social: { linkedin: "https://www.linkedin.com/in/anusha-mitra-26bb5b351/", instagram: "https://www.instagram.com/_anushamitra/" } },
            { name: "RICHA SINGHA DEB", image: importedImages[19].default, social: { linkedin: "https://www.linkedin.com/in/richa-singha-deb-7b9539263/", instagram: "https://www.instagram.com/_richa95_/" } },
            { name: "SMRITI PRADHAN", image: importedImages[20].default, social: { linkedin: "https://www.linkedin.com/in/smriti-pradhan-4b0bb9352/", instagram: "https://www.instagram.com/its_.smriti/" } },
            { name: "DIPANKAR BAURI", image: importedImages[21].default, social: { linkedin: "https://www.linkedin.com/in/bot-gamer-9a6199322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/_dipankar_bauri_/" } },
            { name: "AMISHA GUPTA", image: importedImages[22].default, social: { linkedin: "https://www.linkedin.com/in/amisha-gupta-12a028257/", instagram: "https://www.instagram.com/ameesha__31?igsh=bDh2MWE5Z2w0dWk4" } },
            { name: "SHAHE HASAN RAZA KHAN", image: importedImages[23].default, social: { linkedin: "https://www.linkedin.com/in/shahe-hasan-a495622b1/", instagram: "https://www.instagram.com/shahe_hasan/" } },
            { name: "Sumit Laha", image: importedImages[24].default, social: { linkedin: "https://www.linkedin.com/in/ghoshvivek004", instagram: "https://www.instagram.com/_.viv.ek_/" } },
            { name: "Vivek Ghosh", image: importedImages[25].default, social: { linkedin: "https://www.linkedin.com/in/sumit-laha-19879621a", instagram: "https://www.instagram.com/sumit.laha.420/" } },
            { name: "SUMIT LAHA", image: importedImages[24].default, social: { linkedin: "https://www.linkedin.com/in/sumit-laha-19879621a ", instagram: "https://www.instagram.com/sumit.laha.420/" } },
            { name: "VIVEK GHOSH", image: importedImages[25].default, social: { linkedin: "https://www.linkedin.com/in/ghoshvivek004 ", instagram: "https://www.instagram.com/_.viv.ek_/" } },
            
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
