export const initialValue = {
  loading: false,
  products: [],
  error: false,
  wishlists: [],
};

export const actionTypes = {
  DATA_LOADING: "DATA_LOADING",
  DATA_SUCCESS: "DATA_SUCCESS",
  DATA_ERROR: "DATA_ERROR",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  DELETE_TO_WISHLIST: "DELETE_TO_WISHLIST",
};
