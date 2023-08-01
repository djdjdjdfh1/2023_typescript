import React from 'react'
import { Restaurant, Address } from './model/restaurant'

interface OwnProps {
    info: Restaurant,
    changeAddress(address:Address):void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>
            <p>{info.name}</p>
        </div>
    )
}

export default Store;