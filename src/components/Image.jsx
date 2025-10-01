import React from 'react'

const Image = ({imgSrc,imgAlt,className,children}) => {
  return (
   <img src={imgSrc} alt={imgAlt} className={`${className}`}>{children}</img>
  )
}

export default Image