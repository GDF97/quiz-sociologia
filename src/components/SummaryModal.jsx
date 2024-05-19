import { Meh, Frown, Smile } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SummaryModal({ qntdAcertos, qntdQuestoes }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (qntdAcertos > Math.ceil(qntdQuestoes / 2)) {
      setStatus("bom");
    } else if (qntdAcertos > 1 && qntdAcertos <= Math.ceil(qntdQuestoes / 2)) {
      setStatus("regular");
    } else {
      setStatus("pessimo");
    }
  }, [qntdAcertos, qntdQuestoes]);

  return (
    <div className="w-full min-h-screen bg-opacity-10 bg-white backdrop-blur-sm absolute top-0 left-0 flex justify-center items-center">
      <div>
        <div className="w-96 h-fit bg-white rounded-2xl p-4 flex flex-col items-center gap-6">
          <div
            className={`w-20 h-20 text-white rounded-full flex items-center justify-center ${
              status === "bom"
                ? "bg-green-500"
                : status === "regular"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {status === "bom" && <Smile size={"48px"} />}
            {status === "regular" && <Meh size={"48px"} />}
            {status === "pessimo" && <Frown size={"48px"} />}
          </div>
          <p>
            Você acertou {qntdAcertos} de {qntdQuestoes} questões
          </p>
          <Link to={"/"} className="hover:underline hover:text-purple-500">
            Voltar para a Página Inicial?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SummaryModal;
