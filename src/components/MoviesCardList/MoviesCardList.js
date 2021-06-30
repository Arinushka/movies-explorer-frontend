import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {
	return (
		<section className="card-list">
			<div className="card-list__wrapper">
				{props.movies.map((movie) => (
					<MoviesCard
						key={movie.id}
						movie={movie}
						onHandleMovieButton={props.onHandleMovieButton}
						savedMovies={props.savedMovies} />
				))}
				{console.log(props.movies)}
			</div>
			<button className="card-list__button">Еще</button>
		</section>
	);
}