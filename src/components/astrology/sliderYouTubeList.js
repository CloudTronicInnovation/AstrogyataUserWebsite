import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
// import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import textbottom from "../../assets/img/textbottom.png";
import SliderYouTubeVideo from "./sliderYouTubeVideo";
import axiosConfig from "../../axiosConfig";

const SliderYouTubeList = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  sliderdemoClass,
  sliderYouTubeVideoClass,
  backgroundImage,
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
    // breakpoints: {

    //   768: {
    //     slidesPerView: 4,
    //     direction: "horizontal",
    //     spaceBetween: 20,
    //   },
    //   640: {
    //     slidesPerView: 2,
    //     direction: "horizontal",
    //     spaceBetween: 20,
    //   },
    //   320: {
    //     slidesPerView: 2,
    //     direction: "horizontal",
    //     spaceBetween: 20,
    //   },
    // },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    // renderPrevButton: () => (
    //   <button className="swiper-button-prev ht-swiper-button-nav">
    //     <i className="pe-7s-angle-left" />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button className="swiper-button-next ht-swiper-button-nav">
    //     <i className="pe-7s-angle-right" />
    //   </button>
    // )

  };

  // const [testimonialData, setTestimonialData] = useState([]);

  // useEffect(() => {
  //   axiosConfig
  //     .get(`/admin/allAstro`)
  //     .then((response) => {
  //       console.log(response.data.data);
  //       if (response.data.status === true) {
  //         setTestimonialData(response.data.data)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



  return (
    <div
      className={` ${spaceTopClass ? spaceTopClass : ""}  ${spaceBottomClass ? spaceBottomClass : ""
        } ${spaceLeftClass ? spaceLeftClass : ""}  ${spaceRightClass ? spaceRightClass : ""
        } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12  ml-auto mr-auto">
            <div className="heading">
              <h2>Watch Astrologers Video</h2>
              <img src={textbottom} alt="" />
            </div>
            <div className=" nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <SliderYouTubeVideo
                        data={single}
                        key={key}
                        sliderClass="swiper-slide rtt"
                        sliderYouTubeVideoClass={sliderYouTubeVideoClass}
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

SliderYouTubeList.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string,
  sliderYouTubeVideoClass: PropTypes.string,
};

export default SliderYouTubeList;
