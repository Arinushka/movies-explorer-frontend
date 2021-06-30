import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Error404 } from "../Error404/Error404";
import InfoToolTip  from '../InfoToolTip/InfoToolTip';
import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import * as mainApi from "../../utils/MainApi.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import * as search from "../../utils/search.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App(props) {

  const [isAuth, setIsAuth] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "", id: "" });
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);
  const [isOpenFail, setIsOpenFail] = React.useState(false);

function modalClose(){
  setIsOpenSuccess(false)
  setIsOpenFail(false)
}

  function handleLink(boolean) {
    setIsAuth(boolean);
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then((res) => {
        props.history.push('/signin');
      })
      .catch((err) => {
        setIsOpenFail(true)
        console.log(err)
      }
      );
  }

  function handleLogin(email, password) {
    mainApi.authorize(email, password)
      .then((res) => {
        setIsAuth(true)
        props.history.push('/movies');
        localStorage.setItem('auth', true);
      })
      .catch((err) => {
        setIsOpenFail(true)
        console.log(err)
      }
      );
  }

  function handleTokenCheck() {
    if (localStorage.getItem('auth')) {
      mainApi.checkToken()
        .then((res) => {
          if (res) {
            setIsAuth(true);
            props.history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

  function handleSignOut() {
    mainApi.signOut()
      .then((res) => {
        props.history.push('/signin');
        setIsAuth(false);
        localStorage.removeItem('auth', 'movies', 'savedMovies');
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
      })
      .catch((err) => {
        console.log(err)
      }
      );
  }

  function handleUpdateUser(data) {
    mainApi.setUserInfo(data.name, data.email)
      .then((res) => {
        setCurrentUser(res.data);
        setIsOpenSuccess(true);
      })
      .catch((err) => {
        setIsOpenFail(true)
        console.log(err);
      });
  }

  function getFilms(keyValue) {
    moviesApi.getFilms()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('movies'))))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function findFilms(keyValue) {
    handleSavedMovies()
    if(!localStorage.getItem('movies')) {
      getFilms(keyValue);
    } else {
      setMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('movies'))))
    }
  }

  function updateToSaveMovies(id) {
    const films = JSON.parse(localStorage.getItem('savedMovies'));
    localStorage.setItem('savedMovies', JSON.stringify(films.filter((film)=>{return film.movieId !== id })))
  }

  function findSavedMovies(keyValue) {
    setSavedMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('savedMovies'))))
  }

  function findByDuration(setFilms, films) {
    setFilms(search.searchMoviesByDuration(films))
  }

  function handleSavedMovies() {
    mainApi.getFilms()
      .then((res) => {
        localStorage.setItem('savedMovies', JSON.stringify(res))
        console.log(res)
        setSavedMovies(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteSavedMovie(movie) {
    mainApi.movieDelete(movie.movieId)
      .then(() => {
        setSavedMovies((movies) => movies.filter((film) => film.movieId !== movie.movieId))
        updateToSaveMovies(movie.movieId)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlesavedMovie(movie) {
    const id = movie.id || movie.movieId;
    console.log(movie)
    const isLiked = savedMovies.some(item => item.movieId === id && item.owner === currentUser.id);
    console.log(isLiked)
    mainApi.changeSaveMovieStatus(movie, isLiked)
      .then((newMovie) => {
        handleSavedMovies()
        setMovies((films) =>
          films.map((film) => (
            film.id === movie.movieId ? newMovie : film))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res)
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuth]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        {isHidden && <Header isAuth={isAuth} />}
        <Switch>
          <Route exact path="/">
            <Main setAuth={handleLink} />
          </Route>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isAuth={isAuth}
            savedMovies={savedMovies}
            onHandleMovies={handleSavedMovies}
            onHandleMovieButton={handleDeleteSavedMovie}
            onGetFilms={findSavedMovies}
            onFindByDuration={findByDuration}
            onSetMovies={setSavedMovies} />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isAuth={isAuth}
            onGetFilms={findFilms}
            movies={movies}
            onSetMovies={setMovies}
            onHandleMovieButton={handlesavedMovie}
            savedMovies={savedMovies}
            onFindByDuration={findByDuration} />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onIsHiddenFooter={setIsHiddenFooter}
            isAuth={isAuth}
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser} />
          <Route path="/signup">
            <Register
              onIsHidden={setIsHidden}
              onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login
              onIsHidden={setIsHidden}
              onLogin={handleLogin} />
          </Route>
          <Route path="*">
            <Error404 onIsHidden={setIsHidden} />
          </Route>
        </Switch>
        {isHidden && isHiddenFooter && <Footer />}
      </CurrentUserContext.Provider>
      <InfoToolTip
      title="Редактирование профиля прошло успешно"
      isOpen={isOpenSuccess}
      onClose={modalClose}/>
      <InfoToolTip
      title="Произошла ошибка"
      isOpen={isOpenFail}
      onClose={modalClose}/>
    </div>
  );
}

export default withRouter(App);