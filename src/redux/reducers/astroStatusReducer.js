const initialState = {
  data: {},
};

const astroStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION_DATA":
      return {
        data: action.payload,
      };
    case "REMOVE_NOTIFICATION_DATA":
      return initialState;
    default:
      return state;
  }
};

export default astroStatusReducer;
