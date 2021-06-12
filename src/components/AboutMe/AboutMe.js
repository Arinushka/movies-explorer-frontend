import React from 'react';
import { Heading } from '../Heading/Heading';
import './AboutMe.css';
import image from '../../images/about-me__photo.png'

export const AboutMe = () => {
	return (
		<section className="about-me">
			<Heading name="Студент"/>
			<div className="about-me__wrapper">
			<h2 className="about-me__title">Арина</h2>
			<p className="about-me__subtitle">Фронтенд-разработчик, 24 года</p>
			<p className="about-me__text">Я родилась и живу в городе Москве, закончила курсы Я.Практикума. У меня есть кошка Муся. Я люблю слушать музыку и нетфликс. Я меняю сферу деятельности и сейчас нахожусь в поиске работы.</p>
			<div className="about-me__links">
				<a className="about-me__link" href="#">Вконтакте</a>
				<a className="about-me__link" href="#">Github</a>
			</div>
			<img className="about-me__photo" src={image} alt="Моя фотография"/>
			</div>
		</section>
	);
}