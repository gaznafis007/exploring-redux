import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-8 mx-auto rounded-full">
        <div className="flex justify-between">
            <h2 className="text-white text-3xl font-semibold">PC tech</h2>
            <ul className="flex text-white gap-2 font-semibold">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/topRated">Top Rated</Link>
                </li>
                <li>
                    <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar