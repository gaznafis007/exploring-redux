import { filterReducer } from "./filterReducer";
import { productReducer } from "./productReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export default rootReducer;
