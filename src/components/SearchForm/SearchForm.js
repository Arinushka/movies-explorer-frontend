import React from 'react';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export const SearchForm = () => {
	return (
		<section className="search-form">
			<form className="search-form__form">
				<input className="search-form__input" type="search"placeholder="Фильм"></input>
				<button className="search-form__button"></button>
				<div className="search-form__wrapper">
				<label className="search-form__title">Короткометражки</label>
				<FilterCheckbox/>
				</div>
			</form>
		</section>
	);
}