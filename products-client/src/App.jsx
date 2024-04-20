import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import ProductProvider from './api/Context/ProductProvider'

function App() {
  return (
    <>
     <ProductProvider>
     <RouterProvider router={router}></RouterProvider>
     </ProductProvider>
    </>
  )
}

export default App
