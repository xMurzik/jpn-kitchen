import React from 'react';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const formatedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
