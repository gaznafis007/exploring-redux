import { reduxActionTypes } from "../actionTypes/actionTypes";

const initialValue = {
  loading: false,
  error: false,
  wishlists: [],
};

export const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case reduxActionTypes.ADD_TO_CART:
      return {
        ...state,
        wishlists: [...state.wishlists, action.payload],
      };
    case reduxActionTypes.REMOVE_FROM_CART:
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
