import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

import axios from "axios";

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://13.235.180.192/api/admin/getoneproduct/${id}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({ detail: response.data.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Flone | Product Page</title>
          <meta
            name="description"
            content="Product page of flone react minimalist eCommerce template."
          />
        </MetaTags>

        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL}>
          Shop Product
        </BreadcrumbsItem>

        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />

          {/* product description with image */}

          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={[0]}
          />

          {/* product description tab */}
          <ProductDescriptionTab
            spaceBottomClass="pb-90"
            productFullDesc={this.state.detail?.short_desc}
          />

          {/* related product slider */}
          {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
        </LayoutOne>
      </Fragment>
    );
  }
}

// Product.propTypes = {
//   location: PropTypes.object,
//   product: PropTypes.object,
// };

// const mapStateToProps = (state, ownProps) => {
//   const itemId = ownProps.match.params.id;
//   return {
//     product: state.productData.products.filter(
//       single => single.id === itemId
//     )[0],
//   };
// };

export default Product;
