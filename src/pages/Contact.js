import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <ContactForm />
        <section className="information">
          <div>
            <i className="fas fa-envelope"></i>
            <a href="mailto:abidzora88@gmail.com">abidzora88@gmail.com</a>
          </div>

          <div>
            <i className="fas fa-phone"></i>
            <a href="tel:0033635794348">0635794348</a>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
