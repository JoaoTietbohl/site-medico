
import './CardsFisico.css'
import React, { useState } from 'react';


import futebol from "../assets/futebol.png";
import caminhando from "../assets/caminhando.png";
import corrida from "../assets/corrida.png";
import musculacao from "../assets/musculacao.png";
import ciclista from "../assets/ciclista.png";
import natacao from "../assets/natacao.png";
import trampolim from "../assets/trampolim.png"; 

const atividades = [
  {
    nome: "Futebol",
    imagem: futebol,
    caloriasPorHora: 500,
    descricao:
      "O futebol é uma atividade aeróbica completa, que envolve corrida, aceleração e explosão muscular. Ideal para quem gosta de esporte coletivo e quer queimar calorias se divertindo.",
  },
  {
    nome: "Caminhada (5 km)",
    imagem: caminhando,
    caloriasPorHora: 250,
    descricao:
      "Caminhar é uma atividade acessível e segura, indicada para iniciantes. A média usada aqui é para uma caminhada de 5 km em ritmo moderado.",
  },
  {
    nome: "Corrida (10 km)",
    imagem: corrida,
    caloriasPorHora: 600,
    descricao:
      "A corrida de 10 km é uma atividade intensa que trabalha todo o corpo e o sistema cardiovascular. Aqui usamos como base uma corrida de 10 km em ritmo constante.",
  },
  {
    nome: "Musculação (moderado)",
    imagem: musculacao,
    caloriasPorHora: 350,
    descricao:
      "A musculação em ritmo moderado fortalece a musculatura e ajuda na composição corporal. Os valores aqui são para uma sessão contínua de treino moderado.",
  },
  {
    nome: "Ciclismo (10 km)",
    imagem: ciclista,
    caloriasPorHora: 400,
    descricao:
      "O ciclismo é excelente para fortalecer pernas e melhorar o fôlego. Os valores estimam uma pedalada de 10 km em ritmo médio.",
  },
  {
    nome: "Natação (intensa)",
    imagem: natacao,
    caloriasPorHora: 700,
    descricao:
      "A natação em ritmo intenso é uma das atividades mais completas. Trabalha braços, pernas, respiração e condicionamento geral.",
  },
  {
    nome: "Zumba / Dança",
    imagem: trampolim,
    caloriasPorHora: 450,
    descricao:
      "A Zumba e outras danças aeróbicas combinam música e movimento, sendo divertidas e eficazes para queima calórica e coordenação.",
  },
];

const tempos = [
  { label: "15 min", valor: 0.25 },
  { label: "30 min", valor: 0.5 },
  { label: "1 hora", valor: 1 },
  { label: "2 horas", valor: 2 },
];

const CardsFisico = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);
  const [tempoSelecionado, setTempoSelecionado] = useState(2); 

  const abrirModal = (atividade) => {
    setAtividadeSelecionada(atividade);
    setTempoSelecionado(2);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAtividadeSelecionada(null);
  };

  const calcularCalorias = () => {
    const tempo = tempos[tempoSelecionado].valor;
    return Math.round(atividadeSelecionada.caloriasPorHora * tempo);
  };

  return (
    <div className="cards-fisico-container">
      {atividades.map((atividade, index) => (
        <div
          key={index}
          className="card-fisico"
          onClick={() => abrirModal(atividade)}
        >
          <img src={atividade.imagem} alt={atividade.nome} />
          <h3>{atividade.nome}</h3>
        </div>
      ))}

      {modalAberto && atividadeSelecionada && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{atividadeSelecionada.nome}</h2>
            <img
              src={atividadeSelecionada.imagem}
              alt={atividadeSelecionada.nome}
              style={{ width: "150px", marginBottom: "10px" }}
            />
            <p style={{ marginBottom: "15px" }}>
              {atividadeSelecionada.descricao}
            </p>

            <label>Tempo de atividade:</label>
            <input
              type="range"
              min="0"
              max={tempos.length - 1}
              value={tempoSelecionado}
              onChange={(e) => setTempoSelecionado(Number(e.target.value))}
            />
            <p>
              <strong>{tempos[tempoSelecionado].label}</strong>
            </p>
            <p>
              Gasto calórico médio estimado:{" "}
              <strong>{calcularCalorias()} kcal</strong>
            </p>
            <small>
              * Os valores apresentados são médias aproximadas e podem variar de
              acordo com o peso, idade e intensidade da atividade.
            </small>
            <br />
            <button onClick={fecharModal} style={{ marginTop: "15px" }}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsFisico;
