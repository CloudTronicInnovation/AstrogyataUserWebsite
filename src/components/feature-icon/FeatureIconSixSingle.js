import PropTypes from "prop-types";
import React from "react";

const FeatureIconSixSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-md-6">
      <div
        className={`support-wrap-5 support-shape ${spaceBottomClass ? spaceBottomClass : ""
          } ${textAlignClass ? textAlignClass : ""}`}
      >
        <div className="support-icon">
          <img
            className="animated img-secure"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
        </div>

        <div className="support-content-5">
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSixSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconSixSingle;
