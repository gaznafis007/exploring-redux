import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header/Header'
import deleteProductData from '../../api/redux/middleware/deletreProducts'
import { useEffect } from 'react'
import loadProductData from '../../api/redux/middleware/loadProductData'

const AllProducts = () => {
  const {products} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadProductData())
  },[])
  console.log(products);
  return (
    <div>
        <Header>all products</Header>
        <table className='w-full mt-4 mx-auto px-6 py-2 rounded-sm shadow-md'>
          <tr>
            <th className='capitalize'>
              model
            </th>
            <th className='capitalize'>
              brand
            </th>
            <th className='capitalize'>
              price
            </th>
            <th className='capitalize'>
              Availability
            </th>
            <th className='capitalize'>
              Delete Product
            </th>
          </tr>
          {
            products.map(product=><>
            <tr key={product._id}>
              <td className='py-2 px-1'>{product.model}</td>
              <td className='py-2 px-1'>{product.brand}</td>
              <td className='py-2 px-1'>{product.price}</td>
              <td className={`py-2 px-1 ${product.status ? "text-green-500" : "text-red-500"}`}>{product.status ? "Available" : "Out of Stock"}</td>
              <td className='py-2 px-1'>
                <button onClick={()=>dispatch(deleteProductData(product._id))} className='bg-red-500 text-white font-semibold px-4 py-2 rounded-md'>
                Delete
                </button>
              </td>
            </tr>
            </>)
          }
        </table>
    </div>
  )
}

export default AllProducts