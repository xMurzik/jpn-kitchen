import React from 'react';
import style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../Store/Cart-context';

const HeaderCartButton = (props) => {
  let [isButtonAnimated, setIsButtonAnimated] = useState(false);
  let cartContext = useContext(CartContext);

  let cartItemsNumber = cartContext.items.reduce((acc, elem) => {
    return acc + elem.amount;
  }, 0);

  let buttonClasses = `${style.button} ${isButtonAnimated ? style.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    let timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
