import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
   
    return  useContext(CartContext);
  }
export default function CartProvider({children}) {
	
     const [cartItems,setCartItems] = useState([]);
     const [cartButtonPressed,setCartButtonPressed] = useState(false);  
   
   return <CartContext.Provider value={{cartItems,setCartItems,cartButtonPressed,setCartButtonPressed}} > 
           {children} 
         </CartContext.Provider>

}