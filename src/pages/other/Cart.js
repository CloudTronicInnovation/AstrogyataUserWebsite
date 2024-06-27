import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import useRazorpay from "react-razorpay";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import { getDiscountPrice } from "../../helpers/product";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  cartItemStock,
  deleteAllFromCart,
} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Axios from "axios";

const Cart = ({
  props,
  location,
  cartItems,
  currency,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
}) => {
  const [quantityCount] = useState(1);
  const { addToast } = useToasts();
  const history = useHistory();
  const { pathname } = location;
  let cartTotalPrice = 0;
  let gstTotalPrice = 0;
  const [carts, setCarts] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [total, setTotal] = useState([]);
  const [useraddress, setUseraddress] = useState([]);
  //const { id } = useParams();

  const fetchcarts = async () => {
    const { data } = await Axios.get(
      // `http://13.235.180.192/api/admin/cartbycustomer`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const carts = data.data;
    console.log(carts);
    var cartId = [];
    for (var i = 0; i < carts.length; i++) {
      cartId.push(carts[i]._id);
    }
    setCartId(cartId);
    console.log(cartId);
    setCarts(carts);
    console.log(carts);

    setTotal(data.total);
  };

  const fetchaddress = async () => {
    const { data } = await Axios.get(
      // `http://13.235.180.192/api/user/viewoneuseraddress`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const address = data.data;
    console.log(address);
    setUseraddress(address);
  };
  useEffect(() => {
    //fetchcarts();
    if (localStorage.getItem("auth-token")) {
      fetchcarts();
      fetchaddress();
    }
  }, []);

  const removeItemfromcart = async id => {
    console.log(id);

    try {
      const response = await Axios.get(
        // `http://13.235.180.192/api/admin/remove_cart/${id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      if (response) {
        console.log(response);
        fetchcarts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllCartItems = async () => {
    console.log("request remove all");

    try {
      const response = await Axios.get(
        // `http://13.235.180.192/api/admin/clearCart`,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      if (response) {
        window.location.reload();
        console.log(response);
        fetchcarts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [key, setKey] = useState("rzp_live_dX052iXb0Is1yu");
  const Razorpay = useRazorpay();
  const [orderId, setOrderId] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    console.log("useEffect");
    Axios.get(
      // "http://13.235.180.192/api/user/getonecustomer",
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    )
      .then(response => {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    Axios
      .get
      // `http://13.235.180.192/api/admin/rapay/${cartTotalPrice}`
      ()
      .then(response => {
        console.log(response.data);
        setOrderId(response.data?.order.id);
        // setAmount(response.data?.order.amount);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  const handlePayment = useCallback(
    async (
      amount,
      description,
      name,
      email,
      contact,

      payment_type
    ) => {
      if (payment_type == "COD") {
        return;
      }
      const RazorpayOptions = {
        key: key,
        amount: amount,
        currency: "INR",
        name: "YOUR ORDER",
        description: description,
        //order_id: "1234567890",
        handler: res => {
          var data = {
            cart: cartId,
            payment_type,
            status: "Pending",
            shipping_address: useraddress._id,

            payment_id: res.payment_id,
          };
          console.log(res);
          Axios.post("http://13.235.180.192/api/admin/addordersample", data, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          })
            .then(response => {
              console.log("pranay", response);

              //history.push("/cart");
            })
            .catch(error => {
              console.log(error.response);
            });
          //api call
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: "BuyNaa Corporate Office",
        },
        theme: { color: "#3399cc" },
      };

      const rzpay = new Razorpay(RazorpayOptions);

      rzpay.on("payment.failure", function (resp) {
        alert("Remains on same page");
      });
      rzpay.open();
    },
    [Razorpay]
  );

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Cart</title>
        <meta
          name="description"
          content="Cart page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Cart
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {carts && carts.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>GST</th>
                            <th>Coupon</th>
                            <th>Subtotal(Incl Tax)</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {carts?.map((cartItem, key) => {
                            cartTotalPrice += parseInt(cartItem.gsttotal);
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = (
                              cartItem.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);

                            discountedPrice != null
                              ? (gstTotalPrice +=
                                  cartItem.product?.gstrate?.value *
                                  cartItem.product_qty)
                              : (gstTotalPrice +=
                                  cartItem.product?.gstrate?.value *
                                  cartItem.product_qty);

                            {
                              /* discountedPrice != null
                              ? (cartTotalPrice = cartItem.gsttotal)
                              : (cartTotalPrice = cartItem.gsttotal); */
                            }
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product-sticky/" +
                                      cartItem.product?._id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        process.env.PUBLIC_URL +
                                        cartItem.product?.product_img[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product-sticky/" +
                                      cartItem.product?._id
                                    }
                                  >
                                    {cartItem.product?.product_name}
                                  </Link>
                                  {cartItem.size || cartItem.color ? (
                                    <div className="cart-item-variation">
                                      <span>Color: {cartItem?.color}</span>
                                      <span>Size: {cartItem?.size}</span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount">
                                    {cartItem?.product_price}
                                  </span>
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <span>{cartItem.product_qty}</span>
                                  </div>
                                </td>
                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <span>
                                      {cartItem.product?.gstrate?.value}
                                    </span>
                                  </div>
                                </td>
                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <Form>
                                      <span>
                                        <Input
                                          type="text"
                                          placeholder="Enter Code"
                                        />
                                        <Button color="primary" className="">
                                          Apply
                                        </Button>
                                      </span>
                                    </Form>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  ₹{cartItem?.gsttotal}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      removeItemfromcart(cartItem.product?._id)(
                                        window.location.reload()
                                      )
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link
                          to={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                        >
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button
                          onClick={() =>
                            deleteAllCartItems()(window.location.reload())
                          }
                        >
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Shipping Address
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        {/* <h5>
                          {useraddress?.customer?.firstname} {useraddress?.customer?.lastname},{useraddress?.address},{useraddress?.locality},{useraddress?.state},{useraddress?.pincode},
                        </h5> */}
                        <div className="tax-select-wrapper">
                          <h4>
                            <span style={{ textTransform: "capitalize mb-2" }}>
                              {useraddress?.customer?.firstname}{" "}
                              {useraddress?.customer?.lastname},
                            </span>
                            <br />
                            {useraddress?.address},{useraddress?.locality},
                            {useraddress?.state},{useraddress?.pincode}
                          </h4>
                          <button
                            className="cart-btn-2"
                            type="button"
                            onClick={() => history.push("/my-account")}
                          >
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <div>
                        <h5>
                          Total products <span>₹{total}</span>
                        </h5>
                        <h4 className="grand-totall-title">
                          Total GST<span>₹{gstTotalPrice}</span>
                        </h4>
                        <h4 className="grand-totall-title">
                          Grand Total <span>₹{cartTotalPrice}</span>
                        </h4>
                      </div>
                      <Link
                        onClick={() =>
                          handlePayment(
                            cartTotalPrice * 100,
                            "checkout",
                            user.firstname + " " + user.lastname,
                            user.email,
                            user.mobile,
                            "ONLINE"
                          )
                        }
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart <br />{" "}
                      <Link to={"/shop-grid-two-column"}>Shop Now</Link>
                      {/* <div> <a style=" width: 200px; background-color: #1065b7; text-align: center; font-weight: 800; padding: 11px 0px; color: white; font-size: 12px; display: inline-block; text-decoration: none; " href='https://pmny.in/AIRaJwzJjaAJ' > Pay Now </a> </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: addToast => {
      dispatch(deleteAllFromCart(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
