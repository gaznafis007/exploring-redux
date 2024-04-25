import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header"
// import useProducts from "../../hooks/useProducts"
import Card from "../../Components/Card/Card";
import { reduxActionTypes } from "../../api/redux/actionTypes/actionTypes";
import { useDispatch } from "react-redux";


const Home = () => {
    // const state = useProducts()
    // console.log(state);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/products")
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])
    console.log(products);

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

  const addToWishlist = (product) => {
    dispatch({ type: reduxActionTypes.ADD_TO_CART, payload: product });
  };
  
    return (
      <div>
          <Header>This is Home Page</Header>
          <div className="my-2 grid grid-cols-2 gap-3">
              {
                products.map(product=><Card key={product.model} product={product} actionName={"add to wishlist"} btnColor={"bg-blue-500"} eventHandler={()=>addToWishlist(product)}></Card>)
              }
          </div>
      </div>
    )
}

export default Home