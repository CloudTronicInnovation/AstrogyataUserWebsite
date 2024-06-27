import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axiosConfig from "../../axiosConfig";

const MyOrder = ({ location }) => {
  const { pathname } = location;
  const [order, setOrder] = useState([]);
  const fetchOrder = async () => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    const { data } = await axiosConfig.get(
      `/user/userBookedPujalist/${userid}`
    );

    const order = data.data;
    setOrder(order);
    console.log(order);
  };

  const handleDelete = data => {
    console.log(data?._id);
    axiosConfig
      .get(`/admin/dltBookedPuja/${data?._id}`)
      .then(res => {
        fetchOrder();
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      fetchOrder();
    }
  }, []);

  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My booked pooja
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {order && order.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">My pooja Items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>ORDER ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Date of Pooja</th>
                            <th>Purchasing Date</th>

                            <th>AMOUNT</th>

                            <th>Slot</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order?.map((orders, key) => {
                            return (
                              <tr key={key}>
                                <td className="product-price-cart">
                                  <span className="amount">
                                    {orders?.orderId}
                                  </span>
                                </td>
                                <td className="product-thumbnail">
                                  <Link to="#">
                                    <img
                                      width="80px"
                                      height="80px"
                                      className="img-fluid"
                                      src={orders?.pujaId?.poojaimg}
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link>
                                    {orders?.pujaId?.pooja_type?.pooja_name}
                                  </Link>
                                  <br />
                                  {/* <p>by:-{orders?.astroid?.fullname}</p> */}
                                  {/* {orders?.product?.product?.qsCount ? (
                                    <>
                                      Question Count:{" "}
                                      {orders?.product?.product?.qsCount}
                                    </>
                                  ) : null} */}
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.createdAt?.split("T")[0]}
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.createdAt?.split("T")[0]}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.pujaId?.pooja_price}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.slots}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.address}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.status}
                                </td>
                                <td className="product-price-cart">
                                  <span
                                    onClick={() => handleDelete(order)}
                                    style={{ color: "Red" }}
                                    className="amount"
                                  >
                                    Delete
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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
                      No Product Found <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/astromallList"}>
                        Shop Now
                      </Link>
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

MyOrder.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: addToast => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
