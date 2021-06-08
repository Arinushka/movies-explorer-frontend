import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"/>
      <div className="header__wrapper">
         <button className="header__link">Регистрация</button>
				 <button className="header__link">Войти</button>
      </div>
    </header>
  );
}