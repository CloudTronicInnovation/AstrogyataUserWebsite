import PropTypes from "prop-types";
import React from "react";
import textbottom from "../../assets/img/textbottom.png";

const SectionTitleTwo = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div
      className={`section-title-2 ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      }`}
    >
      <h2>{titleText}</h2>
      <img src={textbottom} alt=""/>
    </div>
  );
};

SectionTitleTwo.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subTitleText: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleTwo;
