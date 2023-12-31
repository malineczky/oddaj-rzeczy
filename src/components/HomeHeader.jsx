import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import image1 from "../assets/Decoration.svg";
import image2 from "../assets/Home-Hero-Image.jpg";

function HomeHeader() {
  return (
    <header className="header">
      <img src={image2} alt="pudło z rzeczami" className="header__background" />
      <div className="header__content container">
        <div className="header__login">
          <Link to="/logowanie" className="header__login--button">
            Zaloguj się
          </Link>
          <Link to="/rejestracja" className="header__login--button">
            Załóż konto
          </Link>
        </div>
        <nav className="nav container">
          <ul className="nav__list">
            <li className="nav__list--item">
              <a href="#">Start</a>
            </li>
            <li className="nav__list--item">
              <ScrollLink to="steps" smooth={true} duration={500}>
                O co chodzi?
              </ScrollLink>
            </li>
            <li className="nav__list--item">
              <ScrollLink to="about" smooth={true} duration={500}>
                O nas
              </ScrollLink>
            </li>
            <li className="nav__list--item">
              <ScrollLink to="WhoWeHelp" smooth={true} duration={500}>
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li className="nav__list--item">
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="opening">
          <div className="opening__content">
            <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={image1} alt="decoration" className="decoration__line" />
            <div className="opening__buttons link__button">
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
