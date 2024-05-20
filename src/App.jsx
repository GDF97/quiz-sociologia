import { Link } from "react-router-dom";
import Integrantes from "./components/Integrantes";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [integrantes, setIntegrantes] = useState([
    "Pedro Silva",
    "Roberto Iori",
    "Pedro Ferrari",
    "Francisco Pedro",
    "Lucas Vilarinho",
    "Patrick Davidson",
  ]);
  return (
    <div className="w-full min-h-screen bg-slate-950 p-8 flex flex-col justify-center items-center gap-12 relative">
      <h1 className="text-white text-6xl w-[700px] text-center">
        Perguntas sobre <strong>Racismo/Xenofobia</strong>
      </h1>
      <Link to={"/quiz"}>
        <button className="bg-purple-500 text-white w-80 h-12 rounded-lg hover:bg-purple-600 transition-all ease-in-out">
          Iniciar
        </button>
      </Link>

      <div className="absolute bottom-16 right-16 w-56 h-9 bg-white bg-opacity-10 rounded-lg ">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute bottom-14 w-full h-fit  rounded-lg flex flex-col gap-6">
            {open &&
              integrantes.map((nome, index) => (
                <Integrantes nome={nome} key={index} index={index} />
              ))}
          </div>
          <button
            className="text-white w-full h-full"
            onClick={() => setOpen(!open)}
          >
            Integrantes
          </button>
        </div>
      </div>

      <Link to={"/relatorio"}>
        <button className="bg-blue-950 text-white absolute bottom-16 left-16 w-56 h-9 rounded-lg hover:bg-blue-900 transition-all ease-in-out">
          Página Inicial
        </button>
      </Link>
    </div>
  );
}

export default App;
