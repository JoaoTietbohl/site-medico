// src/components/DietaModal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DietaModal.css";

const activityFactors = {
  sedentario: 1.2,
  leve: 1.375,
  moderado: 1.55,
  ativo: 1.725,
  muitoAtivo: 1.9,
};

const DietaModal = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!gender || !goal || !weight || !height || !activityLevel) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const peso = parseFloat(weight);
    const altura = parseFloat(height);
    const fator = activityFactors[activityLevel];

    let tmb = 0;
    if (gender === "homem") {
      tmb = 10 * peso + 6.25 * (altura * 100) - 5 * 25 + 5;
    } else {
      tmb = 10 * peso + 6.25 * (altura * 100) - 5 * 25 - 161;
    }

    const get = tmb * fator;

    const calorias = goal === "ganhar" ? get + 500 : get - 500;

    const proteinas = Math.round((calorias * 0.3) / 4);
    const gorduras = Math.round((calorias * 0.3) / 9);
    const carboidratos = Math.round((calorias * 0.4) / 4);

    navigate("/detalhes", {
      state: {
        sexo: gender,
        objetivo: goal,
        peso: weight,
        altura: height,
        atividade: activityLevel,
        tmb: Math.round(tmb),
        get: Math.round(get),
        calorias: Math.round(calorias),
        proteinas,
        gorduras,
        carboidratos,
      },
    });

    setGender("");
    setGoal("");
    setWeight("");
    setHeight("");
    setActivityLevel("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="dieta-modal-overlay">
      <div className="dieta-modal">
        <h2>Dieta Personalizada</h2>

        <p>Qual seu sexo?</p>
        <div className="dieta-btn-group">
          <button onClick={() => setGender("homem")} className={gender === "homem" ? "dieta-selected" : ""}>Homem</button>
          <button onClick={() => setGender("mulher")} className={gender === "mulher" ? "dieta-selected" : ""}>Mulher</button>
        </div>

        <p>Qual seu objetivo?</p>
        <div className="dieta-btn-group">
          <button onClick={() => setGoal("ganhar")} className={goal === "ganhar" ? "dieta-selected" : ""}>Ganhar peso</button>
          <button onClick={() => setGoal("perder")} className={goal === "perder" ? "dieta-selected" : ""}>Perder peso</button>
        </div>

        <p>Nível de atividade física</p>
        <div className="dieta-btn-group dieta-activity">
          <button onClick={() => setActivityLevel("sedentario")} className={activityLevel === "sedentario" ? "dieta-selected" : ""}>Sedentário</button>
          <button onClick={() => setActivityLevel("leve")} className={activityLevel === "leve" ? "dieta-selected" : ""}>Leve</button>
          <button onClick={() => setActivityLevel("moderado")} className={activityLevel === "moderado" ? "dieta-selected" : ""}>Moderado</button>
          <button onClick={() => setActivityLevel("ativo")} className={activityLevel === "ativo" ? "dieta-selected" : ""}>Ativo</button>
          <button onClick={() => setActivityLevel("muitoAtivo")} className={activityLevel === "muitoAtivo" ? "dieta-selected" : ""}>Muito Ativo</button>
        </div>

        <p>Informe seus dados</p>
        <input
          type="text"
          placeholder="Peso (ex: 80.5)"
          value={weight}
          onChange={(e) => {
            let val = e.target.value.replace(/[^0-9.]/g, '');
            const parts = val.split('.');
            if (parts.length > 2) return;
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

        <div className="dieta-btn-group">
          <button className="dieta-back" onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>Calcular</button>
        </div>
      </div>
    </div>
  );
};

export default DietaModal;
