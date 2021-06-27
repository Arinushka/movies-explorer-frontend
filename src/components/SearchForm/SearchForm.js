import React from 'react';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export const SearchForm = (props) => {

	const [keyValue, setKeyValue] = React.useState('');

	function handleKeyValue(e) {
		setKeyValue(e.target.value)
	}

	function handleSearch(e) {
		e.preventDefault()
		props.onGetFilms(keyValue)
	}

	return (
		<section className="search-form">
			<form className="search-form__form" onSubmit={handleSearch}>
				<div className="search-form__container">
					<input onChange={handleKeyValue} value={keyValue} className="search-form__input" type="search" placeholder="Фильм" required></input>
					<button className="search-form__button" type="submit"></button>
				</div>
				<div className="search-form__wrapper">
					<label className="search-form__title">Короткометражки</label>
					<FilterCheckbox
						onIsDuration={props.onIsDuration}
						isDuration={props.isDuration} />
				</div>
			</form>
		</section>
	);
}