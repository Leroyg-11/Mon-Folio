import React, { useState } from "react";
import useWindowSize from "../CustomHook";
import "./SCSS/Contact.scss";
import emailjs from "@emailjs/browser";
import PopupContact from "../components/Contact/PopupContact.jsx";

const Contact = () => {
  const windowSize = useWindowSize();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    emailjs
      .sendForm(
        "service_r012cd6",
        "template_j4ow6n3",
        form,
        "Lon5Jzk7nxbfjrV8O"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);

          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main
      className={` nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      {" "}
      <h1 className="title">Contactez moi</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            required
            className="nes-input is-dark"
            name="user_name"
            type="text"
            id="name"
          />

          <label htmlFor="email">Email</label>
          <input
            required
            className="nes-input is-dark"
            name="user_email"
            type="email"
            id="email"
          />

          <label htmlFor="phone">Téléphone</label>
          <input
            required
            className="nes-input is-dark"
            name="user_phone"
            type="number"
            id="phone"
          />

          <label htmlFor="message">Message</label>
          <textarea
            required
            className="nes-input is-dark"
            name="message"
            type="text"
            id="message"
          />
          <button type="submit" className="nes-btn">
            Envoyer
          </button>
        </form>
      </div>
      <PopupContact isOpen={showPopup} onClose={closePopup} />
    </main>
  );
};

export default Contact;
