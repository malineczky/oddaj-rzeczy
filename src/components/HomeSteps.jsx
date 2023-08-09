import loup from "../assets/Icon-3.svg";
import bag from "../assets/Icon-2.svg";
import tshirt from "../assets/Icon-1.svg";
import arrows from "../assets/Icon-4.svg";
import image1 from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

function HomeSteps() {
  return (
    <section className="steps">
      <div className="steps__title">
        <h2>Wystarczą 4 proste kroki</h2>
        <img src={image1} alt="dekoracja" className="decoration__line" />
      </div>
      <div className="steps__steps">
        <div className="steps__box">
          <img src={tshirt} alt="ikona ubrania" />
          <h3>Wybierz rzeczy</h3>
          <p className="steps__box--desc">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps__box">
          <img src={bag} alt="ikona paczki" />
          <h3>Spakuj je</h3>
          <p className="steps__box--desc">skorzystaj z worków na śmieci</p>
        </div>
        <div className="steps__box">
          <img src={loup} alt="ikona lupy" />
          <h3>Zdecyduj komu chcesz pomóc</h3>
          <p className="steps__box--desc">wybierz zaufane miejsce</p>
        </div>
        <div className="steps__box">
          <img src={arrows} alt="ikona strzałek" />
          <h3>Zamów kurieray</h3>
          <p className="steps__box--desc">
            kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </div>
      <div className="steps__button link__button">
        <Link to={`/logowanie`}>ODDAJ RZECZY</Link>
      </div>
    </section>
  );
}

export default HomeSteps;
