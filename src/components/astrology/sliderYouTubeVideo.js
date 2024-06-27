import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";
import textbottom from "../../assets/img/textbottom.png";

const SliderYouTubeVideo = ({ data, sliderClass, slideryoutubevideoClass }) => {
  const [userId, setUserId] = useState("");
  const [bestAstrology, setBestAstrology] = useState(data);

  // useEffect(() => {
  //   var user_id = localStorage.getItem("user_id");
  //   setUserId(user_id);
  // });

  useEffect(() => {
    setBestAstrology(data);
  }, [data]);

  // console.log('@@@',data)

  return (
    <div
      className={`${slideryoutubevideoClass ? slideryoutubevideoClass : " slider-demo"
        } text-center ${sliderClass ? sliderClass : ""} st-hit`}
    >
      {/* <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p className="st-testmonial">{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div> */}
      <Container>
        <div className="heading mt-40">
          <h2>Watch Astrologers video</h2>
          <img src={textbottom} alt="" />
        </div>
        <Row>

          <Col md="3">
            <div className="product-grid8">
              <div class="product-image8">
                <Link to="/poojadetail">
                  <img src={astro3} alt="" />
                </Link>
              </div>
              <div className="product-content">

                <h3 className="title"><Link>Magic ball reader</Link></h3>

              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="product-grid8">
              <div class="product-image8">
                <Link to="/poojadetail">
                  <img src={astro3} alt="" />
                </Link>
              </div>
              <div className="product-content">

                <h3 className="title"><Link>Magic ball reader</Link></h3>

              </div>
            </div>
          </Col>
          {/* <Col md="3">
            <div className="product-grid8">
              <div class="product-image8">
                <Link to="/poojadetail">
                  <img src={astro3} alt="" />
                </Link>
              </div>
              <div className="product-content">

                <h3 className="title"><Link>Magic ball reader</Link></h3>

              </div>
            </div>
          </Col> */}
          <Col md="3">
            <div className="product-grid8">
              <div class="product-image8">
                <Link to="/poojadetail">
                  <img src={astro3} alt="" />
                </Link>
              </div>
              <div className="product-content">

                <h3 className="title"><Link>Magic ball reader</Link></h3>

              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="product-grid8">
              <div class="product-image8">
                <Link to="/poojadetail">
                  <img src={astro3} alt="" />
                </Link>
              </div>
              <div className="product-content">

                <h3 className="title"><Link>Magic ball reader</Link></h3>

              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>

  );
};

SliderYouTubeVideo.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default SliderYouTubeVideo;


