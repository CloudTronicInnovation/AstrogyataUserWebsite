const initialState = {
    formData: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        // console.log(action.payload);
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  