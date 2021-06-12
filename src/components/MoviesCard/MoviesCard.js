import React from 'react';
import './MoviesCard.css';

export const MoviesCard = (props) => {
	return (
		<article className="movies-card">
			<img className="movies-card__image" alt="Картинка к фильму" src={props.img} alt={props.alt} />
			<div className="movies-card__wrapper">
				<h2 className="movies-card__title">{props.title}</h2>
				<button className="movies-card__button"></button>
			</div>
			<p className="movies-card__time">{props.time}</p>
		</article>
	);
}