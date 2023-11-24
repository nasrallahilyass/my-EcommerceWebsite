// card.context.jsx
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [], 
  addItemTocard: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemTocard = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCardOpen, setIsCardOpen, addItemTocard, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};