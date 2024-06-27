import { SET_WALLET_AMOUNT } from "../actions/walletActions";

const initialState = {
  data: {},
};

const kundaliData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KUNDLI_DATA":
      return {
        data: action.payload,
      };
    case "RESET_DATA":
      return initialState;
    default:
      return state;
  }
};

export default kundaliData;
