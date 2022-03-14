import React from "react";
import { useState } from "react";
// import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      return false;
    }
  };
  const failMessage = (message) => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = message;
    formMess.style.background = "rgb(233 177 177)";
    formMess.style.opacity = "1";

    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML =
      "Message envoyé ! Je vous recontacterai dès que possible.";
    formMess.style.background = "#ae8f63";
    formMess.style.opacity = "1";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");

    setTimeout(() => {
      formMess.style.opacity = "0";
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEmail() && message) {
      sendFeedback("template_ud0trae", {
        name,
        email,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis *");
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_yrhcoua", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        failMessage("Une erreur s'est produite, veuillez réessayer.");
      });
  };

  return (
    <form className="contact-form">
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;
