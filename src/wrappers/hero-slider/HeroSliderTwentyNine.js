import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
const HeroSliderTwentyNine = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axiosConfig
      .get("/admin/getbanner")
      .then(response => {
        setSliderData(response.data.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,

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
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {sliderData &&
            sliderData?.map((single, key) => {
              return (
                <HeroSliderTwentyNineSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;
