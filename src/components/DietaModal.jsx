// src/components/DietaModal.jsx
import React, { useState } from "react";
import "./DietaModal.css";

const DietaModal = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = () => {
    if (!gender || !goal || !weight || !height) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log({ gender, goal, weight, height });
    alert("Em breve, sua dieta será calculada!");
    onClose();

    // Limpa os dados
    setGender("");
    setGoal("");
    setWeight("");
    setHeight("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Dieta Personalizada</h2>

        <p>Qual seu sexo?</p>
        <div className="btn-group">
          <button
            onClick={() => setGender("homem")}
            className={gender === "homem" ? "selected" : ""}
          >
            Homem
          </button>
          <button
            onClick={() => setGender("mulher")}
            className={gender === "mulher" ? "selected" : ""}
          >
            Mulher
          </button>
        </div>

        <p>Qual seu objetivo?</p>
        <div className="btn-group">
          <button
            onClick={() => setGoal("ganhar")}
            className={goal === "ganhar" ? "selected" : ""}
          >
            Ganhar peso
          </button>
          <button
            onClick={() => setGoal("perder")}
            className={goal === "perder" ? "selected" : ""}
          >
            Perder peso
          </button>
        </div>

        <p>Informe seus dados</p>
       <input
  type="text"
  placeholder="Peso (ex: 80.5)"
  value={weight}
  onChange={(e) => {
    let val = e.target.value;

    // Permite apenas números e um ponto
    val = val.replace(/[^0-9.]/g, '');

    // Evita múltiplos pontos
    const parts = val.split('.');
    if (parts.length > 2) return;

    // Limita casas antes e depois do ponto
    if (parts[0].length > 3) parts[0] = parts[0].slice(0, 3);
    if (parts[1]?.length > 3) parts[1] = parts[1].slice(0, 3);

    const formatted = parts.length === 2 ? `${parts[0]}.${parts[1]}` : parts[0];
    setWeight(formatted);
  }}
  maxLength={7}
/>


        
        <input
          type="text"
          placeholder="Altura (ex: 1.75)"
          value={height}
          maxLength={4}
          onChange={(e) => {
            let val = e.target.value.replace(/[^0-9]/g, "");
            if (val.length <= 3) {
              if (val.length > 1) val = val.slice(0, 1) + "." + val.slice(1);
              setHeight(val);
            }
          }}
        />

        <div className="btn-group">
          <button className="back" onClick={onClose}>
            Cancelar
          </button>
          <button onClick={handleSubmit}>Calcular</button>
        </div>
      </div>
    </div>
  );
};

export default DietaModal;
