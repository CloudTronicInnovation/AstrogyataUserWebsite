import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Container, Col, Row } from "reactstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapSection extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="pt-5">
        <Container>
          <Row>
            <Col lg="12" className="map-title">
              <h5>FIND US</h5>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="map-title">
              <h1>Fahion in Various Cities</h1>
            </Col>
          </Row>
        </Container>
        {/* // Important! Always set the container height explicitly */}
        <div className="pt-5" style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB9yQLf0ytG3egR0q8FOLzkVAkwNb9JDdU",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapSection;
