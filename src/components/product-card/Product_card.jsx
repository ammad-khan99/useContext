import React, { useContext } from "react";
import style from "./Product_card.module.css";
import cartContext from "../../context/cartContext/CartContext";



function Product_card(props) {
  const { cartItems, setCartItems} = useContext(cartContext)
// console.log('cart elements : ',cartElements);
  
const handleAddToCart= (prod) => {
  setCartItems([...cartItems,prod])
  }

  return (
    <div className={style.card}>
      <img
        className={style.prod_image}
        src={props.data.image}
        alt="Product Image"
      />
      <div className={style.card_desc}>
        <hr className={style.card_hr} />
        <p className={style.price}>
          <span className={style.span}> ${props.data.price}</span>
          <span className={style.span}> Rating : {props.data.rating.rate}</span>
        </p>
        <h4 className={style.title}>{props.data.title}</h4>
        <p className={style.para}>{props.data.description}</p>
      </div>
      <button className={style.card_button} onClick={()=> handleAddToCart(props.data)}>Add to cart</button>
    </div>
  );
}

export default Product_card;
