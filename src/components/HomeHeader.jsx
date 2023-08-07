import { Link } from "react-router-dom";
import image1 from "../assets/Decoration.svg";
import image2 from "../assets/Home-Hero-Image.jpg";

function HomeHeader() {
  return (
    <header className="header">
      <img src={image2} alt="pudło z rzeczami" className="header__background" />
      <div className="header__content container">
        <div className="header__login">
          <Link to={`/logowanie`} className="header__login--button">
            Zaloguj się
          </Link>
          <Link to={`/rejestracja`} className="header__login--button">
            Załóż konto
          </Link>
        </div>
        <nav className="nav container">
          <ul className="nav__list">
            <li className="nav__list--item">
              <a href="#">Start</a>
            </li>
            <li className="nav__list--item">
              <a href="#">O co chodzi?</a>
            </li>
            <li className="nav__list--item">
              <a href="#">O nas</a>
            </li>
            <li className="nav__list--item">
              <a href="#">Fundacja i organizacje</a>
            </li>
            <li className="nav__list--item">
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="opening">
          <div className="opening__content">
            <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img
              src={image1}
              alt="decoration"
              className="opening__decoration"
            />
            <div className="opening__buttons">
              <Link to={`/logowanie`}>ODDAJ RZECZY</Link>
              <Link to={`/logowanie`}>ZORGANIZUJ ZBIÓRKĘ</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
