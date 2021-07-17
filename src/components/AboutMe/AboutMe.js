import React from 'react';
import { Heading } from '../Heading/Heading';
import './AboutMe.css';
import image from '../../images/about_me.jpg'

export const AboutMe = () => {
	return (
		<section className="about-me">
			<Heading
				name="Студент"
				id="about-me" />
			<div className="about-me__wrapper">
				<h2 className="about-me__title">Арина</h2>
				<p className="about-me__subtitle">Веб-разработчик, 24 года</p>
				<p className="about-me__text">Я родилась и живу в городе Москве. В свободное время люблю вязать спицами шапки, шарфы, свитера для себя и близких. Нравится активный отдых, прогулки, настольные игры, но иногда люблю потюленить за сериальчиком и горячим кофе.</p>
				<div className="about-me__links">
					<a className="about-me__link" rel="noreferrer" target="_blank" href="https://www.codewars.com/users/Arinushka">Codewars</a>
					<a className="about-me__link" rel="noreferrer" target="_blank" href="https://github.com/Arinushka">Github</a>
				</div>
				<img className="about-me__photo" src={image} alt="Моя фотография" />
			</div>
		</section>
	);
}