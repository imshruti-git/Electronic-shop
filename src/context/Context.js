import { createContext, useReducer, useState, useEffect, useContext } from 'react';
import { cartReducer } from './Reducers';
const Cart = createContext();

const Context = ({ children }) => {

    

    const [state, dispatch] = useReducer(cartReducer, {
      
      cart: [],
    });

   console.log(state);

  return(
    <Cart.Provider value={{ state, dispatch }}> {children} </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;


