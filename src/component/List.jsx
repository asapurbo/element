import React from 'react'
import { Children } from 'react'

const List = ({href,text,className,target}) => {
  return (
    <li className={`list-none ${className}`} ><a href={href} target={target}>{text}</a></li>
  )
}

export default List