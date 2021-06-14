import React from 'react';
import './Error404.css';

export const Error404 = () => {
	return (
		<div className="error">
			<h1 className="error__title">404</h1>
			<p className="error__subtitle">Страница не найдена</p>
			<a className="error__link" href="#">Назад</a>
		</div>
	);
}