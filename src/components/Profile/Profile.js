import React from 'react';
import { Input } from '../Input/Input';
import './Profile.css';

export const Profile = () => {
	return (
		<div className="profile">
			<h1 className="profile__title">Привет, Виталий!</h1>
			<form className="profile__form">
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="text" />
					<label className="profile__label">Имя</label>
				</div>
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="email" />
					<label className="profile__label">Email</label>
				</div>
				<button className="profile__button">Редактировать</button>
			</form>
			<a className="profile__link" href="#">Выйти из аккаунта</a>
		</div>
	);
}