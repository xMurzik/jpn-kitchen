import React from 'react';
import style from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Roll "Naomi"',
    description:
      'Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Spice in salmon',
    description: 'Rice, salmon, spice sauce',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Sushi with eel',
    description: 'Smoked eel, unagi sauce, sesame',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Salad "Poke with salmon"',
    description: 'Rice, salmon, cucumber, chuka, nori, tuna chips, nut sauce',
    price: 7.99,
  },
];

const MealList = (props) => {
  let mealList = DUMMY_MEALS.map((elem) => (
    <MealItem
      id={elem.id}
      key={elem.id}
      name={elem.name}
      description={elem.description}
      price={elem.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
