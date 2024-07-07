import React from 'react'

const Button = ({onClick , className , style , text}) => {
  return (
    <button className={className} onClick={onClick} style={style}>{text}</button>
  )
}

export default Button;