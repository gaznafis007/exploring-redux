import { useDispatch } from "react-redux";
import Header from "../../Components/Header/Header"
import addProductData from "../../api/redux/middleware/addProduct";
import {useNavigate} from "react-router-dom"



const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddProduct = (event) =>{
    event.preventDefault()
    const form = event.target;
    const model = form.model.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const image = form.image.value;
    const availability = form.availability.value;
    let status
    if(availability === "true"){
      status = true
    }
    else{
      status = false
    }
    const product = {
      model,
      brand,
      price,
      status,
      image
    }
    console.log(product);
    dispatch(addProductData(product))
    navigate("/dashboard/allProducts")
  }
  return (
    <div>
        <Header>add product</Header>
        <form onSubmit={handleAddProduct} className='w-full mt-4 mx-auto px-6 py-2 rounded-sm shadow-md'>
          <div>
            <label className="font-semibold">
              Model Name
            </label>
            <br />
            <input className="border border-black w-1/3 my-2" type="text" name="model" />
          </div>
          <div className="my-2">
            <label className="font-semibold">
              Brand Name
            </label>
            <br />
            <input className="mr-2" type="radio" name="brand" value="AMD"/>
            <label>AMD</label>
            <input className="mx-2" type="radio" name="brand" value="Intel"/>
            <label>Intel</label>
          </div>
          <div>
            <label className="font-semibold">
              Rating
            </label>
            <br />
            <input className="border border-black w-1/3 my-2" type="text" name="rating" />
          </div>
          <div>
            <label className="font-semibold">
              Price
            </label>
            <br />
            <input className="border border-black w-1/3 my-2" type="text" name="price" />
          </div>
          <div>
            <label className="font-semibold">
              Image
            </label>
            <br />
            <input className="border border-black w-1/3 my-2" type="text" name="image" />
          </div>
          <div>
            <label className="font-semibold">
              Availability
            </label>
            <br />
            <input className="mr-2" type="radio" name="availability" value={true}/>
            <label> Available</label>
            <input className="mx-2" type="radio" name="availability" value={false}/>
            <label>Not Available</label>
          </div>
          <button type="submit" className="capitalize bg-blue-500 px-4 py-2 rounded-md text-white my-2 font-semibold">add product</button>
        </form>
    </div>
  )
}

export default AddProduct