import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Error404 } from "../Error404/Error404";
import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import * as mainApi from "../../utils/MainApi.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import * as search from "../../utils/search.js";
import { ProtectedRoute } from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App(props) {

  const [isAuth, setIsAuth] = React.useState(false);
  const [isSavedMovies, setIsSavedMovies] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "", id: "" });
  const [movies, setMovies] = React.useState([]);
  const [isDurationMovies, setIsDurationMovies] = React.useState(false)

  function handleLink(boolean) {
    setIsAuth(boolean);
  }


  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then((res) => {
        props.history.push('/signin');
      })
      .catch((err) => {
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
      localStorage.removeItem('auth');
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getFilms() {
    if(!localStorage.getItem('movies')){
    moviesApi.getFilms()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  function findFilms(keyValue) {
    getFilms();
    search.handleSearch(keyValue, JSON.parse(localStorage.getItem('movies')), isDurationMovies, setMovies);
  }


  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res.data)
          console.log(res.data)
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
            isAuth={isAuth} />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isSavedMovies={isSavedMovies}
            isAuth={isAuth} 
            onGetFilms={findFilms}
            movies={movies}
            onIsDuration={setIsDurationMovies}
            isDuration={isDurationMovies}/>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onIsHiddenFooter={setIsHiddenFooter}
            isAuth={isAuth}
            onSignOut={handleSignOut} 
            onUpdateUser={handleUpdateUser}/>
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
    </div>
  );
}

export default withRouter(App);