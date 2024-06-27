

const initialState = {
    varshPhala: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VARSHA_PHALA':
        // console.log(action.payload);
        return {
          ...state,
          varshPhala: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
