import React from 'react'
import { Menu } from './model/restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenuName(name:string):string
}

// 함수까지 받아올수있음 
const BestMenu:React.FC<OwnProps> = ({name, showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu