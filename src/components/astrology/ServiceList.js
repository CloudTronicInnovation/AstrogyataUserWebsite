import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-three.json";
import TestimonialThreeSingle from "../../components/testimonial/TestimonialThreeSingle.js";
import OurService from "./OurService";
import textbottom from "../../assets/img/textbottom.png";

const ServiceList = () => {
  // swiper slider settings
  const settings = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
     
      768: {
        slidesPerView: 4,
        direction: "horizontal",
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        direction: "horizontal",
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        direction: "horizontal",
        spaceBetween: 20,
      },
    },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      renderPrevButton: () => (
        <button className="swiper-button-prev ht-swiper-button-nav ser-1">
          <i className="pe-7s-angle-left" />
        </button>
      ),
      renderNextButton: () => (
        <button className="swiper-button-next ht-swiper-button-nav ser-2">
          <i className="pe-7s-angle-right" />
        </button>
      )
    
  };
  

  return (
    <div
     
    >
      <div className="container">
        <div className="row align-items-center">
            <div className="testimonial-active-2">
            <div className="heading mt-20">
              <h2>Astrology Services</h2>
              <img src={textbottom} alt="" />
            </div>
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <OurService
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServiceList;
