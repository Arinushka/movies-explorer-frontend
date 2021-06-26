import React from 'react';
import './Input.css';

export const Input = (props) => {

	function handleChange(e) {
    props.onChange(e);
  }

	return (
		<div className="input">
			<input onChange={handleChange} value={props.value} className={props.className} type={props.type} minLength={props.minLength} maxLength={props.maxLength} required></input>
			<span className="input__error"></span>
		</div>
	);
}