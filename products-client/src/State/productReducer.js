import { actionTypes } from "./initialValueAndActions";

const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DATA_LOADING:
      // console.log({
      //   // ...state,
      //   loading: true,
      //   product: [],
      //   error: false,
      // });
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DATA_SUCCESS:
      // console.log({
      //   ...state,
      //   products: action.payload,
      //   loading: false,
      // });
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actionTypes.DATA_ERROR:
      return {
        // ...state,
        ...state,
        error: true,
      };
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        loading: false,
        wishlists: [...action.payload],
      };
    case actionTypes.DELETE_TO_WISHLIST:
      return {
        ...state,
        wishlists: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
