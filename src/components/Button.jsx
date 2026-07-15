import React from 'react'

const Button = ({ text, classname = "", onclick, type = "button" }) => {
  return (
    <button
      type={type} 
      onClick={onclick}
      className={`bg-green-600 text-white rounded px-6 py-2 ${classname}`}
    >
      {text}
    </button>
  )
}

export default Button