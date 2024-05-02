import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex">
        <div className="bg-blue-500 w-1/4 py-4 px-2">
            <ul className="capitalize text-white">
              <li className="my-2">
                <Link to="/">Home</Link>
              </li>
              <li className="my-2">
              <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="my-2">
                <Link to="/dashboard/addProducts">add products</Link>
              </li>
              <li className="my-2">
                <Link to="/dashboard/allProducts">all products</Link>
              </li>
            </ul>
        </div>
        <div className="w-3/4 py-4 px-2">
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard