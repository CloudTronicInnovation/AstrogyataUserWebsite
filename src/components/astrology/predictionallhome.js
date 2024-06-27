import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import textbottom from "../../assets/img/textbottom.png";
import HomeCategory from "../../components/astrology/homecategory";

class PredictionallHome extends React.Component {
  render() {
    return (
      <div className="tab-st">
        <div className="container">
          {/* <SectionTitle titleText="DAILY DEALS!" positionClass="text-center" /> */}
          <div className="heading bt">
            <h2>Update / Predictions</h2>
            <img src={textbottom} alt="" />
          </div>
          <Tab.Container defaultActiveKey="bestSeller">
            <Nav
              variant="pills"
              className="product-tab-list pt-30 pb-20 text-left"
            >
              <Nav.Item>
                <Nav.Link eventKey="newArrival">
                  <h4>Daily</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bestSeller">
                  <h4>Weekly</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="saleItems">
                  <h4>Monthly</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <hr></hr>
            <Tab.Content>
              <Tab.Pane eventKey="newArrival">
                <div className="row three-column">
                  <h3 className="s-tt">Daily</h3>
                  <HomeCategory />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bestSeller">
                <div className="row three-column">
                  <h3 className="s-tt">Weekly</h3>
                  <HomeCategory />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="saleItems">
                <div className="row three-column">
                  <h3 className="s-tt">Monthly</h3>
                  <HomeCategory />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <div className="view-more text-center mt-20 toggle-btn6 col-12">
            {/* <Link
                className="loadMore6"
                to={process.env.PUBLIC_URL + "/shop-grid-standard"}
              >
                VIEW MORE PRODUCTS
              </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PredictionallHome;
