import React, { useContext } from "react";
import Navbar from "../nav/Navbar";
import cartContext from "../../context/cartContext/CartContext";
import CartCard from "./../cart-card/CartCard";

function CartPage() {
  const { cartItems } = useContext(cartContext);
console.log('cartItems in cart page : ', cartItems);
  return (
    <div>
      <Navbar />
      <ul>
        {cartItems.map((each, index) => {
          return (
            <li key={index}>
              <CartCard each={each} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartPage;
