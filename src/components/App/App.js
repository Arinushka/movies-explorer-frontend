import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./App.css";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <Movies/>
      <Footer />
    </div>
  );
}