import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/img/back.jpg";

const HeroSliderFourteenSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`slider-height-5 d-flex align-items-center mb-25 bg-img ${
        sliderClassName ? sliderClassName : ""
      }`}
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="slider-content-6 slider-animated-1 text-center">
              <h1 className="animated">{data.title}</h1>
              <p className="animated">{data.subtitle}</p>
              {/* <div className="slider-btn-5 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFourteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
};

export default HeroSliderFourteenSingle;
