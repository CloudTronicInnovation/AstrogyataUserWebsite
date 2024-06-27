import React, { Component } from "react";
import { Input, InputGroup, Button } from "reactstrap";
import myimg from "../../assets/img/myimg.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class HeroSliderEleventwo extends Component {
  render() {
    return (
      <div>
      <img className="d-block w-100" src={myimg} alt="amit" />
            <div className="col-lg-4">
            <InputGroup>
                  <Input type="search" id="gsearch" name="gsearch" />
                  <Button>button</Button>
                </InputGroup>
                </div>
        {/* <Carousel>
          <Carousel.Item>
            
              {/* <Carousel.Caption>
                {/* <h3 style={{ color: "blue" }}>First slide label</h3> */}
                {/* <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}

                
              </Carousel.Caption> */}

            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={myimg} alt="amit" />
            <div className="col-lg-4">
              <Carousel.Caption>
                <h3 style={{ color: "blue" }}>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={myimg} alt="amit" />
            <div className="col-lg-4">
              <Carousel.Caption>
                <h3 style={{ color: "blue" }}>Third slide label </h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item> */}
        </Carousel> */}
      </div>
    );
  }
}
export default HeroSliderEleventwo;
