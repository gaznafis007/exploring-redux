import { useContext } from "react";
import { ProductContext } from "../api/Context/ProductProvider";

const useProducts = () => {
  const { state } = useContext(ProductContext);
  // console.log(state);
  return state;
};

export default useProducts;
