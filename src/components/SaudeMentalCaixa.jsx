import { useState } from "react";
import "./SaudeMentalCaixa.css"; // ✅ Import do CSS corrigido

export default function SaudeMentalCaixa() {
  const [texto, setTexto] = useState("");
  const [mostrarFogo, setMostrarFogo] = useState(false);

  const apagarTexto = () => {
    if (texto.trim() !== "") {
      setMostrarFogo(true);
      setTimeout(() => {
        setTexto("");
        setMostrarFogo(false);
      }, 1500); // tempo da "queima"
    }
  };

  return (
    <div className="caixa-saude-mental-container">
      <h2 className="caixa-saude-mental-titulo">Escreva um pensamento e libere</h2>
      
      <textarea
        className="caixa-saude-mental-textarea"
        placeholder="Digite aqui o que está te incomodando..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={mostrarFogo}
      />

      <button onClick={apagarTexto} className="caixa-saude-mental-botao" disabled={mostrarFogo}>
        Apagar Pensamento
      </button>

      {mostrarFogo && <div className="fogo-animacao" />}
    </div>
  );
}
