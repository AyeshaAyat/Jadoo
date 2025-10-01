import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`w-[1445px] items-center m-auto  ${className}`}>{children}</div>
  )
}

export default Container