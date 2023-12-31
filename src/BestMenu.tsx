import React from 'react'
import { Menu } from './model/restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
  showBestMenuName(name: string): string
}

// ts
const BestMenu: React.FC<OwnProps> = ({ name, showBestMenuName }) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu