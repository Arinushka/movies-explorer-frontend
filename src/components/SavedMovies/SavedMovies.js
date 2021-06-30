import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export const SavedMovies = (props) => {

	React.useEffect(() => {
		props.onHandleMovies()
	}, [])

	return (
		<>
			<SearchForm />
			<div className="card-list">
				<MoviesCardList
					movies={props.savedMovies}
					component='savedMovies'
					onHandleMovieButton={props.onHandleMovieButton} />
			</div>
		</>
	);
}