import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {

	console.log(props.movies)
	return (
		<section className="card-list">
			<div className="card-list__wrapper">
				{props.movies.map((movie) => (
					<MoviesCard
						key={movie.id}
						movie={movie}
						onHandleMovieButton={props.onHandleMovieButton}
						savedMovies={props.savedMovies} 
						component={props.component}/>
				))}
				{console.log(props.movies)}
			</div>
			<button className="card-list__button">Еще</button>
		</section>
	);
}