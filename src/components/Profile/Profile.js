import React from 'react';
import { Input } from '../Input/Input';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export const Profile = (props) => {

	const currentUser = React.useContext(CurrentUserContext);

	React.useEffect(() => {
		props.onIsHiddenFooter(false)
		return () => {
			props.onIsHiddenFooter(true)
		}
	}, [])

	return (
		<div className="profile">
			<h1 className="profile__title">Привет, {currentUser.name}!</h1>
			<form className="profile__form">
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="text"
						minLength="2"
						maxLength="30"
						placeholder={currentUser.name} />
					<label className="profile__label">Имя</label>
				</div>
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="email"
						minLength="2"
						maxLength="30"
						placeholder={currentUser.email} />
					<label className="profile__label">Email</label>
				</div>
				<button className="profile__button">Редактировать</button>
			</form>
			<button  className="profile__link" onClick={props.onSignOut}>Выйти из аккаунта</button>
		</div>
	);
}