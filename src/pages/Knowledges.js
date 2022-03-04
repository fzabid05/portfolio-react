import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsPatchCheck } from "react-icons/bs";
const Knowledges = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Ma page de Compétences</h1>
        <section className="knowledges">
          <div className="knowledge">
            <h3>Langages</h3>
            <div className="knowledgeContent">
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>Css</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>JavaScript</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>Php</h4>
                  <small className="textSmall">intermédiaire</small>
                </div>
              </article>
            </div>
          </div>

          <div className="knowledge">
            <h3>Frameworks et Bibliothèques</h3>
            <div className="knowledgeContent">
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>React</h4>
                  <small className="textSmall">intermédiaire</small>
                </div>
              </article>
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>Sass</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
            </div>
          </div>

          <div className="knowledge">
            <h3>Autres Compétences</h3>
            <div className="knowledgeContent">
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>SEO</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
              <article className="knowledgeDetails">
                <BsPatchCheck />
                <div>
                  <h4>WordPress</h4>
                  <small className="textSmall">Avancée</small>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Knowledges;
