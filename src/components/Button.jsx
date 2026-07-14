import React from 'react'

const Button = ({text,classname="",onclick,type="button"}) => {
  return (
    <button  type="submit"
      onClick={onclick}
      className={`bg-green-600 text-white rounded transition px-6 py-2`} >{text}
     
    </button>
  )
}

export default Button