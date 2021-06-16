import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export const Login = (props) => {

	
	return (
		<Form
			title="Рады видеть!"
			typeLink="Регистрация"
			to="/signup"
			typeButton="Войти"
			check="Еще не зарегистрированы?"
			onIsHidden={props.onIsHidden}>
			<div className="form__wrapper">
				<Input
					className="form__input"
					type="email" />
				<label className="form__label">Email</label>
			</div>
			<div className="form__wrapper form__wrapper_for_login">
				<Input
					className="form__input"
					type="password" />
				<label className="form__label">Пароль</label>
			</div>

		</Form>
	);
}