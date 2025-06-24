import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/DetalhesDieta.css';

const DetalhesDieta = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    sexo,
    objetivo,
    peso,
    altura,
    atividade,
    tmb,
    get,
    calorias,
    proteinas,
    gorduras,
    carboidratos
  } = location.state || {};

  if (!location.state) {
    return (
      <div id="detalhes-dieta-container">
        <h2 id="detalhes-dieta-titulo">Nenhum dado recebido</h2>
        <p id="detalhes-dieta-aviso">Por favor, volte e preencha os dados corretamente.</p>
        <button id="detalhes-dieta-btn-voltar" onClick={() => navigate('/')}>
          Voltar para o início
        </button>
      </div>
    );
  }

  return (
    <div id="detalhes-dieta-container">
      <div id="detalhes-dieta-infos">
        <h2 id="detalhes-dieta-titulo">Informações Detalhadas da Dieta</h2>

<div id='Informaçoes'>
        <p><strong>Sexo:</strong> {sexo}</p>
        <p><strong>Objetivo:</strong> {objetivo}</p>
        <p><strong>Peso:</strong> {peso} kg</p>
        <p><strong>Altura:</strong> {altura} m</p>
        <p><strong>Nível de atividade física:</strong> {atividade}</p>
        <p><strong>TMB (Metabolismo Basal):</strong> {tmb} kcal</p>
        <p><strong>GET (Gasto Energético Total):</strong> {get} kcal</p>
        <p><strong>Calorias diárias recomendadas:</strong> {calorias} kcal</p>

        <h3 id="detalhes-dieta-subtitulo">Macronutrientes:</h3>
        <ul id="detalhes-dieta-macros">
          <li><strong>Proteínas:</strong> {proteinas} g</li>
          <li><strong>Gorduras:</strong> {gorduras} g</li>
          <li><strong>Carboidratos:</strong> {carboidratos} g</li>
        </ul>
</div>
        <button id="detalhes-dieta-btn-voltar" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>

      <section id="detalhes-dieta-info-box">
        <h3>Nota Importante</h3>
        <p>
          Esta dieta apresenta uma estimativa geral dos macronutrientes que seu corpo pode precisar, com base nas informações fornecidas.
          No entanto, é fundamental lembrar que <strong>apenas um profissional de saúde</strong> — como um nutricionista ou médico —
          pode avaliar corretamente seu nível de atividade física, necessidades específicas e acompanhar sua evolução.
        </p>
        <p>
          Use esta orientação como um <strong>ponto de partida</strong>, não como uma solução definitiva.
          Os <strong>macronutrientes</strong> são só uma parte do todo.
        </p>
        <p>
          Seu corpo se adapta à dieta com o tempo, por isso é essencial <strong>ajustá-la com orientação profissional</strong>.
          Associe sua alimentação a <strong>atividade física regular</strong> para melhores resultados.
        </p>
        <p>
          Imagine seu corpo como uma casa em construção: <strong>a dieta é o cimento</strong> que sustenta,
          <strong>os exercícios são os tijolos</strong> que estruturam.
        </p>
        <p className="detalhes-dieta-destaque">
          Cuide de você com responsabilidade. Alimentação saudável, atividade física e acompanhamento profissional são os pilares para uma vida equilibrada. 🌿
        </p>
      </section>
    </div>
  );
};

export default DetalhesDieta;
