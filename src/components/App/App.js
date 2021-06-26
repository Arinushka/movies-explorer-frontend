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
import * as auth from "../../utils/auth.js";
import { ProtectedRoute } from "../ProtectedRoute";

function App(props) {

  const [isAuth, setIsAuth] = React.useState(false);
  const [isSavedMovies, setIsSavedMovies] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);

  function handleLink(boolean) {
    setIsAuth(boolean);
  }


  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        props.history.push('/signin');
      })
      .catch((err) => {
        console.log(err)
      }
      );
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
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

  return (
    <div className="app">
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
          isAuth={isAuth} />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onIsHiddenFooter={setIsHiddenFooter}
          isAuth={isAuth} />
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
    </div>
  );
}

export default withRouter(App);