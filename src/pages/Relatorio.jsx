import { Link } from "react-router-dom";

function Relatorio() {
  return (
    <div className="w-full min-h-screen relative bg-slate-950 flex flex-col items-center p-6 gap-6">
      <h1 className="text-4xl text-white font-bold">Relátorio</h1>
      <div className="w-[675px] p-3 text-white text-justify flex flex-col gap-4">
        <p>Introdução</p>
        <p>
          Este relatório tem como objetivo abordar dois casos emblemáticos de
          preconceito e exploração de trabalhadores nordestinos no Brasil, um
          ocorrido no Rio de Janeiro e outro no Rio Grande do Sul. Ambos os
          casos expõem práticas discriminatórias e desumanas que afetam aqueles
          que migraram do Nordeste em busca de oportunidades.
        </p>
        <p>Preconceito no Rio de Janeiro</p>
        <p>
          No primeiro caso, apresentado através de um vídeo, foi possível
          observar um quadro de preconceito generalizado contra nordestinos por
          parte de alguns fluminenses. As opiniões expressas revelaram
          estereótipos negativos, associando os nordestinos a características
          pejorativas como sujeira e preguiça, muitas vezes utilizando o termo
          "paraíbas" de forma depreciativa.
        </p>
        <p>Exploração no Rio Grande do Sul</p>
        <p>
          O segundo caso ocorreu nas vinícolas da Aurora, no Rio Grande do Sul,
          onde mais de 200 trabalhadores nordestinos, em sua maioria negros,
          foram submetidos a condições de trabalho análogas à escravidão. O
          proprietário das vinícolas prometeu salários dignos, alimentação e
          moradia, porém, na prática, os trabalhadores foram submetidos a
          jornadas exaustivas, sem remuneração adequada e em condições
          degradantes.
        </p>
        <p>Análise e Conclusão</p>
        <p>
          Ambos os casos evidenciam não apenas o preconceito arraigado contra
          nordestinos em diferentes regiões do Brasil, mas também a exploração
          desumana desses trabalhadores, que muitas vezes são atraídos sob
          falsas promessas de condições melhores. A narrativa de "salvadores"
          que alguns empregadores adotam para justificar a exploração revela uma
          mentalidade colonialista e racista que persiste em nossa sociedade.
        </p>
        <p>
          É destacado a necessidade urgente de combater o preconceito e a
          exploração de trabalhadores nordestinos, implementando políticas que
          garantam seus direitos humanos e laborais. Além disso, ressalta a
          importância de conscientização e educação para desconstruir
          estereótipos e promover a igualdade e o respeito entre todas as
          regiões e etnias do Brasil.
        </p>
      </div>
      <Link to={"/"}>
        <button className="bg-purple-600 text-white absolute bottom-16 left-16 w-56 h-9 rounded-lg hover:bg-purple-700 transition-all ease-in-out">
          Página Inicial
        </button>
      </Link>
    </div>
  );
}

export default Relatorio;
