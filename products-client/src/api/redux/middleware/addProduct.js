/* eslint-disable no-unused-vars */
import { reduxActionTypes } from "../actionTypes/actionTypes";
import action from "../actions/action";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.acknowledged) {
      const newProduct = {
        _id: data.insertedId,
        ...product,
      };
      dispatch(action(reduxActionTypes.ADD_PRODUCT, newProduct));
    }
  };
};
export default addProductData;
