import React from "react";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
import LayoutOne from "../../layouts/LayoutOne";
import OurWorkFlow from "../../components/astrology/ourworkflow";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import AboutUs from "../../components/astrology/aboutus";
import FeatureIconSix from "../../wrappers/feature-icon/FeatureIconSix";
import SectionPooja from "../../components/astrology/sectionpooja";
import SliderList from "../../components/astrology/sliderlist";
import HomeVideoList from "../../components/astrology/HomeVideoList";
import OurService from "../../components/astrology/OurService";

const HomeFurnitureTwo = () => {
  return (
    <LayoutOne headerTop="visible">
      {/* hero slider */}
      <HeroSliderTwentyNine />
      {/* {sliderData.map((silderimg) => {
        
      })} */}
      {/* First Section */}

      <OurWorkFlow />
      {/* Second section */}

      {/* feature text */}
      <FeatureIconSix spaceBottomClass="pb-30" spaceTopClass="pt-30" />

      <OurService />

      <AboutUs />
      {/* abutus */}

      {/* <PredictionallHome /> */}
      {/* third section */}

      {/* <FirstSectiontwo /> */}
      {/* Second Store */}

      {/* <FirstSectiontree /> */}
      {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}
      <SliderList />

      <SectionPooja />
      {/* third section */}
      <HomeVideoList />

      {/* <SliderYouTubeList /> */}
      {/* Product slider */}
      {/* <SecondSection /> */}
      {/* Browse by category */}
      {/* <ByCategory /> */}
      {/* newsletter */}
      {/* <NewsletterTwo spaceBottomClass="pb-100" /> */}

      {/* fun fact */}
      <FunFactOne spaceTopClass="pt-30" spaceBottomClass="pb-30" />

      {/* testimonial */}
      {/* <TestimonialOne
        spaceTopClass="pt-95"
        spaceBottomClass="pb-95"
        bgColorClass="bg-gray-3"
      /> */}

      {/* blog featured */}

      <BlogFeatured spaceBottomClass="pb-55" />
    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
