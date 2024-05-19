import React from "react";

function Question({ letter, answer, fnSelecionar, respostaSelecionada }) {
  return (
    <button
      value={letter}
      className={`w-full min-h-[80px] flex items-center text-white p-2 gap-4 rounded-xl ${
        respostaSelecionada == letter ? "bg-purple-800" : "bg-slate-800"
      }`}
      onClick={(e) => fnSelecionar(e.target.value)}
    >
      <div className="w-[45px] h-[45px] bg-white text-black rounded-lg flex items-center justify-center text-lg pointer-events-none">
        {letter}
      </div>
      <p className="pointer-events-none text-left text-sm w-4/5">{answer}</p>
    </button>
  );
}

export default Question;
