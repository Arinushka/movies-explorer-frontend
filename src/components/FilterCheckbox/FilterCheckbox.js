import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = (props) => {

	function handleCheck() {
		props.onIsDuration(!props.isDuration)
	}

	return (
		<label className="checkbox">
			<input onChange={handleCheck} checked={props.isDuration} className="checkbox__input" type="checkbox" />
			<span className="checkbox__switch"></span>
		</label>
	);
}