import React, {useState} from 'react';
import {Navbar} from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import {Menu} from './Menu/menu';
import {Order} from './Order/Order';
import {FoodDialog} from './FoodDialog/FoodDialog';
import {GlobalStyle} from './Styles/GlobalStyle';
import {useOpenFood} from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';
import {useTitle} from './Hooks/useTitle';


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});
  return (
    
      <>
    <GlobalStyle/>
    <FoodDialog {...openFood} {...orders} />
    <Navbar/>
    <Order  {...orders} {...openFood}/>
    <Banner/>
    <Menu  {...openFood} />
    </>
    
  );
}

export default App;
