import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartContext from '../Store/Cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  let cartItems = (
    <ul className={style['cart-items']}>
      {cartContext.items.map((elem) => {
        return (
          <CartItem
            key={elem.id}
            name={elem.name}
            amount={elem.amount}
            price={elem.price}
            onAdd={addCartItemHandler.bind(null, elem)}
            onRemove={removeCartItemHandler.bind(null, elem.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Sum</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.onHideCart} className={style['button--alt']}>
          Close
        </button>
        {hasItems && <button className={style.button}>Make order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
