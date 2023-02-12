import React from 'react';
import style from './PromoText.module.css';

const PromoText = () => {
  return (
    <section className={style['promo-text']}>
      <h2>Online sushi restaurant japan kitchen</h2>
      <p>
        Japanese Cuisine - is an online sushi restaurant where your favorite
        sushi and sashimi, rolls and other national dishes are made by a team of
        professional chefs.
      </p>
      <p>
        Fast work and high-quality products, as well as the most genuine
        ingredients, give a good taste to dishes, give pleasure from a meal.
      </p>
    </section>
  );
};

export default PromoText;
