import PropTypes from "prop-types";
import React from "react";
import handbgone from "../../assets/img/om.png";
import Abotimg from "../../assets/img/gif.png";
const HeroSliderTwentyNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.banner_img[0]})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 mtt">
              <h3
                className="animated no-style"
                dangerouslySetInnerHTML={{ __html: data.banner_title }}
              />
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <img src={Abotimg} className="st-1" alt="" width="400px" />
            <img src={handbgone} className="st-2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyNineSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyNineSingle;
