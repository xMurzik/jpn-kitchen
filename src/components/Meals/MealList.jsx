import React, { useEffect, useState } from 'react';
import style from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const MealList = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [httpError, setHttpErrorMessage] = useState();

  useEffect(() => {
    let loadedMeals = [];
    setIsloading(true);
    fetch(
      'https://react-practicing-776b5-default-rtdb.firebaseio.com/meals.json'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Smth going wrong!');
        }
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsloading(false);
      })
      .catch((e) => {
        setHttpErrorMessage(e.message);
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={style.loading}>
        <p>Loading data...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={style.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  let mealList = meals.map((elem) => (
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
