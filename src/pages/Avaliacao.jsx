import React, { useState } from 'react';
import '../styles/Avaliacao.css';
import ImcCalculator from '../components/ImcCalculator';
import DietaModal from '../components/DietaModal';
import avaliacaoBanner from '../assets/avaliacao_fisica_familia.png';

export default function Avaliacao() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="avaliacao-page">
      <div className="avaliacao-hero">
        <img src={avaliacaoBanner} alt="Família saudável" className="avaliacao-banner" />
        <div className="avaliacao-title">
          <h1>Avaliação Física</h1>
          <p>Cálculo de IMC e orientação de dieta para seu bem-estar!</p>
        </div>
      </div>

      <div className="avaliacao-conteudo">
        <h2>Vamos começar com o básico: o que é IMC?</h2>
        <p>
          O IMC é uma ferramenta que ajuda você a ter uma ideia geral sobre o seu peso em relação à sua altura.
          <strong> Ele é usado principalmente para identificar se você está dentro de uma faixa considerada saudável.</strong>
        </p>

        <p>
          <strong>Importante lembrar:</strong> o IMC avalia basicamente o peso, <strong>mas não reflete a composição corporal real.</strong> 
          Um atleta ou fisiculturista pode ter um IMC alto por conta da massa muscular, não por estar acima do peso.
        </p>

        <p>
          Se você é uma pessoa comum, com responsabilidades diárias e uma rotina corrida, o IMC pode ser um ponto de partida — e não um julgamento!
        </p>

        <p>
          <strong>Não se desanime com o resultado!</strong> Não se compare com atletas, influenciadores ou pessoas que vivem para o corpo. 
          Cada corpo tem sua história, seu tempo, e sua meta.
        </p>

        <h3>Vamos calcular seu IMC agora mesmo?</h3>
        <p>Use a ferramenta abaixo e dê o primeiro passo em direção a mais qualidade de vida!</p>
        

        <ImcCalculator />

        
        <button className="dieta-button" onClick={() => setModalAberto(true)}>
          📋 Ver sugestão de dieta
        </button>

        <DietaModal isOpen={modalAberto} onClose={() => setModalAberto(false)} />
          
      </div>
    </div>
  );
}
