import image1 from "../assets/Decoration.svg";
import React from "react";
import { useState } from "react";

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
        <p>tekst wyświetlany w zależności od naciśniętego buttona</p>
      </div>
      <div className="help__list">
        <div className="help__list--item">
          <div className="help__list--item--left">
            <h3>nazwa</h3>
            <p>misja</p>
          </div>
          <div className="help__list--item--right">
            <p>przedmioty</p>
          </div>
        </div>
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
