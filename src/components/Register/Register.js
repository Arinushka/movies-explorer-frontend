import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export const Register = (props) => {
	return (
		<Form
			title="Добро пожаловать!"
			typeLink="Войти"
			to="/signin"
			typeButton="Зарегистрироваться"
			check="Уже зарегистрированы?"
			onIsHidden={props.onIsHidden}>
			<div className="form__wrapper">
				<Input
					className="form__input"
					type="text" />
				<label className="form__label">Имя</label>
			</div>
			<div className="form__wrapper">
				<Input
					className="form__input"
					type="email" />
				<label className="form__label">Email</label>
			</div>
			<div className="form__wrapper">
				<Input
					className="form__input"
					type="password" />
				<label className="form__label">Пароль</label>
			</div>
		</Form>
	);
}