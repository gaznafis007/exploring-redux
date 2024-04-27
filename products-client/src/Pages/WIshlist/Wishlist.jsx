import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { reduxActionTypes } from '../../api/redux/actionTypes/actionTypes'

const Wishlist = () => {
  // const {loading, wishlists, error} = useProducts()
  // const {removeFromWishlist} = useContext(ProductContext)
  // if(loading){
  //   return <>
  //     <h2 className="text-4xl text-center uppercase text-green-500">Loading</h2>
  //   </>
  // }
  // else if (error){
  //   return<>
  //   <h2 className="text-4xl text-center uppercase text-red-500">There is an error</h2>
  // </>
  // }
  // else if (wishlists){
  //   return (
  //     <>
  //         <Header>This is Wishlist</Header>
  //         <div className="my-2 grid grid-cols-3 gap-3">
  //           {
  //             wishlists.map(wishlist=><Card key={wishlist.model} product={wishlist} actionName={"remove from wishlist"} btnColor={"bg-red-500"} eventHandler={()=>removeFromWishlist(wishlist)}></Card>)
  //           }
  //         </div>
  //     </>
  //   )
  // }
  const {wishlists} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  const removeFromWishlists = (product) => {
    console.log(product.model);
    dispatch({ type: reduxActionTypes.REMOVE_FROM_CART, payload: product });
  };
  
  return (
    <>
        <Header>This is Wishlist</Header>
        <div className="my-2 grid grid-cols-3 gap-3">
          {
            wishlists.map(wishlist=><Card key={wishlist.model} product={wishlist} actionName={"remove from wishlist"} btnColor={"bg-red-500"} eventHandler={()=>removeFromWishlists(wishlist)}></Card>)
          }
        </div>
    </>
  )
}

export default Wishlist