// import PropTypes from "prop-types";
// import React, { Fragment, useState, useEffect } from "react";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
// import MetaTags from "react-meta-tags";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
// import {
//   addToWishlist,
//   deleteFromWishlist,
//   deleteAllFromWishlist,
// } from "../../redux/actions/wishlistActions";
// import { addToCart } from "../../redux/actions/cartActions";
// import LayoutOne from "../../layouts/LayoutOne";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import Axios from "axios";

// const Wishlist = ({
//   location,
//   cartItems,
//   currency,
//   addToCart,
//   wishlistItems,
//   deleteFromWishlist,
//   deleteAllFromWishlist,
// }) => {
//   const { addToast } = useToasts();
//   const { pathname } = location;
//   const [wish, setWish] = useState([]);
//   const fetchWish = async (token) => {
//     console.log(token);
//     const { data } = await Axios.get(
//       "",
//       {
//         headers: {
//           "auth-token": localStorage.getItem("auth-token"),
//         },
//       }
//     );

//     const wish = data.data;
//     setWish(wish);
//     console.log(wish);
//   };

//   const clearWishList = async () => {
//     const { data } = await Axios.get(
//       "",
//       {
//         headers: {
//           "auth-token": localStorage.getItem("auth-token"),
//         },
//       }
//     );

//     console.log(data.data);
//     fetchWish();
//   };

//   const removeitemfromwishlist = async (id) => {
//     console.log(id);
//     const { data } = await Axios.get(
//       ``,
//       {
//         headers: {
//           "auth-token": localStorage.getItem("auth-token"),
//         },
//       }
//     );
//     //const address = data.data;
//     console.log(data.data);
//     fetchWish();
//     // console.log(address);
//     // setUseraddress(address)
//   };
//   useEffect(() => {
//     if (localStorage.getItem("auth-token")) {
//       fetchWish();
//     }
//   }, []);

//   return (
//     <Fragment>
//       <MetaTags>
//         <title>Flone | Wishlist</title>
//         <meta
//           name="description"
//           content="Wishlist page of flone react minimalist eCommerce template."
//         />
//       </MetaTags>

//       <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
//       <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
//         Wishlist
//       </BreadcrumbsItem>

//       <LayoutOne headerTop="visible">
//         {/* breadcrumb */}
//         <Breadcrumb />
//         <div className="cart-main-area pt-90 pb-100">
//           <div className="container">
//             {wish && wish.length >= 1 ? (
//               <Fragment>
//                 <h3 className="cart-page-title">Your wishlist items</h3>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="table-content table-responsive cart-table-content">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Image</th>
//                             <th>Product Name</th>
//                             <th>Colour</th>
//                             <th>Size</th>
//                             {/* <th>Unit Price</th> */}
//                             <th>Add To Cart</th>
//                             <th>action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {wish?.map((wishes, key) => {
//                             return (
//                               <tr key={key}>
//                                 <td className="product-thumbnail">
//                                   <Link to="#">
//                                     <img
//                                       className="img-fluid"
//                                       src={
//                                         process.env.PUBLIC_URL +
//                                         wishes.product.product_img[0]
//                                       }
//                                       alt=""
//                                     />
//                                   </Link>
//                                 </td>

//                                 <td className="product-name text-center">
//                                   <Link
//                                     to={
//                                       process.env.PUBLIC_URL +
//                                       "/product-sticky/"
//                                       // wishes.prodct._id
//                                     }
//                                   >
//                                     {wishes.product.product_name}
//                                   </Link>
//                                 </td>

//                                 <td className="product-price-cart">
//                                   <span className="amount">{wishes.color}</span>
//                                 </td>

//                                 <td className="product-price-cart">
//                                   <span className="amount">{wishes.size}</span>
//                                 </td>

//                                 <td className="product-wishlist-cart">
//                                   <div className="pro-details-cart btn-hover">
//                                     <Button
//                                       color="primary"
//                                       onClick={() => {
//                                         Axios.post(
//                                           "http://13.235.180.192/api/admin/add_ToCart",
//                                           {
//                                             product: wishes.product._id,
//                                             product_qty: wishes.qty,
//                                             product_price: wishes.price,
//                                             color: wishes.color,
//                                             size: wishes.size,
//                                           },
//                                           {
//                                             headers: {
//                                               "auth-token":
//                                                 localStorage.getItem(
//                                                   "auth-token"
//                                                 ),
//                                             },
//                                           }
//                                         )
//                                           .then((response) => {
//                                             alert("Added To Cart");
//                                             console.log(response);
//                                             console.log(wishes.product._id);
//                                             //pahucha dena
//                                             Axios.get(
//                                               `http://13.235.180.192/api/admin/delonewishlist/${wishes.product._id}`,
//                                               {
//                                                 headers: {
//                                                   "auth-token":
//                                                     localStorage.getItem(
//                                                       "auth-token"
//                                                     ),
//                                                 },
//                                               }
//                                             )
//                                               .then((data) => fetchWish(data))
//                                               .catch((err) =>
//                                                 console.log(err.response)
//                                               );
//                                           })
//                                           .catch(function (error) {
//                                             console.log(error.response);
//                                           });
//                                       }}
//                                     >
//                                       Add To Cart
//                                     </Button>
//                                   </div>
//                                 </td>

//                                 <td className="product-remove">
//                                   <button
//                                     onClick={(e) =>
//                                       //console.log(wishes._id)
//                                       removeitemfromwishlist(
//                                         wishes.product._id
//                                       )(
//                                         //  deleteFromWishlist(wishes, addToast)
//                                         window.location.reload(false)
//                                       )
//                                     }
//                                   >
//                                     <i className="fa fa-times"></i>
//                                   </button>
//                                 </td>
//                               </tr>
//                             );
//                           })}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="cart-shiping-update-wrapper">
//                       <div className="cart-shiping-update">
//                         <Link
//                           to={process.env.PUBLIC_URL + "/shop-grid-two-column"}
//                         >
//                           Continue Shopping
//                         </Link>
//                       </div>
//                       <div className="cart-clear">
//                         <button
//                           onClick={() =>
//                             clearWishList()(window.location.reload())
//                           }
//                         >
//                           Clear Wishlist
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Fragment>
//             ) : (
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="item-empty-area text-center">
//                     <div className="item-empty-area__icon mb-30">
//                       <i className="pe-7s-like"></i>
//                     </div>
//                     <div className="item-empty-area__text">
//                       No items found in wishlist <br />{" "}
//                       <Link to={process.env.PUBLIC_URL + "/"}>Add Items</Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </LayoutOne>
//     </Fragment>
//   );
// };

// Wishlist.propTypes = {
//   addToCart: PropTypes.func,
//   cartItems: PropTypes.array,
//   currency: PropTypes.object,
//   location: PropTypes.object,
//   deleteAllFromWishlist: PropTypes.func,
//   deleteFromWishlist: PropTypes.func,
//   wishlistItems: PropTypes.array,
// };

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData,
//     wishlistItems: state.wishlistData,
//     currency: state.currencyData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (item, addToast, quantityCount) => {
//       dispatch(addToCart(item, addToast, quantityCount));
//     },
//     addToWishlist: (item, addToast, quantityCount) => {
//       dispatch(addToWishlist(item, addToast, quantityCount));
//     },
//     deleteFromWishlist: (item, addToast, quantityCount) => {
//       dispatch(deleteFromWishlist(item, addToast, quantityCount));
//     },
//     deleteAllFromWishlist: (addToast) => {
//       dispatch(deleteAllFromWishlist(addToast));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
