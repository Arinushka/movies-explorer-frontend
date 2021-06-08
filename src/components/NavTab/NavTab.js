import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (
		<nav className="navtab">
			<button className="navtab__element">О проекте</button>
			<button className="navtab__element">Технологии</button>
			<button className="navtab__element">Студент</button>
		</nav>
	);
}