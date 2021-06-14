import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./App.css";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Form } from "../Form/Form";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Error404 } from "../Error404/Error404";

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      {/* <Movies/> */}
      {/* <SavedMovies/> */}
      {/* <Profile/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Error404/>
      {/* <Footer />
       */}
    </div>
  );
}