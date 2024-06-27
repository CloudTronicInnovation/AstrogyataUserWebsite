import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import walletReducer from "./walletReducer";
import kundaliFormReducer from "./kundaliFormReducer"
import kundaliData from "./kundliReducer";
import astroStatusReducer from "./astroStatusReducer";
import varshphala from "./varshaPhalaReducer";


const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "de" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  walletReducer:walletReducer,
  kundaliFormReducer:kundaliFormReducer,
  kundaliData:kundaliData,
  notificationData:astroStatusReducer,
  varshphala:varshphala
}); 

export default rootReducer;