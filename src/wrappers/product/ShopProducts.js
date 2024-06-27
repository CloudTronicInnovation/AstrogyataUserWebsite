import PropTypes from "prop-types";
import React from "react";
import ProductGridTwo from "./ProductGridTwo";

const ShopProducts = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductGridTwo products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array,
};

export default ShopProducts;
