import React from "react";
import "../styles/saudefisica.css";
import CardsFisico from "../components/CardsFisico";

const SaudeFisica = () => {
  return (
    <div className="saude-fisica-page">
      <div className="header-image">
        <h1 className="header-title">Saúde Física</h1>
      </div>

      <div className="conteudo">
        <h2>Entendendo os Níveis de Atividade Física</h2>
        <p>
          Antes de tudo, é importante entender que existem diferentes níveis de atividade física. 
          Eles ajudam a calcular melhor o seu gasto calórico diário e a planejar uma rotina mais saudável. 
          Veja abaixo:
        </p>
        <ul>
          <li><span className="destaque">Sedentário:</span> Pessoa com rotina parada, quase sem atividade física além de tarefas básicas.</li>
          <li><span className="destaque">Levemente ativo:</span> Caminhadas ocasionais, tarefas domésticas, pequenas atividades físicas leves.</li>
          <li><span className="destaque">Moderadamente ativo:</span> Pratica exercícios moderados (como musculação moderada, natação leve) de 3 a 5 vezes por semana.</li>
          <li><span className="destaque">Ativo:</span> Exercícios intensos ou longos quase diariamente.</li>
          <li><span className="destaque">Muito ativo:</span> Atividade física intensa diária ou treino profissional.</li>
        </ul>

       
        <h2>A Importância da Atividade Física</h2>
        <p>
          Praticar atividade física regularmente <span className="destaque">melhora não só o corpo, mas também a mente</span>.
          Ela ajuda a controlar o peso, reduzir o estresse, fortalecer músculos e ossos, melhorar o humor e prevenir doenças.
        </p>
        <p>
          E o melhor: <span className="destaque">você não precisa estar na academia todos os dias</span> para se cuidar!
          Caminhadas, danças, futebol com os amigos — tudo isso já traz benefícios.
        </p>
        <p>
          O importante é se movimentar e encontrar uma atividade que <span className="destaque">você goste</span>.
          Estar em forma não é só estética — é também <span className="destaque">saúde, bem-estar e autoestima</span>.
        </p>
     <CardsFisico/>

        <div className="aviso">
  <p>
    Este site foi criado por um estudante e tem apenas fins educativos.
    <span className="destaque"> Sempre procure um profissional da saúde</span> para orientações seguras e adequadas à sua realidade.
    <br />
    <span style={{ display: "block", marginTop: "10px" }}>
      Os cálculos aqui apresentados foram feitos com base em um homem adulto de 25 anos, com 70 kg. Os valores podem variar de pessoa para pessoa e servem apenas como uma estimativa.
    </span>
  </p>
</div>
      </div>
      
    </div>
  );
};

export default SaudeFisica;
