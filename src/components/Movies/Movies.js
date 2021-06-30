import React from 'react';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = (props) => {
	return (
		<>
			<SearchForm
				onGetFilms={props.onGetFilms} 
				onFindByDuration={props.onFindByDuration}
				movies={props.movies}
				onSetMovies={props.onSetMovies}/>
			<MoviesCardList
			movies={props.movies} 
			onHandleMovieButton={props.onHandleMovieButton}
			savedMovies={props.savedMovies}
			component='movies'
			onSetMovies={props.onSetMovies}/>
		</>
	);
}