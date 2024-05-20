import "../teste.css";

function Integrantes({ nome, index, animation }) {
  return (
    <button
      className={`w-full h-9 bg-white bg-opacity-10 rounded-lg text-white slideIn mydelay-${index}`}
    >
      {nome}
    </button>
  );
}

export default Integrantes;
