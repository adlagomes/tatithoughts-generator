import cerebroImage from "../assets/cerebro.svg";
import tatiImage from "../assets/tati.svg";
import coracaoImage from "../assets/coracao.svg";
import { useState } from "react";
import "../styles/home.css";

const collection = [
  "Calma, estudante psi... Às vezes a gente só precisa de um amigo e não de um psicólogo!",
  "Calma, estudante psi... Você pode escutar o desabafo do seu amigo e chorar junto sem procurar por soluções com ele.",
  "Calma, estudante psi... Fora do setting você é mais do que a sua futura profissão.",
  "Calma, estudante psi... A faculdade não é o local onde você vai encontrar solução pros seus problemas existenciais. Isso só na terapia mesmo.",
  "Calma, estudante psi... A clínica acontece ali onde ninguém briga por abordagem.",
  "Calma, estudante psi... seus pais não vão e nem podem te ter como psicólogo.",
  "Calma, estudante psi... pensou que pagar avaliação psicológica fosse que nem fazer teste da revista capricho?",
];
const size = collection.length;

function Home() {
  const [phrase, setPhrase] = useState("");

  function gerarFrases() {
    let id = Math.floor(Math.random() * size);

    setPhrase(collection[id]);
  }
  return (
    <div className="Home">
      <main>
        <div id="square">
          <h1>Conselhos que ninguém pediu...</h1>
          <div className="screen">
            <p>{phrase}</p>
          </div>
        </div>
          <div className="persons">
            <div id="cerebro">
              <img src={cerebroImage} alt="cerebro" />
            </div>
            <div id="tati-e-coracao">
              <img src={tatiImage} alt="tati" />
              <img src={coracaoImage} alt="coracao" />
            </div>
          </div>
        <button onClick={gerarFrases}>Clique Aqui!</button>
      </main>
    </div>
  );
}

export default Home;
