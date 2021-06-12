import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Tech } from "../Tech/Tech";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Tech/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

