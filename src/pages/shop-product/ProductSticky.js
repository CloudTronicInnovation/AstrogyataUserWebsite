import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
//import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import "../../assets/css/productdetail.css";
//import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSticky from "../../wrappers/product/ProductImageDescriptionSticky";
import Axios from "axios";

export class ProductSticky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      pid: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    Axios.get(`http://13.235.180.192/api/admin/getoneproduct/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          detail: response.data.data,
          pid: response.data.data._id,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    //console.log(this.state.detail);
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Product Page</title>
          <meta
            name="description"
            content="Product page of flone react minimalist eCommerce template."
          />
        </MetaTags>

        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem>/ Shop Product</BreadcrumbsItem>

        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />

          {/* product description with image */}
          <ProductImageDescriptionSticky
            spaceTopclass="mt-100"
            spaceBottomclass="mb-100"
            productImage={JSON.stringify(this.state.detail)}
          />

          {/* product description tab */}
          <ProductDescriptionTab
            spaceBottomclass="pb-90"
            productFullDesc={JSON.stringify(this.state.detail)}
            productid={this.state.pid}
          />

          {/* related product slider */}
          {/* <RelatedProductSlider
            spaceBottomclassName="pb-95"
            category={product.category[0]}
          /> */}
        </LayoutOne>
      </Fragment>
    );
  }
}

// ProductSticky.propTypes = {
//   location: PropTypes.object,
//   product: PropTypes.object
// };

// const mapStateToProps = (state, ownProps) => {
//   const itemId = ownProps.match.params.id;
//   return {
//     product: state.productData.products.filter(
//       single => single.id === itemId
//     )[0]
//   };
// };

export default ProductSticky;
