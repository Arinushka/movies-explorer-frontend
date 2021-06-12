import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
			<div className="footer__wrapper">
				<p className="footer__author">&copy; 2021</p>
				<nav>
					<ul className="footer__links">
						<li className="footer__wrapper-link"><a href="#" className="footer__link">Яндекс.Практикум</a></li>
						<li className="footer__wrapper-link"><a href="#" className="footer__link">Github</a></li>
						<li className="footer__wrapper-link"><a href="#" className="footer__link">Facebook</a></li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}