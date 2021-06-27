import React from 'react';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = (props) => {
	return (
		<>
			<SearchForm
				onGetFilms={props.onGetFilms} 
				onIsDuration={props.onIsDuration}
				isDuration={props.isDuration}/>
			<MoviesCardList
			movies={props.movies} />
		</>
	);
}