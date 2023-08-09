import image1 from "../assets/Decoration.svg";

function HomeWhoWeHelp() {
  return (
    <section className="help container" id="WhoWeHelp">
      <div className="help__leading">
        <h2>Komu pomagamy?</h2>
        <img src={image1} alt="decoration" className="decoration__line" />
        <div className="help__leading--buttons">
          <button type="button" className="button__medium">
            Fundacjom
          </button>
          <button type="button" className="button__medium">
            Organizacjom pozarządowym
          </button>
          <button type="button" className="button__medium">
            Lokalnym zbiórkom
          </button>
        </div>
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </div>
      <div className="help__list">
        <div className="help__list--item">
          <div className="help__list--item--left">
            <h3>Fundacja “Dbam o Zdrowie”</h3>
            <p>
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </p>
          </div>
          <div className="help__list--item--right">
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
        </div>
        <div className="help__list--item">
          <div className="help__list--item--left">
            <h3>Fundacja “Dla dzieci”</h3>
            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          </div>
          <div className="help__list--item--right">
            <p>ubrania, meble, zabawki</p>
          </div>
        </div>
        <div className="help__list--item">
          <div className="help__list--item--left">
            <h3>Fundacja “Bez domu”</h3>
            <p>
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>
          <div className="help__list--item--right">
            <p>ubrania, jedzenie, ciepłe koce</p>
          </div>
        </div>
      </div>
      <div className="help__pagination">
        <a href="#">1</a>
        <a href="#">2</a>
      </div>
    </section>
  );
}
export default HomeWhoWeHelp;
