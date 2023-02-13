import React, { useReducer } from 'react';
import CartContext from './Cart-context';

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (store, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      let updatedTotalAmount =
        store.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = store.items.findIndex((elem) => {
        return elem.id === action.item.id;
      });

      const existingCartItem = store.items[existingCartItemIndex];

      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...store.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItem = {
          ...action.item,
        };
        updatedItems = store.items.concat(updatedItem);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM': {
      const existingCartItemIndex = store.items.findIndex((elem) => {
        return elem.id === action.id;
      });

      const existingCartItem = store.items[existingCartItemIndex];

      let updatedTotalAmount = store.totalAmount - existingCartItem.price;

      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = store.items.filter((elem) => elem.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...store.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
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
