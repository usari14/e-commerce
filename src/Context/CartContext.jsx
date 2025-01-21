// import React from 'react'

import { createContext, useContext, useState } from "react"


const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(1);

  console.log('cartItems', cartItems)

  // const increment = (id) => {
  //     // console.log('id', id)
  //     const incrementquantity = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
  //     setCartItems([...incrementquantity])
  //     // console.log('cartItems', cartItems)
  // };

  // const decrement = (id) => {
  //     const decrementquantity = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
  //     setCartItems([...decrementquantity])
  // };


  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    setQuantity(1)
  };

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Update the quantity of the existing item
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Add the new product with the specified quantity
      setCartItems([...cartItems, { ...product, quantity }]);
      console.log('cartItems', cartItems)
    }
  };


  return (
    <>
      <CartContext.Provider value={{ addToCart, cartItems, increment, decrement, quantity }} >
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider;
export const useCart = () => useContext(CartContext)