import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import {
	MAX_SIZE, MIDDLE_SIZE_START, MOVIES_COUNT_MAX, MOVIES_COUNT_MIDDLE,
	MOVIES_COUNT_LOW, MOVIES_COUNT_MAX_STEP, MOVIES_COUNT_MIDDLE_STEP
} from "../../utils/constans";

export const MoviesCardList = (props) => {

	const [count, setCount] = React.useState(0);
  const buttonClassName = `card-list__button ${count >= props.movies.length && "card-list__button_hidden"}`

  function handleMoviesCount(width) {
    if(props.component === 'savedMovies') {
      return {count: props.movies.length}
    }
    if (width >= MAX_SIZE) {
      return { count: MOVIES_COUNT_MAX, countStep: MOVIES_COUNT_MAX_STEP }
    } else if (width >= MIDDLE_SIZE_START && width < MAX_SIZE) {
      return { count: MOVIES_COUNT_MIDDLE, countStep: MOVIES_COUNT_MIDDLE_STEP }
    } else {
      return { count: MOVIES_COUNT_LOW, countStep: MOVIES_COUNT_MIDDLE_STEP }
    }
  }

  function handleSetCount({count}) {
    setCount(count)
  }

  function getWidth () {
    const width = window.innerWidth
    handleSetCount(handleMoviesCount(width))
  }

  function handleUpdateWidth () {
    setTimeout(getWidth,1000)
  }

  function handleButton () {
    const width = window.innerWidth
    const {countStep} = handleMoviesCount(width)
    setCount((state) => state + countStep)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleUpdateWidth)
    return () => {
      window.removeEventListener("resize", handleUpdateWidth)
    }
  })

  React.useEffect(() => {
    const width = window.innerWidth;
    handleSetCount(handleMoviesCount(width))
  }, [])

	return (
		<section className="card-list">
			<div className="card-list__wrapper">
				{props.movies.slice(0, count).map((movie) => (
					<MoviesCard
						key={movie.id}
						movie={movie}
						onHandleMovieButton={props.onHandleMovieButton}
						savedMovies={props.savedMovies}
						component={props.component} />
				))}
			</div>
			<button className={buttonClassName} onClick={handleButton}>Еще</button>
		</section>
	);
}