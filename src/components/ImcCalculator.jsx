import React, { useState } from 'react';

export default function ImcCalculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  function formatAlturaInput(e) {
    let valor = e.target.value.replace(/\D/g, ''); // só números
    if (valor.length > 3) valor = valor.slice(0, 3);
    if (valor.length >= 2) {
      valor = valor.slice(0, valor.length - 2) + '.' + valor.slice(valor.length - 2);
    }
    setAltura(valor);
  }

  function formatPesoInput(e) {
    let valor = e.target.value.replace(/\D/g, ''); // só números
    if (valor.length > 6) valor = valor.slice(0, 6);
    if (valor.length >= 2) {
      valor = valor.slice(0, valor.length - 1) + '.' + valor.slice(valor.length - 1);
    }
    setPeso(valor);
  }

  function calcularIMC() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(1));
  }

  function textoResultado(imc) {
    const valor = parseFloat(imc);
    if (valor < 18.5) {
      return (
        <>
          <strong>Baixo peso (IMC abaixo de 18,5)</strong><br />
          Seu peso está abaixo do recomendado para sua altura. Isso pode indicar falta de nutrientes essenciais, baixa energia ou outras questões de saúde.<br />
          <em>Dica:</em> Procure orientação profissional para garantir uma alimentação equilibrada e saudável.
        </>
      );
    }
    if (valor >= 18.5 && valor <= 24.9) {
      return (
        <>
          <strong>Peso normal (IMC entre 18,5 e 24,9)</strong><br />
          Parabéns! Seu peso está dentro da faixa considerada saudável para sua altura. Continue mantendo bons hábitos de alimentação e atividade física para preservar seu bem-estar.<br />
          <em>Dica:</em> Invista em exercícios regulares e uma alimentação balanceada para manter a saúde em dia.
        </>
      );
    }
    if (valor >= 25 && valor <= 29.9) {
      return (
        <>
          <strong>Sobrepeso (IMC entre 25 e 29,9)</strong><br />
          Você está acima do peso ideal para sua altura, o que pode aumentar o risco de alguns problemas de saúde a longo prazo.<br />
          <em>Dica:</em> Pequenas mudanças no dia a dia, como incluir caminhadas, controlar a alimentação e reduzir o sedentarismo, já podem trazer grandes benefícios.
        </>
      );
    }
    if (valor >= 30) {
      return (
        <>
          <strong>Obesidade (IMC igual ou acima de 30)</strong><br />
          Seu peso está em um nível que pode trazer impactos significativos para sua saúde. É importante buscar acompanhamento médico e nutricional para cuidar do seu corpo de forma segura.<br />
          <em>Dica:</em> Procure ajuda profissional para montar um plano de cuidados adequado para você.
        </>
      );
    }
    return null;
  }

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Calcule seu IMC</h2>

      <label>
        Peso (kg): <br />
        <input
          type="text"
          value={peso}
          onChange={formatPesoInput}
          placeholder="Ex: 70900 (70.9 kg)"
          style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
        />
      </label>

      <label>
        Altura (m): <br />
        <input
          type="text"
          value={altura}
          onChange={formatAlturaInput}
          placeholder="Ex: 175 (1.75 m)"
          style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
        />
      </label>

      <button
        onClick={calcularIMC}
        style={{
          padding: '0.7rem 1.5rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Calcular IMC
      </button>

      {resultado && (
        <div style={{ marginTop: '1.5rem', backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '6px' }}>
          <p><strong>Seu IMC é: {resultado}</strong></p>
          <p>{textoResultado(resultado)}</p>
        </div>
      )}
    </div>
  );
}
