import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name: '찬이네 식당',
  category: 'western',
  address: {
    city: 'busan',
    detail: 'somewhere',
    zipCode: 23425634
  },
  menu : [{name: 'rose pasta', price: 20000, category: 'PASTA'},{name: 'garlic steak', price: 30000, category: "STEAK"}]
}

const App:React.FC = () => {
  const [myrestaurant, setMyrestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyrestaurant({...myrestaurant, address:address })
  }
  
  const showBestMenuName = (name:string) => {
    return name
  }
  return (
    <div className="App">
      <Store info={myrestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
