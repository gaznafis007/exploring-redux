
import { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import useProducts from '../../hooks/useProducts'
import { ProductContext } from '../../api/Context/ProductProvider'

const Wishlist = () => {
  const {loading, wishlists, error} = useProducts()
  const {removeFromWishlist} = useContext(ProductContext)
  if(loading){
    return <>
      <h2 className="text-4xl text-center uppercase text-green-500">Loading</h2>
    </>
  }
  else if (error){
    return<>
    <h2 className="text-4xl text-center uppercase text-red-500">There is an error</h2>
  </>
  }
  else if (wishlists){
    return (
      <>
          <Header>This is Wishlist</Header>
          <div className="my-2 grid grid-cols-3 gap-3">
            {
              wishlists.map(wishlist=><Card key={wishlist.model} product={wishlist} actionName={"remove from wishlist"} btnColor={"bg-red-500"} eventHandler={()=>removeFromWishlist(wishlist)}></Card>)
            }
          </div>
      </>
    )
  }
}

export default Wishlist