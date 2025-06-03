import React from "react";
import { Link } from "react-router-dom"; // <-- Importa Link
import "../styles/home.css";

import fundoHome from "../assets/fundoHome.png";
import imgFisica from "../assets/peso.png";
import imgMental from "../assets/saude-mental.png";
import imgAvaliacao from "../assets/exame-de-saude.png";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${fundoHome})` }}>
      <div className="card-container">

        {/* Card clicável para Saúde Física */}
        <Link to="/saudefisica" className="card card-fisica" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={imgFisica} alt="Saúde Física" />
          <h2>Saúde Física</h2>
        </Link>

        <div className="card card-mental">
          <img src={imgMental} alt="Saúde Mental" />
          <h2>Saúde Mental</h2>
        </div>

        {/* Card clicável para Avaliação */}
        <Link to="/avaliacao" className="card card-avaliacao" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={imgAvaliacao} alt="Avaliação de Saúde" />
          <h2>Avaliação de Saúde</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
