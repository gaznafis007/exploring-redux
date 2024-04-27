import { reduxActionTypes } from "../actionTypes/actionTypes";

const initialValue = {
  inStock: false,
  brands: [],
};

export const filterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case reduxActionTypes.IN_STOCK:
      return {
        ...state,
        inStock: !state.inStock,
      };
    case reduxActionTypes.TOGGLE_BRANDS:
      return {
        ...state,
        brands: [...state.brands, action.payload].filter(
          (brand) => brand === action.payload
        ),
      };
    default:
      return state;
  }
};
