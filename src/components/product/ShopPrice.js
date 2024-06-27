import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}



// const ShopPrice=({ tags, getSortParams,getonetag })=> {
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         getAriaLabel={() => 'Temperature range'}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//       />
//     </Box>
//   );
// }


const ShopPrice = ({ tags, getSortParams, priceobj }) => {
  const [value, setValue] = React.useState([1, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue[0]*100)
    priceobj({ min: newValue[0] * 25, max: newValue[1] * 25 })
    // getminvalue(newValue[0]*100)
    // console.log(newValue[1]*100)
    // getmaxvalue(newValue[1]*100)
  };
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Price Range </h4>
      <div className="sidebar-widget-tag mt-25">
        <Box >
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            scale={(i) => 25 * i}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
};

ShopPrice.propTypes = {
  getSortParams: PropTypes.func,
  price: PropTypes.array
};

export default ShopPrice;
