import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header"
// import useProducts from "../../hooks/useProducts"
import Card from "../../Components/Card/Card";
import { reduxActionTypes } from "../../api/redux/actionTypes/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import action from "../../api/redux/actions/action";

const Home = () => {
    // const state = useProducts()
    // console.log(state);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/products")
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])
    // console.log(products);

  // if(state.loading){
  //   return <>
  //     <h2 className="text-4xl text-center uppercase text-green-500">Loading</h2>
  //   </>
  // }
  // else if(state.error){
  //   return<>
  //   <h2 className="text-4xl text-center uppercase text-red-500">There is an error</h2>
  // </>
  // }
  const dispatch = useDispatch()
  const {inStock, brands} = useSelector((state)=>state.filter)
  console.log(brands);
  const addToWishlist = (product) => {
    dispatch({ type: reduxActionTypes.ADD_TO_CART, payload: product });
  };

  let content = products;
  console.log(content);
  if (inStock){
    content = products.filter(product=>product.status === true)
  }
  if (brands.length){
    content = products.filter(product=> brands.includes(product.brand))
    console.log(content);
  }
// console.log(content);
    return (
      <div>
          <Header>This is Home Page</Header>
          <div className="flex justify-end gap-4 my-4">
            <p onClick={()=>dispatch({type:reduxActionTypes.IN_STOCK})} className={`bg-slate-100 rounded-full px-4 py-2 capitalize cursor-pointer hover:bg-slate-200`}>in stock</p>
            <p onClick={()=>dispatch(action(reduxActionTypes.TOGGLE_BRANDS, "AMD"))} className={`bg-slate-100 rounded-full px-4 py-2 capitalize cursor-pointer hover:bg-slate-200`}>AMD</p>
            <p onClick={()=>dispatch(action(reduxActionTypes.TOGGLE_BRANDS, "Intel"))} className={`bg-slate-100 rounded-full px-4 py-2 capitalize cursor-pointer hover:bg-slate-200`}>intel</p>
          </div>
          <div className="my-2 grid grid-cols-2 gap-3">
              {
                content.map(product=><Card key={product.model} product={product} actionName={"add to wishlist"} btnColor={"bg-blue-500"} eventHandler={()=>addToWishlist(product)}></Card>)
              }
          </div>
      </div>
    )
}

export default Home