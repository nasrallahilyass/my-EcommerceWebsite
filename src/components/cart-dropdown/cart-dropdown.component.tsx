import { useSelector } from "react-redux";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const toTheCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  },[]);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
        <Button onClick={toTheCheckoutHandler}>Checkout out</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
