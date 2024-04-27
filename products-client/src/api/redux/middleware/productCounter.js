import { reduxActionTypes } from "../actionTypes/actionTypes";

const productCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const wishlists = state.product.wishlists;
  if (action.type === reduxActionTypes.ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: { ...action.payload, position: wishlists.length + 1 },
    };
    return next(newAction);
  }
  return next(action);
};

export default productCounter;
