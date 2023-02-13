import React from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';

const Cart = (props) => {
  let cartItems = (
    <ul className={style['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.2 }].map((elem) => {
        return <li>{elem.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Sum</span>
        <span>50.00</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.onHideCart} className={style['button--alt']}>
          Close
        </button>
        <button className={style.button}>Make order</button>
      </div>
    </Modal>
  );
};

export default Cart;
