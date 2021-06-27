export function searchMovies (keyValue, movies) {
  return movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyValue.toLowerCase())
  })
}

export function searchMoviesByDuration (keyValue, movies) {
  return movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyValue.toLowerCase()) && movie.duration <= 40
  })
}

export function handleSearch (keyValue, movies, isDuration, moviesHandler) {
  if(isDuration) {
    moviesHandler(searchMoviesByDuration(keyValue, movies))
  } else {
    moviesHandler(searchMovies(keyValue, movies))
  }
}