import { useState } from "react";
import "./SaudeMentalCaixa.css";

export default function SaudeMentalCaixa() {
  const [texto, setTexto] = useState("");
  const [mostrarFogo, setMostrarFogo] = useState(false);
  const [textoQueimando, setTextoQueimando] = useState("");

  const apagarTexto = () => {
    if (texto.trim() !== "") {
      setTextoQueimando(texto);
      setMostrarFogo(true);
      setTimeout(() => {
        setTexto("");
        setMostrarFogo(false);
        setTextoQueimando("");
      }, 2000); // Tempo da animação
    }
  };

  return (
    <div className="caixa-saude-mental-container">
      <h2 className="caixa-saude-mental-titulo">
        Escreva um pensamento e libere 🔥
      </h2>

      <textarea
        className={`caixa-saude-mental-textarea ${mostrarFogo ? "queimando" : ""}`}
        placeholder="Digite aqui o que está te incomodando..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={mostrarFogo}
      />

      <button
        onClick={apagarTexto}
        className="caixa-saude-mental-botao"
        disabled={mostrarFogo}
      >
        Apagar Pensamento
      </button>

      {mostrarFogo && (
        <div className="fogo-area">
          <div className="texto-queimando">{textoQueimando}</div>
          <div className="fogo-animacao" />
        </div>
      )}
    </div>
  );
}
