import React, {useState} from 'react';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import {Menu} from './Menu/menu';
import {Order} from './Order/Order';
import {FoodDialog} from './FoodDialog/FoodDialog';
import {GlobalStyle} from './Styles/GlobalStyle';
import {useOpenFood} from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    
      <>
    <GlobalStyle/>
    <FoodDialog {...openFood} {...orders} />
    <Navbar/>
    <Order  {...orders} />
    <Banner/>
    <Menu  {...openFood} />
    </>
    
  );
}

export default App;
