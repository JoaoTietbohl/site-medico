import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import imgFisica from "../assets/peso.png";
import imgMental from "../assets/saude-mental.png";
import imgAvaliacao from "../assets/exame-de-saude.png";

const Home = () => {
  useEffect(() => {
   
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.id = "bootstrap-css";
    document.head.appendChild(link);

    return () => {

      const existingLink = document.getElementById("bootstrap-css");
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return (
 <div className="cards-wrapper">
  <Link to="/saudefisica" className="card-home bg-fisica text-decoration-none text-white">
    <img src={imgFisica} alt="Saúde Física" className="mb-3 card-img" />
    <h2>Saúde Física</h2>
  </Link>

  <Link to="/saudemental" className="card-home bg-mental text-decoration-none text-white">
    <img src={imgMental} alt="Saúde Mental" className="mb-3 card-img" />
    <h2>Saúde Mental</h2>
  </Link>

  <Link to="/avaliacao" className="card-home bg-avaliacao text-decoration-none text-white">
    <img src={imgAvaliacao} alt="Avaliação de Saúde" className="mb-3 card-img" />
    <h2>Avaliação de Saúde</h2>
  </Link>
</div>

);
}
export default Home;
