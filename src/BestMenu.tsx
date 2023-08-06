import React from 'react'
import { Menu } from './model/restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenuName(name:string):string
}

// 리액트 타입스크립트 변환입니다
const BestMenu:React.FC<OwnProps> = ({name, showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu