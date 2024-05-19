import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 p-8 flex flex-col justify-center items-center gap-12">
      <h1 className="text-white text-6xl w-[700px] text-center">
        Perguntas sobre <strong>Racismo/Xenofobia</strong>
      </h1>
      <Link to={"/quiz"}>
        <button className="bg-purple-500 text-white w-80 h-12 rounded-lg hover:bg-purple-600 transition-all ease-in-out">
          Iniciar
        </button>
      </Link>
    </div>
  );
}

export default App;
