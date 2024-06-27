import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
const dot = {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    display: "inline-block",
  
}

const ShopColor = ({ colors, getSortParams,getonecolor }) => {
  
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getonecolor(color._id)
                        console.log(color._id)
                        getSortParams("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /><span style={{backgroundColor: color?.colorName,borderRadius: "50%",height: 25,
    width: 25}}></span> {color?.colorName}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
