import PropTypes from "prop-types";
import React from "react";
import teamMemberData from "../../data/team-members/team-member-one.json";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";
import textbottom from "../../assets/img/textbottom.png";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`team-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <div className="heading">
          <h2>Best Astrologers</h2>
          <img src={textbottom} alt="" />
        </div>

        <div className="row">
          {teamMemberData &&
            teamMemberData.map((single, key) => {
              return (
                <TeamMemberOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

TeamMemberOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TeamMemberOne;
