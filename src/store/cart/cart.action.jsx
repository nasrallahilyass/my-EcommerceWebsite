import { CART_ACTION_TYPES } from './cart.types';
import createAction from '../../utils/reducer/reducer.utils';

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
  
const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
const clearCartItem = (cartItems, productItemToClear) => cartItems.filter((cartItem) => cartItem.id !== productItemToClear.id);
  

export const addItemTocard = (cartItems , productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems})
  };

export const removeItemToCart = (cartItems , cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems})
  };

export const clearItemFromcard = (cartItems , productItemToClear) => {
    const newCartItems = clearCartItem(cartItems, productItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems})
  };

export const setIsCartOpen = createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);