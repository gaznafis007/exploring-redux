import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import {Provider} from 'react-redux'
import ProductProvider from './api/Context/ProductProvider'
import { store } from './api/redux/store'

function App() {
  return (
    <>
     <ProductProvider>
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
     </ProductProvider>
    </>
  )
}

export default App
