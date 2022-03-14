import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
