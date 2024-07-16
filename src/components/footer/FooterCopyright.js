import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import playStoreIcon from "../../assets/img/footer/PlayStore.png";
import "../../assets/css/footer.css"

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + footerLogo}
            style={{ width: 180 }}
          />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" rel="noopener noreferrer" target="">
          Astrogyata
        </a>
        .<br /> All Rights Reserved
      </p>
      <div className="icon-container">
        <a
          href="https://astrogyata.in/app-release.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playStoreIcon} alt="Example" height={55} />
        </a>
      </div>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
