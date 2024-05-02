/* eslint-disable no-unused-vars */
import { reduxActionTypes } from "../actionTypes/actionTypes";
import action from "../actions/action";

const deleteProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      dispatch(action(reduxActionTypes.DELETE_PRODUCT, id));
    }
  };
};
export default deleteProductData;
