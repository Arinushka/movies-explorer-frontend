import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
	return (
		<>
		{ props.isAuth && <nav className="navigation">
			<div className="navigation__wrapper">
				<Link to="/movies" className="navigation__link">Фильмы</Link>
				<Link to="/saved-movies" className="navigation__link navigation__link_active">Сохранённые фильмы</Link>
			</div>
			<div className="navigation__wrapper">
			<Link to="/profile" className="navigation__link">Аккаунт</Link>
			<div className="navigation__img"></div>
			</div>
		</nav>}
		{!props.isAuth && <nav className="navigation navigation_without_signin" >
			<div className="navigation__wrapper navigation__wrapper_without_signin">
				<Link to="/signup" className="navigation__link">Регистрация</Link>
				<Link to="/signin" className="navigation__link navigation__link_type_button">Войти</Link>
			</div>
		</nav>}
		</>
	);
}