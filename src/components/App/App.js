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
import { Route, Switch } from 'react-router-dom';

export const App = () => {

  const [isAuth, setIsAuth] = React.useState(true);
  const [isSavedMovies, setIsSavedMovies] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);

  function handleLink(boolean) {
    setIsAuth(boolean);
  }


  return (
    <div className="app">
{isHidden && <Header isAuth={isAuth} />}
      <Switch>
        <Route exact path="/">
          <Main setAuth={handleLink}/>
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies isSavedMovies={isSavedMovies}/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register onIsHidden={setIsHidden} />
        </Route>
        <Route path="/signin">
          <Login onIsHidden={setIsHidden} />
        </Route>
        <Route path="/error">
          <Error404 />
        </Route>
      </Switch>
     {isHidden && <Footer />}
    </div>
  );
}