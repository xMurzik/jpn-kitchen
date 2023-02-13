import React, { useReducer } from 'react';
import CartContext from './Cart-context';

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (store, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      let updatedItems = store.items.concat(action.item);
      let updatedTotalAmount =
        store.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default: {
      return store;
    }
  }
};

const CartContextProvider = (props) => {
  let [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  let addItemHandler = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  let removeItemHandler = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
