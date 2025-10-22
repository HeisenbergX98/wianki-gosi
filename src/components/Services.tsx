import "../css/services.css";
import Wianki1 from "../assets/wianki.png";
import Wianki2 from "../assets/wianki2.png";
import Wianki3 from "../assets/wianki3.png";

function Services() {
  return (
    <div className="services-container" id="services">
      <div>
        <h1>Usługi</h1>
      </div>
      <div className="services">
        <div className="service-box">
          <h3>Wianki Sezonowe i Świąteczne</h3>
          <p>
            Gotowe kolekcje na Boże Narodzenie, Wielkanoc, Jesień i inne okazje.
            Idealne do natychmiastowej dekoracji.
          </p>
          <img src={Wianki1} alt="Wianki" />
        </div>
        <div className="service-box">
          <h3>Spersonalizowane Projekty</h3>
          <p>
            Stwórz swój wymarzony wianek od podstaw. Wybierasz materiały, kolory
            i rozmiar, a my go wykonujemy.
          </p>
          <img src={Wianki2} alt="Wianki" />
        </div>
        <div className="service-box">
          <h3>Warsztaty Kreatywne</h3>
          <p>
            Naucz się sztuki tworzenia wianków pod okiem Gosi! Świetny pomysł na
            spotkanie grupowe i relaksujące zajęcia.
          </p>
          <img src={Wianki3} alt="Wianki" />
        </div>
      </div>
    </div>
  );
}

export default Services;
