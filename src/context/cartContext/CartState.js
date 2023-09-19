import { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {

  const [cartItems, setCartItems] = useState([]);
 

  const delItem = (prodId) => {
    console.log("before : ", cartItems);

    const item = cartItems.filter((each)=> each.id !== prodId);

    setCartItems(item);

    console.log("after : ", cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, delItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
