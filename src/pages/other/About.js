import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
//import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
//import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
// import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import HeroSliderFourteen from "../../wrappers/hero-slider/HeroSliderFourteen";
//import LayoutFour from "../../layouts/LayoutFour";
import LayoutOne from "../../layouts/LayoutOne";

const About = ({ location }) => {
  // const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>About us</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem> */}
      <LayoutOne>
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}

        <HeroSliderFourteen />

        {/* section title with text */}
        {/* <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" /> */}

        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" spaceTopClass="pt-70" />

        {/* fun fact */}
        <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
