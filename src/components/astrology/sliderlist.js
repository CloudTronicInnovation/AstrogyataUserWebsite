import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
//import testimonialData from "../../data/testimonial/testimonial-one.json";
// import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import textbottom from "../../assets/img/textbottom.png";
import SliderDemo from "./sliderdemo";
import axiosConfig from "../../axiosConfig";

const SliderList = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  sliderdemoClass,
  backgroundImage,
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        direction: "horizontal",
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        direction: "horizontal",
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 2,
        direction: "horizontal",
        spaceBetween: 15,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    axiosConfig
      .get(`/admin/allAstro`)
      .then(response => {
        if (response.data.status === true) {
          setTestimonialData(response.data.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={` ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12  ml-auto mr-auto">
            <div className="heading">
              <h2>Best Astrologers</h2>
              <img src={textbottom} alt="" />
            </div>
            <div className=" nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <SliderDemo
                        data={single}
                        key={key}
                        sliderClass="swiper-slide rtt"
                        sliderdemoClass={sliderdemoClass}
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderList.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string,
};

export default SliderList;
