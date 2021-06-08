import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Tech } from "../Tech/Tech";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Tech></Tech>
    </div>
  );
}

