import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Axios from "axios";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";

const ProductDescriptionTab = ({
  spaceBottomClass,
  productFullDesc,
  productid,
}) => {
  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  const [review, setReview] = useState([]);
  const [average, setAverage] = useState([]);
  const [value, setValue] = useState([]);
  const [comment, setComment] = useState([]);
  const [rating, allRating] = useState([true, true, false, false, false]);

  console.log(productid);
  const fetchReview = async (productid) => {
    console.log(productid);
    const { data } = await Axios.get(
      `http://13.235.180.192/api/admin/getonereviewproduct/${productid}`
    );
    console.log(data);
    const review = data.data;
    var averagerating = 0;
    for (let i = 0; i < review.length; i++) {
      const value = review[i].rating;
      averagerating = averagerating + value;
    }
    console.log(averagerating);
    var newaverage = averagerating / review.length;
    console.log(newaverage);
    setAverage(newaverage);
    console.log(review);
    setReview(review);
  };

  const changehandler = (e) => {
    setComment(e.target.value);
  };

  const submitrating = (e) => {
    e.preventDefault();
    console.log({ rating: value, comment: comment, productid: productid });
    Axios.post(
      `http://13.235.180.192/api/admin/addreview`,
      {
        rating: value,
        comment: comment,
        product: productid,
      },
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    )
      .then((response) => {
        console.log(response.data.data);
        fetchReview(productid);
        //this.setState({ detail: response.data.data,pid:response.data.data._id });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  //console.log("Product Desc", JSON.parse(productFullDesc));

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      if (productid) {
        fetchReview(productid);
      }
    }
  }, [productid]);
  React.useEffect(() => {
    //console.log("Product Desc", productFullDesc);
    var t = JSON.parse(productFullDesc).product_img;
    if (t !== undefined && t !== null) setImgArr(t);
    setstate(JSON.parse(productFullDesc));
  }, [productFullDesc]);
  console.log(state);
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container mt-5 mb-5">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Brand</span>
                      {state?.brand?.name}
                    </li>
                    <li>
                      <span>Material</span>
                      {state?.material}
                    </li>

                    <li>
                      <span>Other Info</span> {state?.short_desc}
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                <h5>{state?.long_desc}</h5>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <h3>
                  RATINGS <i class="fa fa-star"></i>
                </h3>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="col-md-4">
                        <h1
                          style={{
                            fontSize: 96,
                            marginTop: 39,
                            marginRight: 15,
                            marginBottom: 20,
                            marginLeft: 0,
                          }}
                        >
                          {parseFloat(average).toFixed(1)}
                        </h1>
                        <p>{review.length} Verified Buyers</p>
                      </div>
                      <div className="col-md-6">
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={70}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#ff" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={10}
                        />
                      </div>
                    </div>
                    <hr />
                    {review?.map((rev) => (
                      <div className="review-wrapper" key={rev._id}>
                        <div className="single-review">
                          {/* <div className="review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/testimonial/1.jpg"
                              }
                              alt=""
                            />
                          </div> */}
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4
                                    style={{
                                      textTransform: "capitalize",
                                      margin: 5,
                                    }}
                                  >
                                    {rev?.comment}
                                  </h4>
                                </div>
                                <div className="review-rating">
                                  {/* <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> */}
                                  <Rating
                                    name="disabled"
                                    style={{ opacity: 1 }}
                                    value={rev?.rating}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p
                                style={{
                                  display: "inline",
                                  textTransform: "capitalize",
                                }}
                              >
                                {rev?.customer?.firstname}{" "}
                                {rev?.customer?.lastname} |{" "}
                                {rev.createdAt.split("T")[0]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Write a Review</h3>
                      <div className="ratting-form">
                        <form action="#" onSubmit={submitrating}>
                          <div className="star-box">
                            {/* <span>Your rating:</span> */}
                            {/* <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> */}
                          </div>
                          <div className="row">
                            <div className="rating-form-style mb-10">
                              <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                  console.log(event);
                                  setValue(newValue);
                                }}
                              />
                            </div>

                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="comment"
                                  placeholder="Comment"
                                  defaultValue={""}
                                  onChange={changehandler}
                                  style={{ height: "auto" }}
                                  rows={3}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
