/* eslint-disable react/prop-types */
const Header = ({children}) => {
  return (
    <>
        <h2 className="capitalize text-2xl font-semibold text-green-400 text-center">{children}</h2>
    </>
  )
}

export default Header