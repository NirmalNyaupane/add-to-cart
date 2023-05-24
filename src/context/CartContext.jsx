import { useState, createContext } from "react";
import PRODUCTS from "../products";

const CartContextProvider = createContext(null);
export const CartContenxt = ({ children }) => {
  //setting default cart
  const getDefaultCart = () => {
    const cart = {};

    for (let i = 1; i <= PRODUCTS.length; i++) {
      cart[i] = 0;
    }

    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: 1 }));
  };

  const removeToCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: 0 }));
  };

  const increaseItems = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));
  };

  const decreaseItems = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
  };

  const updateItems = (itemsId, number) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: number }));
  };

  const calculateTotalAmount = () =>{
    let totalAmt = 0;
    for(const items in cartItems){
       if(cartItems[items]>0){
          let productInformation = PRODUCTS.find((product)=>product.id === Number(items));
          totalAmt+=cartItems[items]*productInformation.price;
       }
    }

    return totalAmt;
  }


  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeToCart,
    increaseItems,
    decreaseItems,
    updateItems,
    calculateTotalAmount
  };
  return (
    <CartContextProvider.Provider value={contextValue}>
      {children}
    </CartContextProvider.Provider>
  );
};

export default CartContextProvider;
