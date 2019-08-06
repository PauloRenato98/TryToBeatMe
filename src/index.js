import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numpalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, SetMax] = useState(300);

  const iniciarjogo = () => {
    setEstado("RODANDO");
    setMin(0);
    SetMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarjogo}> Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numpalpites + 1);
    SetMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numpalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <p>
        Acertei o numero {palpite} com {numpalpites} chutes
      </p>
    );
  }

  return (
    <div className="App">
      <p>o meu numero é {palpite}</p>
      <button onClick={menor}>menor</button>
      <button onClick={acertou}>acertou</button>
      <button onClick={maior}>maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Paulo" />, rootElement);
