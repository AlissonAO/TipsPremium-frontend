import React, { useState } from "react";
import "./global.css";
import Router from "./routes";
import Dasboard from "../src/pages/Dashboard/index";
import MenuCorrida from "./pages/Corridas/MenuCorrida/index";
import Corrida from "./pages/Corridas/index";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  document.title = "Tips";
  const [teste, setTeste] = useState(false);

  const clicou = (valor) => {
    console.log("chegou aki " + valor);
    setTeste(valor);
  };

  return (
    <div className="conteinerGlobal">
      <Provider store={store}>
        {/* <Router></Router> */}
        {/* <Dasboard></Dasboard> */}
        <Corrida></Corrida>
      </Provider>
    </div>
  );
}

export default App;
