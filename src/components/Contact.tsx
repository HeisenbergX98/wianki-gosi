import { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      return alert("Wszystkie pola muszą zostać wypełnione");
    }
    alert("Wiadomość wysłana!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const changeName = (event: { target: { value: any } }) => {
    setName(event.target.value);
  };
  const changeEmail = (event: { target: { value: any } }) => {
    setEmail(event.target.value);
  };
  const changeMessage = (event: { target: { value: any } }) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact-section" id="contact">
      <h1>Kontakt</h1>
      <div className="contact-container">
        <div className="contact-box">
          <div className="form-container">
            <form action="">
              <div className="input-box">
                <i className="bx  bxs-stamp"></i>
                <input
                  type="text"
                  placeholder="Imię"
                  value={name}
                  onChange={changeName}
                  required
                />
              </div>
              <div className="input-box">
                <i className="bx bxs-envelope-open" />
                <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={changeEmail}
                  required
                />
              </div>
              <textarea
                placeholder="Treść"
                value={message}
                onChange={changeMessage}
                required
              ></textarea>
              <button onClick={handleSubmit}>Wyślij wiadomość</button>
            </form>
          </div>
        </div>
        <div className="location-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.8543739109381!2d17.02603862399902!3d54.46456889472798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe10a79e251a93%3A0x30d2f5792b8d2b5c!2sRatusz%20w%20S%C5%82upsku!5e1!3m2!1sen!2spl!4v1761056509253!5m2!1sen!2spl"
            className="map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Embedded Google Map"
          ></iframe>
        </div>
      </div>
      <div className="call-container">
        <h1>Zarezerwuj wizytę dzwoniąc pod numer: 123 456 789</h1>
      </div>
    </div>
  );
}

export default Contact;
