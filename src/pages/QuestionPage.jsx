import { useEffect, useState } from "react";
import perguntas from "../perguntas.json";
import Question from "../components/Question";
import Modal from "../components/Modal";
import SummaryModal from "../components/SummaryModal";

function QuestionPage() {
  const [count, setCount] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState("");
  const [qntdAcertos, setQntdAcertos] = useState(0);
  const [status, setStatus] = useState("");
  const [respostaCerta, setRespostaCerta] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  function fnSelecionarResposta(resposta) {
    if (resposta == respostaSelecionada) return;

    setRespostaSelecionada(resposta);
  }

  function passarQuestao() {
    if (count + 1 < perguntas.length) {
      setCount(count + 1);
      setRespostaSelecionada("");
    } else {
      setRespostaSelecionada("");
      console.log("acabou");
      console.log(qntdAcertos);
      setMostrarResultado(true);
    }
  }

  function responderQuestao() {
    if (respostaSelecionada === "") return;

    if (respostaSelecionada == perguntas[count].resposta_certa) {
      console.log("acertou miseravi");
      setStatus("success");
      setQntdAcertos(qntdAcertos + 1);
    } else {
      console.log("errou animal");
      setStatus("error");
      setRespostaCerta(perguntas[count].resposta_certa);
    }

    setTimeout(() => {
      setStatus("");
      passarQuestao();
    }, 2000);
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-around 2xl:flex-row p-4">
      <div className="h-fit 2xl:h-[600px] lg:w-[600px] w-full">
        <p className="text-white opacity-60">
          Questão {count + 1} de {perguntas.length}
        </p>
        <p className="text-white lg:text-4xl text-2xl">
          {perguntas[count].pergunta}
        </p>
        <p> {respostaSelecionada}</p>
      </div>
      <div className="lg:w-[750px] min-h-[600px] flex flex-col gap-6">
        {perguntas[count].possiveis_respostas.map((resposta, index) => (
          <Question
            key={index}
            letter={resposta.letra}
            answer={resposta.resposta}
            fnSelecionar={fnSelecionarResposta}
            respostaSelecionada={respostaSelecionada}
          />
        ))}
        <button
          className="w-full h-14 bg-purple-500 text-white rounded-xl  hover:bg-purple-600 transition-all ease-in-out"
          onClick={() => responderQuestao()}
        >
          Enviar a resposta
        </button>
      </div>
      {status != "" && <Modal status={status} resposta_certa={respostaCerta} />}
      {mostrarResultado && (
        <SummaryModal
          qntdAcertos={qntdAcertos}
          qntdQuestoes={perguntas.length}
        />
      )}
    </div>
  );
}

export default QuestionPage;
