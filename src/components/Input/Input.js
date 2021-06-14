import React from 'react';
import './Input.css';

export const Input = (props) => {
	return (
		<div className="input">
			<input className={props.className} type={props.type}></input>
			<span className="input__error"></span>
		</div>
	);
}