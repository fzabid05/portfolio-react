import React from "react";
import { FiDownload } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main className="home">
        <h1>Fatima-Zohra ABID</h1>
        <h2>Développeuse Web</h2>
        <div>
          <spam>
            <FiDownload />
          </spam>
          <spam> CV</spam>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
