import React from "react";
import "../styles/saudefisica.css";

import imgTopo from "../assets/ativiades.png";

const SaudeFisica = () => {
  return (
    <div class="saude-fisica-page">
  <div class="header-image">
    <h1 class="header-title">Saúde Física</h1>
  </div>

  <div class="conteudo">
    <h2>Entendendo os Níveis de Atividade Física</h2>
    <p>
      Antes de tudo, é importante entender que existem diferentes níveis de atividade física. 
      Eles ajudam a calcular melhor o seu gasto calórico diário e a planejar uma rotina mais saudável. 
      Veja abaixo:
    </p>
    <ul>
      <li><span class="destaque">Sedentário:</span> Pessoa com rotina parada, quase sem atividade física além de tarefas básicas.</li>
      <li><span class="destaque">Levemente ativo:</span> Caminhadas ocasionais, tarefas domésticas, pequenas atividades físicas leves.</li>
      <li><span class="destaque">Moderadamente ativo:</span> Pratica exercícios moderados (como musculação moderada, natação leve) de 3 a 5 vezes por semana.</li>
      <li><span class="destaque">Ativo:</span> Exercícios intensos ou longos quase diariamente.</li>
      <li><span class="destaque">Muito ativo:</span> Atividade física intensa diária ou treino profissional.</li>
    </ul>

    <div class="aviso">
      <p>
        Este site foi criado por um estudante e tem apenas fins educativos.
        <span class="destaque">Sempre procure um profissional da saúde</span> para orientações seguras e adequadas à sua realidade.
      </p>
    </div>

    <h2>A Importância da Atividade Física</h2>
    <p>
      Praticar atividade física regularmente <span class="destaque">melhora não só o corpo, mas também a mente</span>.
      Ela ajuda a controlar o peso, reduzir o estresse, fortalecer músculos e ossos, melhorar o humor e prevenir doenças.
    </p>
    <p>
      E o melhor: <span class="destaque">você não precisa estar na academia todos os dias</span> para se cuidar!
      Caminhadas, danças, futebol com os amigos — tudo isso já traz benefícios.
    </p>
    <p>
      O importante é se movimentar e encontrar uma atividade que <span class="destaque">você goste</span>.
      Estar em forma não é só estética — é também <span class="destaque">saúde, bem-estar e autoestima</span>.
    </p>
  </div>
</div>
  );
};

export default SaudeFisica;
