import PropTypes from "prop-types";
import React from "react";
import { Jumbotron } from "reactstrap";
//import textGridData from "../../data/text-grid/text-grid-one.json";
//import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div
      className={`about-mission-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <Jumbotron className="shadow p-4 mb-5 bg-white rounded">
            <div className="col-sm-12">
              <h2>About us</h2>
              <p>
                Buynaa – Your one-stop solution to quench your shopping needs!
              </p>
              <p>
                Say goodbye to the days of perpetually waiting for the apparel
                you set your eyes on! Festival, dates, weddings, or simply a
                casual get-away, be at your best from the purely desi lanes! We
                are a cutting-edge platform for customers to rediscover the
                local Indian apparel markets. True to our name, “Buynaa”, we
                also deliver an e-commerce marketplace for you to shop online
                seamlessly and get your clothes delivered to you on the same day
                or the next! The essence of buying clothes is much better when
                you can touch and feel the softness of cotton or satin, and
                more! Hence, we have designed our marketplace to help you visit
                the local stores for a mesmerizing experience. The ease of
                returns and refunds are just a cherry on top of the unique
                shopping experience we intend to provide to you!
              </p>
              <p></p>
            </div>
          </Jumbotron>
          <div className="row">
            <div className="col-sm-6 shadow p-4 mb-5 mr-2 bg-white rounded">
              <h2>Our Vision</h2>
              <p>
                We aim to become India’s one stop platform for all the apparel
                needs be it products or services.
              </p>
            </div>
            <div className="col-sm-6 shadow p-4 mb-5 mr-2 bg-white rounded">
              <h2>Our Mission</h2>
              <p>
                We are on a mission to provide a solution for a hassle-free
                shopping experience by knitting our customers and the local
                apparel stores and companies closely through our cloud-based
                solution for instant delivery! .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 shadow p-4 mb-5 bg-white rounded">
              <h2>Our Story From Scratch</h2>
              <p>
                Founded in _______, we are committed to digitally shaping the
                local Indian apparel market! 
              </p>
              <p>
                We believe that the local Indian retail markets for apparel and
                garments possess the potential to grow and deliver a polished
                quality of clothes to Indian households. However, in comparison
                to juggernauts of the fashion industry and leading clothes
                brands, these shops seem to be a bit all over the place and
                unorganized. In the face of growing competition from leading
                vendors, the efforts of the local traditional apparel shops are
                falling flat. The primary issue lies in poor promotion,
                advertising, and store operations management. 
              </p>
              <p>
                We think this can be changed only through some disruption in the
                system! Buynaa steps in as a group of young people from the
                “City of Joy – Kolkata” to alter the condition of the local
                Indian apparel stores. We aim to make an impact by
                revolutionizing the customer’s shopping experience by
                highlighting these mismanaged stores to make them attain what
                they deserve.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row" >
          {textGridData &&
            textGridData.map((single, key) => {
              return (
                <TextGridOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default TextGridOne;
