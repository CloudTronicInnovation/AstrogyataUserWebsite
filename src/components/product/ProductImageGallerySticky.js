import Axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";

export class ProductImageGallerySticky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    // let { id } = this.props.match.params;
    Axios.get(`http://13.235.180.192/api/admin/getoneproduct/34567890`)
      .then(response => {
        console.log(response.data.data);
        this.setState({ detail: response.data.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  render() {
    console.log(this.state.detail.product_img);
    return (
      <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
        <div className="product-sticky-image mb--10">
          {this.state.detail.product_img?.map(single => (
            <div className="product-sticky-image__single mb-10">
              <img src={single} alt="" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ProductImageGallerySticky.propTypes = {
  product: PropTypes.object,
};

export default ProductImageGallerySticky;
