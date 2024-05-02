import Button from "../Button/Button"

/* eslint-disable react/prop-types */
const Card = ({product, eventHandler, actionName, btnColor}) => {
    
    const {image,keyFeature, model, rating, price} = product
  return (
    <div className="rounded-md shadow-md flex flex-col p-3">
        <div>
            <img src={image} alt="pc-view" />
        </div>
        <div>
            <h2 className="text-2xl font-semibold my-1">{model}</h2>
            {
                keyFeature &&
                <p className="my-2">
                <ul>
                    {
                        keyFeature.map((feature,idx)=><li key={idx}>{feature}</li>)
                    }
                </ul>
            </p>
            }
            <p>Rating: {rating}</p>
            <p className="font-semibold capitalize">price: {price}</p>
            {
                product.qty && <p className="font-semibold capitalize">quantity: {product.qty}</p>
            }
            <Button handler={eventHandler} bgColor={btnColor}>{actionName}</Button>
        </div>
    </div>
  )
}

export default Card