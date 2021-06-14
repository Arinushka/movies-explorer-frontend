import React from 'react';
import './Form.css';

export const Form = (props) => {
	return (
		<div className="form">
			<div className="logo"></div>
			<h1 className="form__title">{props.title}</h1>
			<form className="form__container">
				{props.children}
				<button className="form__button">Зарегистрироваться</button>
			</form>
			<p className="form__check">Уже зарегистрированы? <a className="form__link" href="#">Войти</a></p>
		</div>
	);
}