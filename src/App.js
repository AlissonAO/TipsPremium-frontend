import React from "react";
import "./global.css";
import Router from "./routes";
import Dasboard from "../src/pages/Dashboard/index";
import MenuCorrida from "./pages/Corridas/MenuCorrida/index";
import Corrida from "./pages/Corridas/index";
import Menu from "./pages/Menu/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

function App() {
  return (
    <div>
      <Router></Router>
      {/* <Provider store={store}> */}
      {/* <Dasboard></Dasboard> */}
      {/* <Menu></Menu>*/}
      {/* <Corrida></Corrida> */}

      {/* <Teste></Teste> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
