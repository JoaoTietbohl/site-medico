import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/DetalhesDieta.css'

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
      <div className="container">
        <h2>Nenhum dado recebido</h2>
        <p>Por favor, volte e preencha os dados corretamente.</p>
        <button onClick={() => navigate('/')}>Voltar para o início</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="dieta-infos">
        <h2>Informações Detalhadas da Dieta</h2>
        <p><strong>Sexo:</strong> {sexo}</p>
        <p><strong>Objetivo:</strong> {objetivo}</p>
        <p><strong>Peso:</strong> {peso} kg</p>
        <p><strong>Altura:</strong> {altura} m</p>
        <p><strong>Nível de atividade física:</strong> {atividade}</p>
        <p><strong>TMB (Metabolismo Basal):</strong> {tmb} kcal</p>
        <p><strong>GET (Gasto Energético Total):</strong> {get} kcal</p>
        <p><strong>Calorias diárias recomendadas:</strong> {calorias} kcal</p>

        <h3>Macronutrientes:</h3>
        <ul>
          <li><strong>Proteínas:</strong> {proteinas} g</li>
          <li><strong>Gorduras:</strong> {gorduras} g</li>
          <li><strong>Carboidratos:</strong> {carboidratos} g</li>
        </ul>

        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>

      <section className="info-box">
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
        <p className="destaque">
          Cuide de você com responsabilidade. Alimentação saudável, atividade física e acompanhamento profissional são os pilares para uma vida equilibrada. 🌿
        </p>
      </section>
    </div>
  );
};

export default DetalhesDieta;
