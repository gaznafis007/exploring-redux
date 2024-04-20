
import { useContext } from "react"
import Card from "../../Components/Card/Card"
import Header from "../../Components/Header/Header"
import useProducts from "../../hooks/useProducts"
import { ProductContext } from "../../api/Context/ProductProvider"


const Products = () => {
  const { loading, products,error,wishlists } = useProducts()
  const { addToWishlist} = useContext(ProductContext)
    console.log(wishlists);
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
    return (
      <div>
          <Header>This is Products</Header>
          <div className="my-4 grid grid-cols-3 gap-3">
            {
              products.map((product)=><Card key={product.model} product={product} eventHandler={()=>addToWishlist(product)}actionName={"add to wishlist"} btnColor={"bg-blue-500"}></Card>)
            }
          </div>
      </div>
    )
  
  
}

export default Products