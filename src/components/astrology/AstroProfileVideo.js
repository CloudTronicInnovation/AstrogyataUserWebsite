import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";

import astro3 from "../../assets/img/team/astro3.jpg";
import axiosConfig from "./../../axiosConfig";
import { CloudLightning } from "react-feather";

export default function AstroProfileVideo() {
  const Param = useParams();

  const [astroimage, setAstroImage] = useState([]);

  const getallgallary = () => {
    axiosConfig
      .get(`/admin/get_astroGallery/${Param.id}`)
      // .get(`/admin/get_astroGallery/${Param.id}`)
      .then(res => {
        setAstroImage(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallgallary();
  }, []);

  const settings = {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,

    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav gt-1">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav gt-2">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  return (
    <>
      <Swiper {...settings}>
        {astroimage.map(value => (
          <Col key={value?._id} md="3" className="videoimg">
            <div key={value?._id} className="">
              <div class="product-image8">
                {value?.file?.includes("mp4") ? (
                  <>
                    <div style={{ width: "100%" }} className="videogallry">
                      <video
                        style={{ width: "100%", background: "none" }}
                        className="videosource"
                        width="320"
                        height="200"
                        controls
                      >
                        <source src={value?.file} type="video/mp4" />
                      </video>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ width: "100px" }} className="imagesize mx-1">
                      <img
                        style={{
                          paddingTop: "20px",
                          width: "277px",
                          height: "200px",
                          background: "none",
                        }}
                        className="imagegallry"
                        // width={320}
                        // height={250}
                        src={value?.file}
                        alt="gallryimg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Swiper>
    </>
  );
}
