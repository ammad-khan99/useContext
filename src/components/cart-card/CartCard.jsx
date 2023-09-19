import React, { useContext } from "react";
import style from "./CartCard.module.css";
import deleteIcon from "./../../assets/trash-2.svg";
import cartContext from "../../context/cartContext/CartContext";

function CartCard(props) {
  const { delItem } = useContext(cartContext);

  const { image, title,id } = props.each;
  // const { index } = props.index;
// console.log('id: ',id);
  const handleDelItem = (id) => {
    delItem(id);
  };

  return (
    <div className={style.card}>
      <div>
        <img src={image} width={100} height={100} />
      </div>
      <div className={style.desc}>
        <div>
          <h4 className={style.title}>{title}</h4>
        </div>
        <div className={style.quantity}>
          <p>Quantity :</p>
          <span>1</span>
          <span onClick={() => handleDelItem(id)} className={style.del_btn}>
            <img src={deleteIcon} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
