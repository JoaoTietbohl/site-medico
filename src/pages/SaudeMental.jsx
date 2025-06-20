import { useState } from "react";
import QuizMental from "../components/QuizMental";
import SaudeMentalCaixa from "../components/SaudeMentalCaixa";
import NivelSono from "../components/NivelSono";
import "../styles/SaudeMental.css";

export default function SaudeMental() {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);

  

  return (
    <div className="pagina-saude-mental">
      {/* Coluna da esquerda */}
      <div className="coluna-esquerda">
        <div className="sono-container">
          <h2>😴 A Importância do Sono</h2>
          <p>
            Dormir bem é essencial para manter nosso corpo saudável e funcionando corretamente.
            Durante o sono, nosso organismo realiza processos importantes como a recuperação muscular,
            construção de massa magra e regulação hormonal — fundamentais para quem busca saúde física e força.
          </p>
          <p>
            Além disso, o sono tem um papel crucial na saúde mental. Ele ajuda a equilibrar o humor,
            reduzir o estresse e melhorar a capacidade de concentração, memória e tomada de decisões.
          </p>
          <NivelSono />
        </div>
      </div>

      {/* Coluna central */}
      <div className="coluna-central">
        <div className="saude-mental-container">
          <h1>🧠 Avaliação de Saúde Mental</h1>
          <p>
            Este quiz foi desenvolvido por um estudante de Análise e Desenvolvimento de Sistemas com o objetivo de incentivar a reflexão sobre o bem-estar mental.
            <br /><br />
            ⚠️ <strong id="triangulo">Este conteúdo não substitui a ajuda profissional.</strong> Se você sente que precisa de apoio, procure um psicólogo ou profissional da saúde mental.
          </p>

          <button
            onClick={() => setMostrarQuiz(true)}
            className="saude-mental-botao"
          >
            Fazer o Quiz
          </button>

          {mostrarQuiz && (
            <div className="quizmental-container">
              <QuizMental fechar={() => setMostrarQuiz(false)} />
            </div>
          )}
        </div>
      </div>

      {/* Coluna da direita */}
      <div className="coluna-direita">
        <div className="caixa-fixa-direita">
          <SaudeMentalCaixa />
        </div>
      </div>
    </div>
  );
}
