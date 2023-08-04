import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <>
      <div className="header">
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
              <img src="" alt="decoration" />
              <div className="opening__buttons">
                <Link to={`/logowanie`}>ODDAJ RZECZY</Link>
                <Link to={`/logowanie`}>ZORGANIZUJ ZBIÓRKĘ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
