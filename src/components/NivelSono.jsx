import React, { useState } from 'react';
import './NivelSono.css';

import quatroHoras from '../assets/quatrohoras.png';
import seisHoras from '../assets/seishoras.png';
import oitoHoras from '../assets/oitohoras.png';

const opcoesSono = [
  {
    label: "4 horas",
    valor: 0,
    imagem: quatroHoras,
    descricao: "Dormir apenas 4 horas pode causar fadiga, irritabilidade, baixa concentração, enfraquecimento do sistema imunológico, pode prejudicar o ganha de massa muscular e tambem pode ser muito muito prejuducial para saude."
  },
  {
    label: "6 horas",
    valor: 1,
    imagem: seisHoras,
    descricao: "6 horas de sono oferecem um descanso moderado, mas ainda podem não ser suficientes para uma recuperação completa do corpo e da mente."
  },
  {
    label: "8 horas",
    valor: 2,
    imagem: oitoHoras,
    descricao: "Dormir 8 horas é o ideal para a maioria das pessoas. Melhora a memória, fortalece o sistema imunológico e equilibra os hormonios."
  }
];

const NivelSono = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [nivelSonoSelecionado, setNivelSonoSelecionado] = useState(1);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const nivel = opcoesSono[nivelSonoSelecionado];

  return (
    <div className="nivel-sono-container">
      <button className="abrir-modal-btn" onClick={abrirModal}>
        Avaliar Nível de Sono
      </button>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Nível de Sono</h2>
            <img
              src={nivel.imagem}
              alt={nivel.label}
              style={{ width: '150px', marginBottom: '10px' }}
            />
            <p>Quantas horas você dormiu?</p>
            <input
              type="range"
              min="0"
              max={opcoesSono.length - 1}
              value={nivelSonoSelecionado}
              onChange={(e) => setNivelSonoSelecionado(Number(e.target.value))}
            />
            <p><strong>{nivel.label}</strong></p>
            <p style={{ marginTop: '10px' }}>{nivel.descricao}</p>
            <button onClick={fecharModal} style={{ marginTop: '15px' }}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NivelSono;
