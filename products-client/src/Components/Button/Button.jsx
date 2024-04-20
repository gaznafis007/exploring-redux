/* eslint-disable react/prop-types */


const Button = ({children, bgColor, handler}) => {
  return (
    <button onClick={handler} className={`capitalize my-2 px-3 py-1 ${bgColor} text-white rounded-md`}>{children}</button>
  )
}

export default Button