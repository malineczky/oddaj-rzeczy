import image1 from "../assets/Decoration.svg";
import dataFoundation from "./data_file/dataFoundation";
import dataCollection from "./data_file/dataCollection";
import dataOrganization from "./data_file/dataOrganization";
import { useState } from "react";

function HomeWhoWeHelp() {
  const [selectedContent, setSelectedContent] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (content, buttonLabel) => {
    setSelectedContent(content);
    setSelectedButton(buttonLabel);
  };

  return (
    <section className="help container" id="WhoWeHelp">
      <div className="help__leading">
        <h2>Komu pomagamy?</h2>
        <img src={image1} alt="decoration" className="decoration__line" />
        <div className="help__leading--buttons">
          <button
            type="button"
            className="button__medium"
            onClick={() => handleButtonClick(dataFoundation, "Fundacjom")}
          >
            Fundacjom
          </button>
          <button
            type="button"
            className="button__medium"
            onClick={() =>
              handleButtonClick(dataOrganization, "Organizacjom pozarządowym")
            }
          >
            Organizacjom pozarządowym
          </button>
          <button
            type="button"
            className="button__medium"
            onClick={() =>
              handleButtonClick(dataCollection, "Lokalnym zbiórkom")
            }
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <p>tekst wyświetlany w zależności od naciśniętego buttona</p>
      </div>
      <div className="help__list">
        {selectedContent.map((item) => (
          <div className="help__list--item" key={item.id}>
            <div className="help__list--item--left">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="help__list--item--right">
              <p>{item.things}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="help__pagination">
        <a href="#" className="help__pagination--number">
          1
        </a>
        <a href="#" className="help__pagination--number">
          2
        </a>
      </div>
    </section>
  );
}
export default HomeWhoWeHelp;
