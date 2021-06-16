import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = (props) => {
  return (
    <header className="header">
      <Link to="/" className="logo"></Link>
      <div className="header__wrapper">
        <Navigation isAuth={props.isAuth} />
      </div>
    </header>
  );
}