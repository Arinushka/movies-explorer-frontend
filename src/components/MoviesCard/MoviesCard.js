import React from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


export const MoviesCard = (props) => {

	const { nameRU, image, duration } = props.movie;
	const currentUser = React.useContext(CurrentUserContext);
  const id = props.movie.id || props.movie.movieId;
  const isLiked = props.savedMovies.some(item => item.movieId === id && item.owner === currentUser.id);

  const movieSavedButtonClassName = (`movies-card__button ${isLiked && 'movies-card__button_like_active'}`);

	function handleButton() {
		props.onHandleMovieButton(props.movie)
	}

	return (
		<article className="movies-card">
			<img className="movies-card__image" alt="Картинка к фильму" src={'https://api.nomoreparties.co' + image.url} />
			<div className="movies-card__wrapper">
				<h2 className="movies-card__title">{nameRU}</h2>
				{!props.isSavedMovies && <button onClick={handleButton} className={movieSavedButtonClassName}></button>}
				{props.isSavedMovies && <button className="movies-card__button movies-card__button_delete_card"></button>}
			</div>
			<p className="movies-card__time">{duration}</p>
		</article>
	);
}