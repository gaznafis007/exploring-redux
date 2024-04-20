import Header from "../../Components/Header/Header"
import useProducts from "../../hooks/useProducts"


const Home = () => {
    const state = useProducts()
    console.log(state);

  if(state.loading){
    return <>
      <h2 className="text-4xl text-center uppercase text-green-500">Loading</h2>
    </>
  }
  else if(state.error){
    return<>
    <h2 className="text-4xl text-center uppercase text-red-500">There is an error</h2>
  </>
  }
    return (
      <div>
          <Header>This is Home Page</Header>
          <div className="my-2">
              Products quantity: {state.products.length}
          </div>
      </div>
    )
}

export default Home