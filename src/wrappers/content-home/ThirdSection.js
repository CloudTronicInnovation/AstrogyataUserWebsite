import React from "react";
import "../../assets/css/thirdsection.css";
import { Container } from "reactstrap";
import background from "../../assets/img/bg/third.jpg";

export default function ThirdSection() {
  return (
    <Container fluid className="third">
      <div
        className="third-hero-image"
        style={{
          backgroundImage: "url(" + background + ")",
          height: "90vh",
        }}
      >
        <div className="third-hero-text">
          <h3>TRENDING OF THE MONTH</h3>
          <h1>Prmium Jeans</h1>
          <h4>TRENDING OF THE MONTH</h4>
          <button>Products</button>
          <h4>SEE ALL PRODUCTS</h4>
        </div>
      </div>
    </Container>
  );
}
