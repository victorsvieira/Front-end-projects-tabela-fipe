import { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const endpointTipoVeiculo = ["Carros", "Motos", "Caminhões"];
  const endpointMarcasCarro =
    "https://parallelum.com.br/fipe/api/v1/carros/marcas";
  const endpointMarcasMotos =
    "https://parallelum.com.br/fipe/api/v1/motos/marcas";
  const endpointMarcasCaminhoes =
    "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas";

  return (
    <>
      <div>
        <div className="header">
          <h1 className="title">Projeto: Tabela FIPE</h1>
        </div>
        <div className="main-content">
          <p className="label-dropdown">Selecione o tipo de veículo</p>
          <Dropdown endpoint={endpointTipoVeiculo} />
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
