import React from 'react';
import './Portfolio.css';
import image from '../../images/portfolio__image.svg';

export const Portfolio = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<nav>
				<ul className="portfolio__group">
					<li className="portfolio__item">
						<p className="portfolio__heading">Статичный сайт</p>
						<a className="portfolio__link" href="#"><img className="portfolio__image" src={image} alt="Ссылка"/></a>
					</li>
					<li className="portfolio__item">
						<p className="portfolio__heading">Адаптивный сайт</p>
						<a className="portfolio__link" href="#"><img className="portfolio__image" src={image} alt="Ссылка"/></a>
					</li>
					<li className="portfolio__item">
						<p className="portfolio__heading">Одностраничное приложение</p>
						<a className="portfolio__link" href="#"><img className="portfolio__image" src={image} alt="Ссылка"/></a>
					</li>
				</ul>
			</nav>
		</section>
	);
}