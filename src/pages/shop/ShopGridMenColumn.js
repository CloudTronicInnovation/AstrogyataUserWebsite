import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
//import ShopProducts from "../../wrappers/product/ShopProducts";
//import ProductModal from "../../components/product/ProductModal";
import { useToasts } from "react-toast-notifications";

const ShopGridMenColumn = ({
  location,
  products,
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
  //const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();
  const [layout, setLayout] = useState("grid two-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 16;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  const [men, setMen] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://13.235.180.192/api/admin/getproductbytagname/Men"
      );

      const data = await response.json();

      setMen(data.data);
      console.log(data.data);
    }
    getData();
    return;
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Shop Page</title>
        <meta
          name="description"
          content="Shop page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              {/* <div
                className="col-lg-3 pt-2"
                style={{ backgroundColor: "#E5E8E8" }}
              >
                {/* shop sidebar */}
              {/*  <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div> */}
              <div className="col-lg-12">
                {/* shop topbar default 
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                /> */}

                {/* shop page content default */}
                {/* <ShopProducts layout={layout} products={currentData} /> */}
                <div className="shop-bottom-area mt-35">
                  <div className={`row ${layout ? layout : ""}`}>
                    {/* <ProductGridTwo
                      products={products}
                      spaceBottomClass="mb-25"
                    /> */}
                    <Fragment>
                      {men.map((product) => (
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
                                to={
                                  process.env.PUBLIC_URL +
                                  "/product-sticky/" +
                                  product._id
                                }
                              >
                                <img
                                  className="default-img"
                                  src={product.product_img[0]}
                                  alt=""
                                  style={{ width: "250px", height: "300px" }}
                                />

                                <img
                                  className="hover-img"
                                  src={product.product_img[1]}
                                  alt=""
                                  style={{ width: "250px", height: "300px" }}
                                />
                              </Link>

                              <div className="product-action-2"></div>
                            </div>
                            <div className="product-content-2">
                              <div
                                className={`title-price-wrap-2 ${
                                  titlePriceClass ? titlePriceClass : ""
                                }`}
                              >
                                <h3>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      product._id
                                    }
                                  >
                                    {product.product_name}
                                  </Link>
                                </h3>
                                <div className="price-2">
                                  <Fragment>
                                    <span>₹ {product.sell_price}</span>
                                  </Fragment>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* product modal */}
                      {/* <ProductModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        product={product}
                        currency={currency}
                        discountedprice={discountedPrice}
                        cartitem={cartItem}
                        wishlistitem={wishlistItem}
                        compareitem={compareItem}
                        addtocart={addToCart}
                        addtowishlist={addToWishlist}
                        addtocompare={addToCompare}
                        addtoast={addToast}
                      /> */}
                    </Fragment>
                  </div>
                </div>

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ShopGridMenColumn.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(ShopGridMenColumn);
