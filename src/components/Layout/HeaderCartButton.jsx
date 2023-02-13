import React from 'react';
import style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../Store/Cart-context';

const HeaderCartButton = (props) => {
  let cartContext = useContext(CartContext);

  let cartItemsNumber = cartContext.items.reduce((acc, elem) => {
    return acc + elem.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
