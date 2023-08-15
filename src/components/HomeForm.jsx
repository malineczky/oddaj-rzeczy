import image1 from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

function HomeForm() {
  return (
    <section className="form container">
      <div className="form__container">
        <h2>Skontaktuj się z nami</h2>
        <img src={image1} alt="decoration" className="decoration__line" />
        <div className="form__inputs">
          <div className="form__inputs--input">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__inputs--input">
            <label htmlFor="email">Wpisz swój email</label>
            <input type="email" className="form__input" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Wpisz swoją wiadomość</label>
          <textarea className="form__textarea"></textarea>
        </div>
        <button type="submit" className="form__submit">
          Wyślij
        </button>
      </div>
      <div className="footer">
        <p>&copy; Copyright by Coders Lab</p>
        <div className="footer__icons">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeForm;
