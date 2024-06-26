import { reduxActionTypes } from "../actionTypes/actionTypes";

const initialValue = {
  loading: false,
  error: false,
  wishlists: [],
  products: [],
};

export const productReducer = (state = initialValue, action) => {
  const selectedProduct = state.wishlists.find(
    (wishlist) => wishlist.model === action.payload.model
  );
  switch (action.type) {
    case reduxActionTypes.LOAD_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case reduxActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case reduxActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product._id !== action.payload),
        ],
      };
    case reduxActionTypes.ADD_TO_CART:
      if (selectedProduct) {
        selectedProduct.qty
          ? (selectedProduct.qty = selectedProduct.qty + 1)
          : (selectedProduct.qty = 2);
        return {
          ...state,
          wishlists: [...state.wishlists],
        };
      }
      return {
        ...state,
        wishlists: [...state.wishlists, action.payload],
      };
    case reduxActionTypes.REMOVE_FROM_CART:
      if (selectedProduct && selectedProduct.qty >= 2) {
        selectedProduct.qty = selectedProduct.qty - 1;
        return {
          ...state,
          cart: [...state.wishlists],
        };
      }
      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            (wishlist) => wishlist.model !== action.payload.model
          ),
        ],
      };
    default:
      return state;
  }
};
