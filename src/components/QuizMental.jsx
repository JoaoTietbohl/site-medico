import { useState } from "react";
import "./QuizMental.css";

export default function QuizMental({ fechar }) {
  /* ---------------- PERGUNTAS ---------------- */
  const perguntas = [
    {
      pergunta: "Como você tem se sentido ao acordar?",
      opcoes: [
        { texto: "Motivado(a) e disposto(a)", linha: "A" },
        { texto: "Depende do dia, às vezes bem, às vezes cansado(a)", linha: "B" },
        { texto: "Já acordo cansado(a) ou preocupado(a)", linha: "C" },
      ],
    },
    {
      pergunta: "Como lida com imprevistos no dia a dia?",
      opcoes: [
        { texto: "Encaro com calma e resolvo no meu tempo", linha: "A" },
        { texto: "Às vezes fico irritado(a), mas me acalmo depois", linha: "B" },
        { texto: "Fico muito estressado(a) ou ansioso(a)", linha: "C" },
      ],
    },
    {
      pergunta: "Quantas pausas de descanso/relaxamento você faz durante o dia?",
      opcoes: [
        { texto: "Faço sempre, é parte da minha rotina", linha: "A" },
        { texto: "Tento, mas nem sempre consigo", linha: "B" },
        { texto: "Quase nunca, minha rotina não permite", linha: "C" },
      ],
    },
    {
      pergunta: "Como estão seus pensamentos nos últimos dias?",
      opcoes: [
        { texto: "Tranquilos, focados no presente", linha: "A" },
        { texto: "Às vezes acelerados, mas consigo controlar", linha: "B" },
        { texto: "Sempre acelerados, preocupações constantes", linha: "C" },
      ],
    },
    {
      pergunta: "Como está sua qualidade de sono?",
      opcoes: [
        { texto: "Durmo bem, acordo descansado(a)", linha: "A" },
        { texto: "Varia; tem noites boas e ruins", linha: "B" },
        { texto: "Sono agitado, difícil dormir ou acordar descansado(a)", linha: "C" },
      ],
    },
    {
      pergunta: "Você sente prazer nas atividades do dia a dia?",
      opcoes: [
        { texto: "Sim, mesmo nas coisas simples", linha: "A" },
        { texto: "Depende, às vezes sim, às vezes não", linha: "B" },
        { texto: "Não tenho sentido muito prazer nas coisas", linha: "C" },
      ],
    },
    {
      pergunta: "Com que frequência você sente ansiedade ou irritação?",
      opcoes: [
        { texto: "Raramente, consigo manter a calma", linha: "A" },
        { texto: "Com certa frequência, mas nem sempre", linha: "B" },
        { texto: "Quase todos os dias, é constante", linha: "C" },
      ],
    },
    {
      pergunta: "Você tira algum tempo só para você? (autocuidado, hobbies, relaxamento)",
      opcoes: [
        { texto: "Sim, é prioridade pra mim", linha: "A" },
        { texto: "Tento, mas não é sempre que consigo", linha: "B" },
        { texto: "Não, nunca sobra tempo pra isso", linha: "C" },
      ],
    },
  ];

  /* ---------------- RESULTADOS ---------------- */
  const resultados = {
    A: {
      titulo: "Equilíbrio Alto",
      descricao:
        "Parabéns! Você demonstra um bom nível de equilíbrio emocional. Continue cuidando de você e mantendo seus hábitos saudáveis.",
    },
    B: {
      titulo: "Equilíbrio Moderado",
      descricao:
        "Você está no meio do caminho. Às vezes se sente bem, outras vezes sobrecarregado(a). Fique atento(a) aos sinais e busque práticas de autocuidado.",
    },
    C: {
      titulo: "Estresse Elevado",
      descricao:
        "Seu nível de estresse ou desgaste emocional está alto. Considere priorizar sua saúde mental, buscar apoio e criar espaços de descanso na sua rotina.",
    },
  };

  /* ---------------- ESTADOS ---------------- */
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);

  /* ---------------- HANDLERS ---------------- */
  const selecionarResposta = (indexPergunta, linha) =>
    setRespostas({ ...respostas, [indexPergunta]: linha });

  const finalizarQuiz = () => {
    const contagem = { A: 0, B: 0, C: 0 };
    Object.values(respostas).forEach((l) => contagem[l]++);

    const linhaVencedora = Object.entries(contagem).reduce((a, b) =>
      a[1] >= b[1] ? a : b
    )[0];

    setResultado(linhaVencedora);
  };

  const todasRespondidas = Object.keys(respostas).length === perguntas.length;

  /* ---------------- JSX ---------------- */
  return (
    <div className="quizmental-container">
      <div className="quizmental-card">
        <h1 className="quizmental-titulo">🧠 Avaliação de Saúde Mental</h1>

        {resultado ? (
          /* ----------- tela de resultado ----------- */
          <div className="quizmental-resultado">
            <h2 className="quizmental-subtitulo">
              {resultados[resultado].titulo}
            </h2>
            <p>{resultados[resultado].descricao}</p>
            {/* Botão para FECHAR o quiz */}
            <button onClick={fechar} className="quizmental-botao">
              Fechar Quiz
            </button>
          </div>
        ) : (
          /* ----------- perguntas ----------- */
          <>
            {perguntas.map((item, index) => (
              <div key={index} className="quizmental-pergunta">
                <h2>{item.pergunta}</h2>
                {item.opcoes.map((opcao, idx) => (
                  <button
                    key={idx}
                    id="opcao-resposta"
                    className={`quizmental-opcao ${
                      respostas[index] === opcao.linha ? "selecionada" : ""
                    }`}
                    onClick={() => selecionarResposta(index, opcao.linha)}
                  >
                    {opcao.texto}
                  </button>
                ))}
              </div>
            ))}

            <button
              disabled={!todasRespondidas}
              onClick={finalizarQuiz}
              className={`quizmental-botao ${
                !todasRespondidas ? "desativado" : ""
              }`}
            >
              Ver Resultado
            </button>
          </>
        )}
      </div>
    </div>
  );
}
