import React from "react";
import "../styles/home.css";

import fundoHome from "../assets/fundoHome.png";
import imgFisica from "../assets/peso.png";
import imgMental from "../assets/saude-mental.png";
import imgAvaliacao from "../assets/exame-de-saude.png";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${fundoHome})` }}>
    

      <div className="card-container">
        <div className="card card-fisica">
          <img src={imgFisica} alt="Saúde Física" />
          <h2>Saúde Física</h2>
          <p>
            Cuide do seu corpo com alimentação balanceada, exercícios e sono de
            qualidade.
          </p>
        </div>

        <div className="card card-mental">
          <img src={imgMental} alt="Saúde Mental" />
          <h2>Saúde Mental</h2>
          <p>
            Mantenha sua mente saudável com equilíbrio emocional e controle do
            estresse.
          </p>
        </div>

        <div className="card card-avaliacao">
          <img src={imgAvaliacao} alt="Avaliação de Saúde" />
          <h2>Avaliação de Saúde</h2>
          <p>
            Responda perguntas simples para entender melhor como anda sua
            saúde geral.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
