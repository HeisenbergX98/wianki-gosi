import "../css/header.css";
import { useState } from "react";
import LogoText from "../assets/logoTextWiankiGosi.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header-container">
      <div className="img-box">
        <img src={LogoText} alt="Logo Wianki Gosi" />
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
      </div>
      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Strona Główna</a>
          </li>
          <li>
            <a href="#services">Usługi</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
      <div className="call-container">
        <button>Call 123 456 789</button>
      </div>
    </div>
  );
}

export default Header;
