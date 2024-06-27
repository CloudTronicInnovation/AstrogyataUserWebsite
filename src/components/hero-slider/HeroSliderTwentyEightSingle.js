import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "reactstrap";
import banner from "../../assets/img/banner.jpg";
import axiosConfig from "../../axiosConfig";
import Select from "react-select";
import handbgtwo from "../../assets/img/handbgone .png"
import handbgone from "../../assets/img/handbgtwo .png"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export class HeroSliderTwentyEightSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
      value: "",
      astrologerList: []

    };
  }

  // search = async (val) => {
  //   this.setState({ loading: true });
  //   console.log(this.state);
  //   axios
  //     .post(`http://13.235.180.192/api/admin/searchinputproduct`, {
  //       oneinput: this.state.value,
  //     })
  //     .then((response) => {
  //       console.log(response.data.data);
  //       this.setState({ products: response.data.data });
  //       console.log(this.state.products);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log(error.response);
  //     });
  //   //const products = await res.data;

  //   this.setState({ loading: false });
  // };
  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  // get renderMovies() {
  //   let products = <h4>There's no products</h4>;
  //   // if (this.state.products !== 0) {
  //   //   this.state.products.map(i=>{
  //   //     // console.log(i?.product_name);
  //   //     <h4>list={i.product_name} </h4>
  //   //   })
  //   //   // products = ;
  //   // }
  //   // console.log(products);
  //   return products;
  // }
  componentDidMount = () => {
    axiosConfig
      .get("/admin/getbanner")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

  };

  render() {
    const { astrologerList } = this.state;
    return (

      <div
        className={`single-slider-2 slider-height-1 d-flex align-items-center bg-img st-5 ${this.props.sliderClass ? this.props.sliderClass : ""
          }`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">


            <div className="col-xl-6 col-lg-7 col-md-8 col-12">
              <div className="slider-content-red slider-content-2 slider-content-2--white     slider-animated-1">
                {astrologerList.length
                  ? astrologerList.map((astrologer, index) => {
                    return (
                      <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                        {/* <img src={handbgone} className="st-1" alt="" /> */}
                        <img src={astrologer?.banner_img} className="st-2" alt="" />
                      </div>
                    );
                  })
                  : null}
                <h1 className="st-3">AstroGyata Your true Guide to world of Progress.
                </h1>
                {/* <p className="st-4">
                  Your true Guide to world of Progress.
                </p> */}
                <Link className="st-6">
                  Appointment
                </Link>
              </div>
            </div>





          </div>

        </div>
      </div>
    );
  }
}

HeroSliderTwentyEightSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyEightSingle;
