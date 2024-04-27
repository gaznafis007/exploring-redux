import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import productCounter from "./middleware/productCounter";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productCounter))
);
