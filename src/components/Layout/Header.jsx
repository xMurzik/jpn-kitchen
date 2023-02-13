import React from 'react';
import sushi from './sushi.jpg';
import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>Japan kitchen</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={sushi} alt="sushi" />
      </div>
    </>
  );
};

export default Header;
