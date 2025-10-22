import "../css/topsection.css";
import GosiaWianki from "../assets/GWianki.png";

function TopSection() {
  return (
    <div className="top-section-container" id="home">
      <div className="text-box">
        <h1>Najlepszy Wianek w Mieście</h1>
        <p>
          Zapraszamy na Wianki Gosi! Zamów spersonalizowaną ozdobę dla swojej
          rodziny, abyście mogli cieszyć się wyjątkowym Bożym Narodzeniem.
        </p>
        <button>Zamów Teraz</button>
      </div>
      <div className="img-top-section-box">
        <img src={GosiaWianki} alt="GosiaPhoto" />
      </div>
    </div>
  );
}

export default TopSection;
