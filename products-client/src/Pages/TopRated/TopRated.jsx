
import { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import useProducts from '../../hooks/useProducts'
import { ProductContext } from '../../api/Context/ProductProvider'

const TopRated = () => {
  const state = useProducts()
  const {addToWishlist} = useContext(ProductContext)
  console.log(state);
  if(state.loading){
    return <>
      <h2 className="text-center font-semibold text-3xl text-green-500">Loading...</h2>
    </>
  }
  else if(state.error){
    return <>
      <h2 className="text-center font-semibold text-3xl text-red-500">There is an error</h2>
    </>
  }
  else if(state.products){
    return (
      <div>
          <Header>This is top rated page</Header>
          <div className="my-2 grid grid-cols-3 gap-3">
            {
              state?.products.filter(filteredProducts=>filteredProducts.rating > 3).map(product=><Card key={product.model} product={product} eventHandler={()=>addToWishlist(product)} actionName={"add to wishlist"} btnColor={"bg-blue-500"}></Card>)
            }
          </div>
      </div>
    )
  }
}

export default TopRated