/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer} from 'react'
import { actionTypes, initialValue } from '../../State/initialValueAndActions'
import productsReducer from '../../State/productReducer'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    // const [products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:5000/products")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setProducts(data)
    //     })
    // },[])
    //
    
    const [state, dispatch] = useReducer(productsReducer,initialValue)
    useEffect(()=>{
      dispatch({type: actionTypes.DATA_LOADING})
      try{
        fetch("http://localhost:5000/products")
      .then(res=>res.json())
      .then(data=>{
        dispatch({type:actionTypes.DATA_SUCCESS, payload: data})
        // console.log("after update",state);
      })
      }
      catch(error){
          console.log(error);
          dispatch({type:actionTypes.DATA_ERROR})
        
      }
    },[])
    const addToWishlist = (product) =>{
      console.log(product);
      dispatch({type:actionTypes.ADD_TO_WISHLIST, payload:[...state.wishlists,product]})
     }
     const removeFromWishlist = (product) =>{
      console.log(product);
      const newWishlists = state.wishlists.filter(wishlist=> wishlist.model !== product.model)
      console.log(newWishlists.length);
      dispatch({type:actionTypes.DELETE_TO_WISHLIST, payload:newWishlists})
     }
    const value = {
      // products,
      state,
      dispatch,
      addToWishlist,
      removeFromWishlist
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider