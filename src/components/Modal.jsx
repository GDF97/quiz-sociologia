import { Check, X } from "lucide-react";
import React from "react";

function Modal({ status, resposta_certa }) {
  const message_error = `Infelizmente a resposta está errada, a resposta certa era ${resposta_certa}`;
  const message_success = "Parabéns! A resposta está correta!";
  return (
    <div className="w-full min-h-screen bg-opacity-10 bg-white backdrop-blur-sm absolute top-0 left-0 flex justify-center items-center">
      <div className="w-96 h-fit bg-white rounded-2xl p-4 flex flex-col items-center gap-6">
        <div
          className={`w-20 h-20 text-white rounded-full flex items-center justify-center ${
            status == "error" ? "bg-red-500" : "bg-green-600"
          }`}
        >
          {status == "error" ? <X size={"48px"} /> : <Check size={"48px"} />}
        </div>
        <p className="text-center text-lg">
          {status == "error" ? message_error : message_success}
        </p>
      </div>
    </div>
  );
}

export default Modal;
