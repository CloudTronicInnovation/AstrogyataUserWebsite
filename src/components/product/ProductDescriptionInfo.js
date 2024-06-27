import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  addToCompare,
  fullProductDesc,
}) => {
  // const [selectedProductColor, setSelectedProductColor] = useState(
  //   product.variation ? product.variation[0].color : ""
  // );
  // const [selectedProductSize, setSelectedProductSize] = useState(
  //   product.variation ? product.variation[0].size[0].name : ""
  // );
  // const [productStock, setProductStock] = useState(
  //   product.variation ? product.variation[0].size[0].stock : product.stock
  // );
  const [quantityCount, setQuantityCount] = useState(1);

  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,
  //   selectedProductColor,
  //   selectedProductSize
  // );
  const [state, setstate] = React.useState({});
  //const [imgArr, setImgArr] = React.useState([]);
  React.useEffect(() => {
    console.log("Full Desc", fullProductDesc);
    // console.log("Product Img", productImage);
    // var t = JSON.parse(productImage).product_img;
    // if (t !== undefined && t !== null) setImgArr(t);
    // setstate(JSON.parse(productImage));
    if (
      fullProductDesc !== undefined &&
      fullProductDesc !== null &&
      fullProductDesc !== ""
    )
      setstate(JSON.parse(fullProductDesc));
  });

  return (
    <div className="product-details-content ml-70">
      <h2>{state?.product_name}</h2>
      <div className="product-details-price">
        <Fragment>
          <span>{state?.sell_price}</span>{" "}
        </Fragment>
      </div>

      {/* <div className="pro-details-rating-wrap">
          <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div>
        </div> */}

      <div className="pro-details-list">
        <p>{state?.short_desc}</p>
      </div>

      <div className="pro-details-size-color">
        <div className="pro-details-color-wrap">
          <span>Color</span>
          <div className="pro-details-color-content">
            <h5>{state?.color}</h5>
            {/* <label
                    className={`pro-details-color-content--single ${single.color}`}
                   
                  > */}
            {/* <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      checked={
                        single.color === selectedProductColor ? "checked" : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color);
                        setSelectedProductSize(single.size[0].name);
                        setProductStock(single.size[0].stock);
                        setQuantityCount(1);
                      }}
                    /> */}
            {/* <span className="checkmark"></span>
                  </label> */}
          </div>
        </div>
        <div className="pro-details-size">
          <span>Size</span>
          <h6>{state?.size}</h6>
          {/* <div className="pro-details-size-content">
              {product.variation &&
                product.variation.map(single => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize, key) => {
                        return (
                          <label
                            className={`pro-details-size-content--single`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                              }}
                            />
                            <span className="size-name">{singleSize.name}</span>
                          </label>
                        );
                      })
                    : "";
                })}
            </div> */}
        </div>
      </div>

      <div className="pro-details-quality">
        <div className="pro-details-cart btn-hover ml-0">
          <a href="#" rel="noopener noreferrer" target="_blank">
            Buy Now
          </a>
        </div>
      </div>

      <div className="pro-details-quality">
        <div className="cart-plus-minus">
          <button
            onClick={() =>
              setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
            }
            className="dec qtybutton"
          >
            -
          </button>
          <input
            className="cart-plus-minus-box"
            type="text"
            value={quantityCount}
            readOnly
          />
          <button className="inc qtybutton">+</button>
        </div>
        <div className="pro-details-cart btn-hover">
          <button onClick={() => addToCart(product, addToast, quantityCount)}>
            Add To Cart{" "}
          </button>

          <button disabled>Out of Stock</button>
        </div>
        <div className="pro-details-wishlist">
          <button
            className={wishlistItem !== undefined ? "active" : ""}
            disabled={wishlistItem !== undefined}
            title={
              wishlistItem !== undefined
                ? "Added to wishlist"
                : "Add to wishlist"
            }
            onClick={() => addToWishlist(product, addToast)}
          >
            <i className="pe-7s-like" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  fullProductDesc: PropTypes.string,
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);
