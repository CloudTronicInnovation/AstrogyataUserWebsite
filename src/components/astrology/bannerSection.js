import React from 'react'
import LayoutOne from '../../layouts/LayoutOne'
// import {  Row,  Col } from "reactstrap";
// import PropTypes from "prop-types";
import SectionTitleTwo from '../../components/section-title/SectionTitleTwo'
import teamMemberData from '../../data/team-members/team-member-one.json'
import TeamMemberOneSingle from '../../components/team-member/TeamMemberOneSingle'
// import { Button } from "react-scroll";

class bannerSection extends React.Component {
  render() {
    return (
      <LayoutOne>
        <div>
          <div className="container">
            {/* section title */}
            <SectionTitleTwo
              titleText="OUR ASTROLOGERS"
              subTitleText="Lorem ipsum dolor sit amet conse ctetu."
              positionClass="text-center"
              spaceClass="mb-60"
            />

            <div className="row">
              {teamMemberData &&
                teamMemberData.map((single, key) => {
                  return (
                    <TeamMemberOneSingle
                      data={single}
                      spaceBottomClass="mb-30"
                      key={key}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </LayoutOne>
    )
  }
}

export default bannerSection
