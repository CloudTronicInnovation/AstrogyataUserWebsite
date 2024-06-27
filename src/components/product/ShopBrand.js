import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";

const ShopBrand = ({ brands, getSortParams,getonebrand }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Brand </h4>
      <div className="sidebar-widget-tag mt-25">
        {brands ? (
          <ul>
            {brands.map((brands, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e) => {
                      getonebrand(brands._id)
                      getSortParams("brands", brands);
                      setActiveSort(e);
                    }}
                  >
                    {brands.name}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No brands found"
        )}
      </div>
    </div>
  );
};

ShopBrand.propTypes = {
  getSortParams: PropTypes.func,
  brands: PropTypes.array,
};

export default ShopBrand;
