import { useState } from "react";
import QuizMental from "../components/QuizMental";
import SaudeMentalCaixa from "../components/SaudeMentalCaixa"; // novo componente
import "../styles/SaudeMental.css";

export default function SaudeMental() {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);

  return (
    <div className="saude-mental-container">
      <h1>🧠 Avaliação de Saúde Mental</h1>

      <p>
        Este quiz foi desenvolvido por um estudante de Análise e Desenvolvimento de Sistemas com o objetivo de incentivar a reflexão sobre o bem-estar mental.
        <br /><br />
        ⚠️ <strong>Este conteúdo não substitui a ajuda profissional.</strong> Se você sente que precisa de apoio, procure um psicólogo ou profissional da saúde mental.
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

      {/* Caixa de pensamento no canto inferior direito */}
      <div className="caixa-fixa-direita">
        <SaudeMentalCaixa />
      </div>
    </div>
  );
}
