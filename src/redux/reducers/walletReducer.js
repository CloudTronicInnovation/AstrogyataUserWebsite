
import { SET_WALLET_AMOUNT } from '../actions/walletActions';

const initialState = {
  amount: 0
};

const walletReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_WALLET_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };
    default:
      return state;
  }
};

export default walletReducer;
