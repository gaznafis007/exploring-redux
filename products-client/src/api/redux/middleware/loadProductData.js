import { reduxActionTypes } from "../actionTypes/actionTypes";

const loadProductData = () => {
  // eslint-disable-next-line no-unused-vars
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    console.log(data);
    dispatch({ type: reduxActionTypes.LOAD_PRODUCT, payload: data });
  };
};

export default loadProductData;
