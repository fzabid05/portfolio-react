import React from "react";

const ContactInfo = () => {
  return (
    <section className="information">
      <article>
        <i className="fas fa-envelope"></i>
        <h4>Email</h4>
        <a href="mailto:abidzora88@gmail.com">abidzora88@gmail.com</a>
      </article>

      <article>
        <i className="fas fa-phone"></i>
        <h4>Télephone</h4>
        <a href="tel:0033635794348">0635794348</a>
      </article>
    </section>
  );
};

export default ContactInfo;
