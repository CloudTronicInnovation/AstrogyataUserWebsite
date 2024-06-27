import Axios from "axios";
import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

const ProductGridSingleTwo = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  discountedPrice,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  titlePriceClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();
  // const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //   const res = await Axios.get("http://13.235.180.192/api/admin/getproduct")
  //     .then(data => {
  //       console.log(data);
  //       console.log(data.data.data.data);
  //       setUsers(data.data.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);

  const [dress, setDress] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://13.235.180.192/api/admin/getproduct");

      const data = await response.json();

      setDress(data.data);
      console.log(data.data);
    }
    getData();
    return;
  }, []);

  discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      {dress.map(product => (
        <div
          className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
            sliderClassName ? sliderClassName : ""
          }`}
          key={product._id}
        >
          <div
            className={`product-wrap-2 ${
              spaceBottomClass ? spaceBottomClass : ""
            } ${colorClass ? colorClass : ""} `}
          >
            <div className="product-img">
              <Link
                to={process.env.PUBLIC_URL + "/product-sticky/" + product._id}
              >
                <img
                  className="default-img"
                  src={product.product_img[0]}
                  alt=""
                  style={{ width: "200px", height: "250px" }}
                />

                <img
                  className="hover-img"
                  src={product.product_img[1]}
                  alt=""
                  style={{ width: "200px", height: "250px" }}
                />
              </Link>
              {/* {product.discount || product.new ? (
                <div className="product-img-badges">
                  {product.discount ? (
                    <span className="pink">-{product.discount}</span>
                  ) : (
                    ""
                  )}
                  {product.new ? <span className="purple">New</span> : ""}
                </div>
              ) : (
                ""
              )} */}

              <div className="product-action-2">
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Buy now"
                  >
                    {" "}
                    <i className="fa fa-shopping-cart"></i>{" "}
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link
                    to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                    title="Select options"
                  >
                    <i className="fa fa-cog"></i>
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => addToCart(product, addToast)}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Added to cart" : "Add to cart"
                    }
                  >
                    {" "}
                    <i className="fa fa-shopping-cart"></i>{" "}
                  </button>
                ) : (
                  <button disabled className="active" title="Out of stock">
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                )}

                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="fa fa-eye"></i>
                </button>

                <button
                  className={compareItem !== undefined ? "active" : ""}
                  disabled={compareItem !== undefined}
                  title={
                    compareItem !== undefined
                      ? "Added to compare"
                      : "Add to compare"
                  }
                  onClick={() => addToCompare(product, addToast)}
                >
                  <i className="fa fa-retweet"></i>
                </button>
              </div>
            </div>
            <div className="product-content-2">
              <div
                className={`title-price-wrap-2 ${
                  titlePriceClass ? titlePriceClass : ""
                }`}
              >
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product._id}>
                    {product.product_name}
                  </Link>
                </h3>
                <div className="price-2">
                  <Fragment>
                    <span>₹ {product.sell_price}</span>
                  </Fragment>
                </div>
              </div>
              <div className="pro-wishlist-2">
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
                  <i className="fa fa-heart-o" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridSingleTwo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default ProductGridSingleTwo;
