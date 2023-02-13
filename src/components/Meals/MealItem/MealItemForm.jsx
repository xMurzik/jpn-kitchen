import React, { useRef, useState } from 'react';
import style from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  let [isAmountValid, setIsAmountValid] = useState(true);
  let amountInputRef = useRef();

  let submitHandler = (event) => {
    event.preventDefault();
    let inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please enter amount from 1 to 10</p>}
    </form>
  );
};

export default MealItemForm;
