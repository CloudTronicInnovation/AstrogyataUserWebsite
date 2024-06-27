import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import HtmlParser from "react-html-parser";
import LayoutOne from "../../layouts/LayoutOne";

function Bookpoojadetail() {
  const [blogdescription, setBlogdescription] = useState([]);
  const [Pooja, setPooja] = useState({});
  const Param = useParams();
  useEffect(() => {
    console.log(Param.id);
    const bookpooja = JSON.parse(localStorage.getItem("poojaviewone"));
    console.log("pooja", bookpooja);
    setPooja(bookpooja);
  }, [Param]);

  return (
    <div>
      <LayoutOne headerTop="visible">
        <div className="color mt-2 mb-3">
          <Container className="mb-0">
            <Row>
              <h2 className=" justify-content-center mt-5 mb-3">
                {Pooja?.pooja_type?.pooja_name}
              </h2>
            </Row>
            <Row className="mt-3">
              <img
                className=" d-flex justify-content-center imgColnew"
                src={Pooja?.poojaimg}
                style={{ height: "500px", borderRadius: "10px" }}
                alt="blogimg"
              />
              <Row>
                <div className=" descriptionofblog   mt-3 mb-3">
                  {HtmlParser(Pooja?.desc)}
                </div>
              </Row>
              <Row>
                <div className=" descriptionofblog   mt-3 mb-3">
                  <h4>
                    <b> Benefits: </b>
                  </h4>
                  <p style={{ fontSize: "18px" }}> {Pooja?.benefits} </p>
                </div>
              </Row>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  <b> Duration:</b>
                  <span style={{ fontSize: "18px" }}> {Pooja?.duration} </span>
                </h4>
              </div>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  <b> Pooja Price: </b>
                  <span style={{ fontSize: "18px" }}>
                    <i class="fa fa-inr" aria-hidden="true"></i>
                    {Pooja?.pooja_price}
                  </span>
                </h4>
              </div>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  <b> Pooja Name:</b>
                  <span style={{ fontSize: "18px" }}>
                    {Pooja?.pooja_type?.pooja_name}
                  </span>
                </h4>
              </div>
            </Row>

            {/* <Row className="mt-4 ">
            <div className=" justify-content-center mt-3">
              <h3>{ReactHtmlParser(blogdescription?.desc)}</h3>
            </div>
          </Row> */}
            <h2>Want to Buy Something?</h2>
          </Container>
        </div>
      </LayoutOne>
    </div>
  );
}

export default Bookpoojadetail;
