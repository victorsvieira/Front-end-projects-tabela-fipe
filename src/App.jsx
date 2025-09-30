import { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const veihcleType = ["Carros", "Motos", "Caminhões"];
  const endpointMarcasCarro = "https://parallelum.com.br/fipe/api/v1/";
  const [brandEndpoint, setBrandendpoint] = useState("");
  const [modelEndpoint, setModelendpoint] = useState("");
  const [yearEndpoint, setYearendpoint] = useState("");

  return (
    <>
      <div>
        <div className="header">
          <h1 className="title">Projeto: Tabela FIPE</h1>
        </div>
        <div className="main-content">
          <p className="label-dropdown">Selecione o tipo de veículo</p>
          <Dropdown endpoint={veihcleType} />
          <p className="label-dropdown">Selecione a marca (fabricante)</p>
          <Dropdown endpoint={endpointTipoVeiculo} />
          <p className="label-dropdown">Selecione o modelo</p>
          <Dropdown endpoint={endpointTipoVeiculo} />
          <p className="label-dropdown">Selecione o ano</p>
          <Dropdown endpoint={endpointTipoVeiculo} />
        </div>
      </div>
    </>
  );
}

export default App;
